// Number 1;
let myArray = [];

for(let i = 0; i < 100; i += 2){   
    if(i % 2 == 0);{
        myArray.push(i); 
    }
    }console.log(myArray);

// Number 2;
let A = 2;
let B = 16;

function evenNums(A, B){
    for (let i = A; i < B; i += 2){
        console.log(i);
    }
} evenNums(A, B);

// Number 3;


//Number 4; 
let Integ1 = 6;
let Integ2 = -9;

function firstFunction(Integ1, Integ2){
    let total = Integ1 + Integ2;
    return total;
}console.log(firstFunction(Integ1, Integ2));

firstFunction(Integ1, Integ2);

//Number 5;
let numA = 20;
let numB = 25;

function printSum(numA, numB) {
    let sum = numA + numB;
    return sum;
} console.log(printSum(numA, numB));

printSum();

//Number 6;
let classArr = [
    "Victor Olorunsola",
    "Adaobi Ezelioha",
    "Olayinka Bakare",
    "Unyime Usen",
    "Muheez Sanwo",
    "Okeyemi Henry",
    "Idongesit Akwaowoh",
    "Eto Olei",
    "Victoria Abodunrin",
    "Damilola Idris"
]

function ClassArray(classArr){
    for(let i = 0; i < classArr.length; i++){
        return classArr[i];    
    }
} console.log(classArr);

ClassArray(classArr);

//Number 7;
let array1 = [1, 2, 4];
array1.push(3);
console.log(array1);

//Number 8;
let array2 = [1, 2, 3, 8];
array2.pop();
console.log(array2);

//Number 9;
let array3 = [23.77, 80, 45];
array3.shift();
console.log(array3);

//Number 10;
let array4 = [[20, 30, 80], [10, 50, 55]];
array4.unshift("Oremu");
console.log(array4);


