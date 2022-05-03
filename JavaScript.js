
alert("Hello everyone and welcome to this page! \n Please answer questions in the field");

let  firstname =prompt ("Please enter your firstname!") 
// prompt the user to put an input as a firstname
let lastname=prompt ("Please enter your lastname!") 
// prompt the user to put an input as the lastname
let age=prompt ("Please enter your age!")
//prompt the user to put an input as their age
let gender=prompt ("Please enter your gender!")
//prompt the user to put an input as their gender


alert (
    `name: ${firstname}`+" "+`lastname: ${lastname}`+" "+`age: ${age}`+" "+`gender: ${gender}`
)
// alert the user their info.

// ====================================
// maths
// part one: random integer

function rand(x, y) {
    return Math.floor(Math.random() * ( x + y + 1))
}
console.log(rand(5, 7));



// part two:  binary number

let binary = "010101"
function bin2dec(str) {
    return parseInt(str, 2)
}
console.log(bin2dec(binary))
function Sumtwointeger(x, y) {
    if (x === y) {
        return ((2 * z) * 9)
    }
    else {
        return (x + y)
    }
}
console.log(Sumtwointeger(2, 8))
