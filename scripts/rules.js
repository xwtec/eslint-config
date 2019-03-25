import {join} from 'path'
import printer from './shared/markdown-rules-printer'
import writeFile from './shared/write-file'
import getRules from './shared/get-rules'
import parseRuleId from './shared/parse-rule-id'
import sortRuleId from './shared/sort-rule-id'

const configs = [
  {
    name: 'default',
    config: require('./configs/xwtec-default').default,
  },
  {
    name: 'legacy',
    config: require('./configs/xwtec-legacy').default,
  },
  {
    name: 'vue',
    config: require('./configs/xwtec-vue').default,
  },
]

for (const {name, config} of configs) {
  console.log(`pringting: ${name} rules`)

  const rules = getRules(config.config)
  const data = Object.keys(rules)
    .sort(sortRuleId)
    .map(ruleId => ({
      ...parseRuleId(ruleId),
      ...rules[ruleId],
    }))
    .filter(({prefix}) => name !== 'vue' || prefix === 'vue')

  const warnData = data.filter(({value}) => value === 'warn')
  const errorData = data.filter(({value}) => value === 'error')

  const content = [
    `# rules`,
    `> ${name} rules`,
    `## error`,
    printer(errorData),
    `## warn`,
    printer(warnData),
  ].join('\n\n')

  const dest = join(__dirname, `../docs/rules-${name}.md`)

  writeFile(dest, content)
  console.log(`saved: ${dest}`)
}
