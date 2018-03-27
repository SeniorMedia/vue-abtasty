<p align="center">
  <a href="https://badge.fury.io/js/vue-abtasty">
   <img src="https://badge.fury.io/js/vue-abtasty.svg" />
  <a/>
  <a href="https://www.npmjs.com/package/vue-abtasty">
    <img src="https://img.shields.io/npm/dm/vue-abtasty.svg" />
  <a/>
</p>

# vue-abtasty

A simple plugin that allows you to use [ABTasty](https://www.abtasty.com/) in your VueJS project

## Installation
```bash
yarn add vue-abtasty
```

or through npm :
```bash
npm install vue-abtasty
```

## Usage
Start using it your Vue application
```js
import VueABTasty from 'vue-abtasty'

Vue.use(VueABTasty, {
  id: '[YOUR-TOKEN]'
})
```

## Options

- `id` key is mandatory. You can find it on your ABTasty configuration page
- `async` key is optional. Values can either be `true` or `false` depending if you want async script or not. Default is `false`

### Example :

```js
import VueABTasty from 'vue-abtasty'

Vue.use(VueABTasty, {
  id: 'ABC123',
  async: true
})
```

## Develop
```bash
git clone https://github.com/SeniorMedia/vue-abtasty.git
cd vue-abtasty
yarn install
yarn run test
```
