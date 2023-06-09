function smartGarbage(trash, bins) {
  // Increase the correct value in the bins object based on the trash type
  bins[trash]++;

  // Return the updated bins object
  return bins;
}

const bins = { waste: 4, recycling: 2, compost: 5 };
const result = smartGarbage('recycling', bins);
console.log(result);