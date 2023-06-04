function merge(arr1, arr2){
let merged =[];
let i =0;
let j= 0
while (i < arr1.length && j < arr2.length){
  if (arr1[i] < arr2[j]){
    merged.push(arr1[i];)
    i++;
  } else {merged.push(arr2[j]);
  j++;
}
return merged;
}