let config = {
  id: null,
  async: false
}

export function set (params) {
  if (!params || params === {} || !params.id) {
    throw new Error('[vue-abtasty] Please initialize plugin with an `id` key.')
  }

  Object.keys(params).forEach((key) => {
    config[key] = params[key]
  })
}

export function getId () {
  return config.id
}

export function isAsync () {
  return config.async === true
}

export default config
