
const p = new Promise((resolve, reject) => {
    resolve("Promise RESOLVED VALUE"); 
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


function getData(){
    p.then((res) => console.log(res));
    console.log("Namaste JavaScript! ");
}

getData(); 



