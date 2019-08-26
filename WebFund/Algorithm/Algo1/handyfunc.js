


function printUpTo(x){
    if(x>0){
        for(i=0; i<x; i++){
            var j = i+1;
            console.log(j);
        }
    }
    if(x<0){
        var m = 'false'
        console.log(x);
        return m;
    }
  }
  printUpTo(1000000); // should print all the integers from 1 to 1000000
  y = printUpTo(-10); // should return false
  console.log(y); // should print false


// function multiply(a,b){
//     return a * b;
// }
// function square(n){
//     return multiply(n, n);
// }
// function cube(x){
//     return multiply(square(x), x);
// }

// console.log(multiply(square(2 + square(3 + 1 + cube(1))), square(2)));


// for(var i=0; i<5;i++){   
//     console.log(i);
//  }


// for(var i=0; i<5; i++)
// {
//    i = i + 1;  
//    console.log(i);
// }


// for(var i=0; i<5; i++)
// {
//    i = i + 3; 
//    console.log(i);
// }


// function y(num1, num2){   
//     return num1+num2;
//  }
//  console.log(y(2,3))
//  console.log(y(3,5))


// function y(num1, num2){
//     console.log(num1);   
//     return num1+num2;
//  }
//  console.log(y(2,3))
//  console.log(y(3,5))


// a = 15;
// console.log(a);
// function y(a){
//    console.log(a);   
//    return a;
// }
// b = y(10);
// console.log(b);


// a = 15;
// console.log(a);
// function y(a){
//    console.log(a);   
//    return a*2;
// }
// b = y(10);
// console.log(b);