
//challange 1

// function greaterThanY(arr, Y) {
//     var count = 0

//     for(var i = 0; i < arr.length; i++) {
//         if(arr[i] > Y) {
//             count = count + 1;
//         }

//     }
//     return count;
// }
// console.log(greaterThanY([1,5,9,3,10],3));

//challange 2

// function maxminavg(arr) {
//     var max = arr[0]
//     var min = arr[0]
//     var sum = arr[0]

//     for(var i = 1; i < arr.length; i++) {
         
        
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//         if(arr[i] < min) {
//             min = arr[i];
//         }
        
//     sum = sum + arr[i];
        
//     }
//     var avg = sum / arr.length;
//     var arr2 = ['max is', max, 'min is', min, 'avg is', avg];
//     return arr2;

// }
// console.log(maxminavg([4,6,-3,5,10]));

//challange 3

// function replaceNegatives(arr) {

//     for(var i = 0; i < arr.length; i++) {
         
//         if(arr[i] < 0){
//             arr[i] = 'Dojo';
//         }
//     }
//     return arr;
// }
// console.log(replaceNegatives([1,2,-3,-5,5]))

//challange 4

// function removeVals(arr,y,z) {
//     var newarr = []
//     for(var i = 0; i < y; i++) {
//         newarr.push(arr[i]);
//         }
//     for(var i = z + 1; i < arr.length; i++) {
//         newarr.push(arr[i]);
//     }
        
//     return newarr;
// }
// console.log(removeVals([20,30,40,50,60,70],2,4));