

// ------- Hoisting. -------------

// getName()
// console.log(x);
// console.log(getName)


// var x = 7; 

// function getName(){
//     console.log("Nameste JavaScript"); 
// }


// ----------- Functions --------------

// var x = 1; 
// a();
// b(); 
// console.log(x);

// function a(){
//     var x = 10; 
//     console.log(x); 
// }


// function b(){
//     var x = 100; 
//     console.log(x); 
// }


// -------- js is a loosly typed language -------------- 














// ============================= CLOSORES =========================================
                        // function along with it's lexical scope.


// function x(){
//     var a = 10; 
//     function y(){
//         console.log(a);
//     }
//     return y; 
// }

// var z = x(); 
// console.log(z);
// z()



// Interview Questions

// function x(){
//     var i = 1;
//     setTimeout(function (){
//         console.log(i);
//     }, 3000);
//     console.log("Namaste JavaScript"); 
// }

// x()


// function x(){
//     for(var i=1; i<=3; i++){
//         setTimeout(function (){
//             console.log(i); 
//         }, 1000); 
//     }
// }
// x()


// function y(){
//     for(let i=1; i<=3; i++){
//         setTimeout(function (){
//             console.log(i); 
//         }, 1000); 
//     }
// }
// y();


// // fixed using closures. 
// function z(){
//     for(var i=1; i<=3; i++){
//         function close(i){
//             setTimeout(function (){
//                 console.log(i); 
//             }, 1000); 
//         }
//         close(i); 
//     }
// }
// z()




// document.getElementById("clickme").addEventListener("click", function(){
//     console.log("Button Clicked!"); 
// })


// EVENT LOOP

// console.log("start"); 

// let i = setInterval(function cb(){
//     console.log("call back");
// }, 1000); 

// clearInterval(i); 

// console.log("end"); 






// map filer reduce


// MAP 

const arr = [5, 1, 3, 2, 6]; 

// Double - [10, 2, 6, 4, 12]

// Triple - [15, 3, 9, 6, 18]

// Binary - {"101", "1", "11", "10", "110"}

// const double = (x) => {
//     return x*2; 
// }

// function binary(x){
//     return x.toString(2); 
// }

// const output = arr.map(double)
// const output = arr.map(binary)
// const output = arr.map((x) => x.toString(2));

// console.log(output);


// // FILTER 
// function isOdd(x){
//     return x%2; 
// }

// // const output = arr.filter(isOdd)
// const output = arr.filter((x) => x < 3);

// console.log(output);




// REDUCE 

// function findSum(arr){
//     let sum = 0; 
//     for(let i=0; i<arr.length; i++){
//         sum = sum+arr[i]; 
//     }
//     return sum; 
// }

// console.log(findSum(arr))


const output = arr.reduce(function (acc, curr) {
    acc = acc+curr; 
    return acc; 
}, 0); 


const maximum = arr.reduce(function (acc, curr){
        if(curr > acc){
            acc = curr; 
        }
        return acc; 
}, 0); 

console.log(maximum); 