import { Given,When,Then,Before } from "@cucumber/cucumber";
import assert from 'node:assert'
import { resultCalculator } from "../../src/index.js";

let score
let resultCal,result
Before(()=>{
    resultCal = new resultCalculator()
})


Given('given the score of the user is {int}',function(Inputscore){
    score=Inputscore
})
When('I click on get grade button',function(){
    result =resultCal.calculate(score)
})
Then ('I should get {string} as the mark',function(Expectedmark){
    assert.equal(result, Expectedmark)
})


