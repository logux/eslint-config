export function removeLanguage(configs) {
  let globals = {}
  for (let config of configs) {
    if (config.languageOptions.globals) {
      globals = { ...globals, ...config.languageOptions.globals }
    }
    delete config.languageOptions
  }
  return [configs, globals]
}

export function collectRules(configs) {
  let rules = {}
  for (let config of configs) {
    rules = { ...rules, ...config.rules }
  }
  return rules
}
