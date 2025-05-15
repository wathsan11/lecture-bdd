import { Given, When, Then, Before } from '@cucumber/cucumber'
import assert from 'assert'
import { Calculator } from '../../src/index.js'

let calculator
let i, j, sum

Before(() => {
  calculator = new Calculator()
})

Given('I have entered 5 and 7 into the calculator', function () {
  i = 5
  j = 7
})

When('I press the add button', function () {
  sum = calculator.addition(i, j)
})

Then('the result should be 12', function () {
  assert.equal(sum, 12)
})
