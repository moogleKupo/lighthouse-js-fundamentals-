function nbYear(p0, percent, aug, p) {
function yearlyRate(p, percent, aug){
  let yearlyIncrease = (p * (percent/100)) + aug;
  return yearlyIncrease;
}
let yearsNum = 0;
  let currentPopulation = p0;
  for (currentPopulation; currentPopulation < p; currentPopulation += yearlyRate(currentPopulation, percent, aug)){
    yearsNum++;
  }
  return yearsNum;
}
