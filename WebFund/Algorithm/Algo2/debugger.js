
//challange 1

// function printUpTo(x){
//     if(x>0){
//         for(i=0; i<x; i++){
//             var j = i+1;
//             console.log(j);
//         }
//     }
//     else if(x<0){
//         var m = 'false'
//         console.log(x);
//         return m;
//     } //your code here
// }
// printUpTo(1); // should print all the integers from 1 to 1000000
// y = printUpTo(-10); // should return false
// console.log(y); // should print false

//challange 2

// function printSum(x){
//     var sum = 0;
//     //your code here
//     for(var i = 0; i<(x+1); i++){
//         var num1 = sum;
//         var num2 = i;
//         sum = num1+num2;
//         console.log(i,'sum is',sum);
//     }

//     return sum;
//   }
//   y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
//   console.log(y) // should print 32640

// challange 3

// function printSumArray(x){
//     var sum = 0;
//     for(var i=0; i<x.length; i++) {
//         var num1 = sum;
//         var num2 = x[i];
//         sum = num1+num2;
//         // console.log(sum);
//         //your code here
//     }
//     return sum;
//   }
//   console.log( printSumArray([1,2,3]) ); // should log 6

// challange extra

// function largestElement(arr){
//     var max = arr[0]
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] < max){
//         }
//         else if(arr[i] > max){
//         max = arr[i];
//         }
//     }
//     return max
// }
// a = largestElement([1,30,5,7,-3,50]);
// console.log(a); // prints max value of the array