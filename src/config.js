let config = {
  identifier: null,
  async: false
}

export function set (params) {
  if (!params || params === {} || !params.identifier) {
    throw new Error('[vue-abtasty] Please initialize plugin with an `identifier` key.')
  }

  Object.keys(params).forEach((key) => {
    config[key] = params[key]
  })
}

export function getIdentifier () {
  return config.identifier
}

export function isAsync () {
  return config.async === true
}

export default config
