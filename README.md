# vue-abtasty

A simple VueJS plugin that allows you to use ABTasty[https://www.abtasty.com/]

# Installation
`yarn add vue-abtasty`

or through npm :
`npm install vue-abtasty`

# Usage

`import VueABTasty from 'vue-abtasty'`

`
Vue.use(VueABTasty, {
  id: '[YOUR-TOKEN]'
})
`

# Options

- `id` key is mandatory. You can find it on your ABTasty configuration page
- `async` key is optional. Values can either be `true` or `false` depending if you want async script or not. Default is `false`

# Develop
`git clone https://github.com/SeniorMedia/vue-abtasty.git`

`cd vue-abtasty`

`yarn install`

`yarn run test`
