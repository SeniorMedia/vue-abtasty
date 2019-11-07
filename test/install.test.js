import Vue from 'vue'
import VueABTasty from '../src/index'

it ('should throw an error if parameters are missing', () => {
  expect(() => {
    Vue.use(VueABTasty)
  }).toThrowError()
})

it ('should throw an error if the parameter `identifier` is missing', () => {
  expect(() => {
    Vue.use(VueABTasty, {})
  }).toThrowError()
})

it ('should throw an error if the parameter `identifier` is empty', () => {
  expect(() => {
    Vue.use(VueABTasty, { identifier: null })
  }).toThrowError()
})

it ('should load ABTasty script', function () {
  expect(() => {
    Vue.use(VueABTasty, { identifier: 'ABC123' })
  }).not.toThrowError()
})
