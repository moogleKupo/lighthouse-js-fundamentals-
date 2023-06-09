function howManyHundreds(num){
  if (num % 100 === 0)
  return Math.floor(num/100)
}
howManyHundreds(1000)