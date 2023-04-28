function range(start, end, step) {
  // Check for undefined or incorrect parameters
  if (start === undefined || end === undefined || step === undefined ||
      start > end || step <= 0) {
    return [];
  }

  // Create an array to store the result
  const result = [];

  // Use a loop to generate the numbers and add them to the result array
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }

  // Return the result array
  return result;
}