export class Calculator {
  addition(i, j) {
    return i + j
  }
  subtraction(i,j)
  {
    return i-j
  }
}

export class resultCalculator{
  calculate(score)
  {
    if(score<30){
      return'F'
    }
    return 'P'
  }
}
