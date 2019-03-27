import {join} from 'path'
import getResult from './shared/compare-result'
import printer from './shared/markdown-printer'
import writeFile from './shared/write-file'
import has from './shared/has'
import isEqualRuleValue from './shared/is-equal-rule-value'

const configs = {
  // fisker
  xwtec: require('./configs/xwtec-default').default,
  'xwtec/legacy': require('./configs/xwtec-legacy').default,
  'xwtec/vue': require('./configs/xwtec-vue').default,
  // vue
  vue: require('./configs/vue').default,
}

const compares = [
  // vue
  {
    filter({prefix, id}, localRules, foreignRules) {
      return prefix === 'vue' && has(foreignRules, id)
    },
    file: 'compare-vue-vue',
    local: configs['xwtec/vue'],
    foreign: configs.vue,
  },
  // default
  {
    filter() {
      return true
    },
    file: 'compare-xwtec-legacy',
    local: configs.xwtec,
    foreign: configs['xwtec/legacy'],
  },
]

function getDiffOnlyFilter(filter) {
  return (...args) => {
    return !isEqualRuleValue(...args) && filter(...args)
  }
}

for (const {filter, file, local, foreign} of compares) {
  console.log(`building: ${local.name} with ${foreign.name}`)

  const resultAll = getResult({filter, local, foreign})
  const resultDiff = getResult({
    filter: getDiffOnlyFilter(filter),
    local,
    foreign,
  })

  const content = [
    `# compare`,
    `> compare ${local.name} with ${foreign.name}`,
    `## difference only`,
    printer(resultDiff),
    `## all rules`,
    printer(resultAll),
  ].join('\n\n')

  const dest = join(__dirname, `../docs/${file}.md`)

  writeFile(dest, content)
  console.log(`saved: ${dest}`)
}
