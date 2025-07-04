export function collectRules(configs) {
  let rules = {}
  for (let config of configs) {
    rules = { ...rules, ...config.rules }
  }
  return rules
}

export function changeLevel(rules, level) {
  let copy = { ...rules }
  for (let rule in copy) {
    if (typeof rules[rule] === 'string') {
      copy[rule] = level
    } else {
      copy[rule] = [level, ...rules[rule].slice(1)]
    }
  }
  return copy
}
