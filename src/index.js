// https://git.seniormedia.fr/repatriation/repatriation-app/commit/178f94a82b08bcd95eb79abbe18ca530ee1ede8f
import { set } from './config'
import { sync, async } from './codes'

const VueABTasty = {
  install (Vue, options) {
    // options : id!, async

    set(options || {})

    var head = document.head || document.getElementsByTagName('head')[0]

    const script = async()

    head.appendChild(script)
  }
}

export default VueABTasty
