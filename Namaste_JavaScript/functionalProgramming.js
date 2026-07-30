const radius = [1, 2, 4, 2]; 

const area = (radius) => {
    return 3.14 * radius * radius; 
}

const cicumferance = (radius) => {
    return 2*3.14*radius; 
}

const diameter = (radius) => {
    return radius * radius; 
}



const calculate = (radius, logic) => {
    const output = []; 
    for(let i=0; i<radius.length; i++){
        output.push(logic(radius[i]));
    }
    return output; 
}

console.log(radius.map(area))

console.log(calculate(radius, area))
// console.log(calculate(radius, cicumferance))
// console.log(calculate(radius, diameter))