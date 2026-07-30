

// let student = {
//     Name : "Jitendra", 
//     age : 20, 
//     course : "BTech", 
//     marks : 89
// }


// const key = Object.keys(student)
// console.log(key);

// key.forEach((key) => {
//     console.log(`${key} : ${student[key]}`); 
// })


// function formValidate(data){
//     const empty = key.filter((key) => data[key] === ""); 
//     return empty; 
// }

// const form = {
//     Name : "Jitendra_Kumar", 
//     Email : "jituuuz@gmail.com", 
//     marks : ""
// }

// console.log(formValidate(form))


// const marks = {
//     maths : 10, 
//     english : 32,
//     science : 34, 
//     socialScience : 42,
//     Hindi : 89
// }

// const sum = Object.values(marks).reduce((acc, curr)=>acc + curr, 0)
// console.log(sum);


let student = {
    name : "Riya", 
    age : 21, 
    course : "BTech", 
    Marks : 89
}

// for(const [key, value] of Object.entries(student)){
//     console.log(`${key} and ${value}`);
// }


// const {name, age, marks} = student
// console.log(name); 
// console.log(age); 


// const {name, age, ...x} = student
// console.log(name)
// console.log(x)


// const xyz = {...student}
// console.log(xyz); 
// console.log(student);

// xyz.age = 30;
// console.log(xyz);
// console.log(student);



// const val = {name: "Nisha", age : 10, phone : 9319594909}; 


// // default ket

// let key = "age"

// let obj = {
//     name : "nisha", 
//     age : 20
// }

// console.log(obj); 


const arr = [1,1,1,2,2,2,2,5,5,5,5,5,5]; 

// const obj = { ...arr };
// console.log(obj);

const map = {}

for(i of arr){
    if(!map[i]){
        map[i] = 0; 
    }
    map[i]++; 
}

console.log(map);


