export function collectRules(configs) {
  let rules = {}
  for (let config of configs) {
    rules = { ...rules, ...config.rules }
  }
  return rules
}
