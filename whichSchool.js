const whichSchool  = function (age) {
  for(age = 1; age < 13; age++) {
    console.log("Elementary School")
  }
  for(age = 13; age > 18; age++) {
    console.log("Secondary School")
  }
  for (age = 19; age < 100; age++) {
    console.log("Lighthouse Labs")
  }
}
whichSchool(15)
