
// alert("Hello everyone and welcome to this page! \n Please answer questions in the field");

// let  firstname =prompt ("Please enter your firstname!") 
// // prompt the user to put an input as a firstname
// let lastname=prompt ("Please enter your lastname!") 
// // prompt the user to put an input as the lastname
// let age=prompt ("Please enter your age!")
// //prompt the user to put an input as their age
// let gender=prompt ("Please enter your gender!")
// //prompt the user to put an input as their gender


// alert (
//     `name: ${firstname}`+" "+`lastname: ${lastname}`+" "+`age: ${age}`+" "+`gender: ${gender}`
// )
// // alert the user their info.

// // ====================================
// // maths
// // part one: random integer

function rand(x, y) {
    return Math.floor(Math.random() * ( x + y + 1))
}
console.log(rand(5, 7));



// // part two:  binary number

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
// // =================================
// // part four about Comparisons
// //  1.compute the sum of the two given integers/If the two values are same, then returns triple their sum.
function Sumtwointeger(x,y){
    if (x===y){
        return((x+y)*3)
    }
   }

   console.log(Sumtwointeger(1,2))

// //    2. absolute difference between a specified number and 19/
// // Returns triple their absolute difference if the specified number is greater than 19.
function cumputedifference(x){
    if (x > 19){
        return ((x-19)*3)
    }
} 
console.log(cumputedifference(20))

// //   3.create a new string adding "Lo" in front of a given string. 
// // If the given string begins with "Lo" then return the original string.
function addstring(userstring){
    if (userstring.startsWith('Lo')){
        return(userstring)
       }
    else{
        return ("Lo"+userstring)
    }
   }
   console.log(addstring("Loagancy"));

// // =============================================  logical gates =================
// // Buffer false=> false/////true=>true
const x=true;
function logicalGateBuffer(x) {
  return x;   
  }
console.log(logicalGateBuffer(x));

// // Inverter false=> true/////true=> false
const y=true;
function logicalGateNot(y) {
  return y;   
  }
console.log(logicalGateNot(y));

// // AND is like Multiplication 0/1====both True=> true else false
function logicalGateAnd(x, y)
{
  if(x===true & y===true){
    return true;}

else return false;
}
console.log(logicalGateAnd(true,false));

// // OR is like sum0/1========both false=> false else true
function logicalGateOr(x, y)
{
  if(x===false || y===false){
    return false;}
    else 
    return true;
}
console.log(logicalGateOr(false,false));

// // NAND is like an invertion for AND
function logicalGateNand(n, m)
{
  if(n===true & m===true){
    return false;}

else return true;
}
console.log(logicalGateNand(false,true));

// // NOR is like an invertion for OR
function logicalGateNor(n, m)
{
  if(n===false & m===false){
    return true;}

else return false;
}
console.log(logicalGateNor(false,false));

// // XOR
function logicalGateXor(a, b)
{
  if(a===false & b===false){
    return false;}
    else if(a===true & b===true)
    {
      return false;
    }
else return true;
}
console.log(logicalGateXor(false,false));


// // XNOR
function logicalGateXnor(a, b)
{
  if(a===false & b===false){
    return true;}
    else if(a===true & b===true)
    {
      return true;
    }
      

else return false;
}
console.log(logicalGateXnor(false,false));



// // =====================================LOOPS==================================
// // iterative: which should solve the factorial of x in an iterative way, and
function factorialIterative(x){
  if (x > 0){
    let y= 1;
    for(let i=1;i <= x;i++){
      y = y * i
    }
    return y
  }
  else if (x===0){
    return 1
  }
  else {
    return "This is incalculable"
    
  }
}
console.log(factorialIterative(x=5))



// // recursive: which should solve the factorial of x in a recursive way.
function factorialRecursive(x){
   if(x >0){
     let y=1
     for(let i=1;i <= x;i++){
      y = i * factorialRecursive(i-1)
    }
    return y
   }
   else if(x===0){
     return 1
   }
   else{
     return "This is incalculable"
   }
}
console.log(factorialRecursive(x=6))

// // ======================================Function======================================

const arrRandMap= []
arrRandMap.push(Math.floor(Math.random()*(50-15)+15));
arrRandMap.push(Math.floor(Math.random()*(50-15)+15));
arrRandMap.push(Math.floor(Math.random()*(50-15)+15));

console.log(arrRandMap);
// ===========================map=================
function customMap(arr=[],callBack)
{
  const _value=[];
  for(let val of arr)
  {
    _value.push(callBack(val));
  }

  return _value;
}


const op= customMap(arrRandMap,(val)=>{
  return val*2;
});
console.log(op);


// const arr=arrRandMap.map((item)=>
// {return item-5
// })
// console.log(arr);


// ============filter=========================
function customFilter(arr=[],callBack)
{
  const _value=[];

  for (let i=0 ; i<arr.length ; i++){
    if (callBack (arr[i]))
    {
      _value.push (arr[i]);
    
    }
  
  }
  return _value;
}

const upperThan= customFilter(arrRandMap,(val)=>{

  return val>20;
  
})
console.log(upperThan);
// ======================reduce================

function customReduce(arr, callback)
{
    let initial = arr[0];

    for (let i = 1; i < arr.length; i++)
    {
        initial = callback(initial, arr[i], i);
    }
    return initial;
}

console.log(customReduce(arrRandMap, (acc, cv) => acc + cv));