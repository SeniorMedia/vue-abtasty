import Vue from 'vue'
import VueABTasty from '../src/index'

it ('should throw an error if parameters are missing', () => {
  expect(() => {
    Vue.use(VueABTasty)
  }).toThrowError()
})

it ('should throw an error if the parameter `id` is missing', () => {
  expect(() => {
    Vue.use(VueABTasty, {})
  }).toThrowError()
})

it ('should throw an error if the parameter `id` is empty', () => {
  expect(() => {
    Vue.use(VueABTasty, { id: null })
  }).toThrowError()
})

it ('should load ABTasty script', function () {
  expect(() => {
    Vue.use(VueABTasty, { id: 'ABC123' })
  }).not.toThrowError()
})
