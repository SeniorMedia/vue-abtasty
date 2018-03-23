import { getId } from './config'

function getSrc () {
  return `//try.abtasty.com/${getId()}.js`
}

export function sync () {
  let script = document.createElement('script')

  script.src = getSrc()
  script.charset = 'utf8'

  return script
}

export function async () {
  const script = document.createElement('script')

  script.innerHTML = `(function (i, s, o, g, r, a, m) {
    i[r] = i[r] || [], i["abtiming"] = 1 * new Date();
    a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, "script", "${getSrc()}", "_abtasty");
  `

  return script
}
