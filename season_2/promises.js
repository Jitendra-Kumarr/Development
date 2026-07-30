
const cart = ["Shoes", "pants", "Kurta"]; 


// createOrder(cart , function(orderid) {
//     proceedToPayment(orderid); 
// })




// what is promise  :   a promise is an object representing the eventual completion and failure of an asynchronus operation.  


const promise = createOrder(cart); 
promise.then(function (orderid){
    console.log(orderid);
    // proceedToPayment(orderid); 
})
.catch(function (err){
    console.log(err.message);
})


function createOrder(cart){
    const pr = new Promise(function(resolve, reject){
        //create-order 
        //validateCart
        //orderId
        if(!validateCart(cart)){
            const err = new Error("cart is not valid!"); 
            reject(err);
        }

        const orderid = 12345; 
        if(orderid){
            resolve(orderid);
        }
    })

    return pr; 
}

function validateCart(cart){
    return false; 
}

