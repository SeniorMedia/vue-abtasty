let config = {
  id: null,
  async: false
}

function merge (obj, src) {
  Object.keys(src).forEach((key) => {
    obj[key] = src[key]
  })

  return obj
}

export function set (params) {
  if (!params || params == {} || !params.id) {
    throw new Error('[vue-abtasty] Please initialize plugin with an `id` key.')
  }

  merge(config, params)
}

export function getId () {
  return config.id
}

export default config
