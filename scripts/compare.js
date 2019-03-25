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
  // airbnb
  airbnb: require('./configs/airbnb').default,
  'airbnb+prettier': require('./configs/airbnb-prettier').default,
  // legacy
  'airbnb/legacy': require('./configs/airbnb-legacy').default,
  'airbnb/legacy+prettier': require('./configs/airbnb-legacy-prettier').default,
  // plugins
  prettier: require('./configs/prettier').default,
  // vue
  vue: require('./configs/vue').default,
  'vue+prettier': require('./configs/vue-prettier').default,
}

const compares = [
  // default
  {
    filter({prefix}) {
      return !prefix
    },
    file: 'compare-xwtec-airbnb',
    local: configs.xwtec,
    foreign: configs.airbnb,
  },
  {
    filter({prefix}) {
      return !prefix
    },
    file: 'compare-xwtec-airbnb-prettier',
    local: configs.xwtec,
    foreign: configs['airbnb+prettier'],
  },
  // legacy
  {
    filter({prefix}) {
      return !prefix
    },
    file: 'compare-legacy-airbnb-legacy',
    local: configs['xwtec/legacy'],
    foreign: configs['airbnb/legacy'],
  },
  {
    filter({prefix}) {
      return !prefix
    },
    file: 'compare-legacy-airbnb-legacy-prettier',
    local: configs['xwtec/legacy'],
    foreign: configs['airbnb/legacy+prettier'],
  },
  // vue
  {
    filter({prefix}) {
      return prefix === 'vue'
    },
    file: 'compare-vue-vue',
    local: configs['xwtec/vue'],
    foreign: configs.vue,
  },
  {
    filter({prefix}) {
      return prefix === 'vue'
    },
    file: 'compare-vue-vue-prettier',
    local: configs['xwtec/vue'],
    foreign: configs['vue+prettier'],
  },
  // plugins
  {
    filter({prefix, id}, localRules, foreignRules) {
      return (
        (prefix === 'prettier' || prefix === 'unicorn' || !prefix) &&
        has(foreignRules, id)
      )
    },
    file: 'compare-xwtec-prettier',
    local: configs.xwtec,
    foreign: configs.prettier,
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
