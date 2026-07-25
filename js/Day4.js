


// function outer(){
//     var x = 230; 
//     function inner(){
//         console.log(x); 
//     }
//     inner()
// }

// outer()
// console.log(x); 


// function outer(){
//     let count = 0; 
//     function inner(){
//         count++; 
//         console.log(count); 
//     }
//     inner();
// }

// let counting = outer(); 
// console.log(counting); 


// callback function. 
function greet(name, callback){
    console.log(`Hello, ${name}`); 
    callback(); 
}

var fun = function afterGreet(){
    console.log("How are you ? "); 
}

greet("Nisha", afterGreet);

