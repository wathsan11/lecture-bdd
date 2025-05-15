import { Given, When, Then, Before } from '@cucumber/cucumber'
import assert from 'assert'
import { Calculator } from '../../src/index.js'

let calculator
let i, j, result

Before(() => {
  calculator = new Calculator()
})

Given('I have entered 5 and 7 into the calculator', function () {
  i = 5
  j = 7
})

When('I press the add button', function () {
  result = calculator.addition(i, j)
})

Then('the result should be 12', function () {
  assert.equal(result, 12)
})
