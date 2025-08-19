import { Given, When, Then, Before } from '@cucumber/cucumber'
import assert from 'assert'
import { Calculator } from '../../src/index.js'

let calculator
let i, j, result

Before(() => {
  calculator = new Calculator()
})

// Given('I have entered 5 and 7 into the calculator', function () {
//   i = 5
//   j = 7
// })

Given(
  'I have entered {int} and {int} into the calculator',
  function (firstValue, secondValue) {
    i = firstValue
    j = secondValue
  }
)

When('I press the add button', function () {
  result = calculator.addition(i, j)
})

When('I press sub button', function () {
   result = calculator.subtraction(i,j)
  
})

Then('the result should be {int}', function (expectedValue) {
  assert.equal(result, expectedValue)
})

// Given('I have entered {int} and {int} into the calculator',function(fValue,sValue){
// i=fValue
// j=sValue
// })

// When('I press sub button',function(){
//   result = calculator.subtraction(i,j)
// })

