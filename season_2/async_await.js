/**
 * what is async ? 
 * what is await ?
 * how async and await works behind the scenes?
 * examples of using async and await
 * error handling
 * interviews
 * async await vs promises .then/.catch
 */


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise RESOLVED VALUE"); 
    }, 10000); 
})

// // always returns a promise. 
// async function getData() {
//     return p
// }

// const data = getData(); 
// data.then((res) => console.log(res)); 

// // console.log(data);


// async and await combo used to handle promises

// await is a keyword that can only be used in an async function
// async function handlePromis() {
//     const val = await p; 
//     console.log(val)
// }

// handlePromis()


// function getData(){
//     p.then((res) => console.log(res));
//     console.log("Namaste JavaScript! ");
// }

// getData(); 
// //Namaste JavaScript! 
// // Promise RESOLVED VALUE


async function handlePromis() {
    const val = await p; 
    console.log("Namaste JavaScript ! ")
    console.log(val); 
}

handlePromis()




