const sumLargestNumbers = function(data) {
  // Put your solution here
  let sum1 = data[0];
  let sum2 = data[0];

  for( let i = 0; i < data.length; i++ ) {
    
    if( data[i] > sum1) {
      sum2 = sum1;
      sum1 = data[i];
    }
  }
  return sum1 + sum2;

};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));