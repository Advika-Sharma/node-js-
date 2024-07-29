// Types of function

// 1.name function
// 2.anoynomous function
// 3.expressional function
// 4.arrow function
// 5.expressional arrow function
// 6.anoynomous arrow function
// 7.function expression
// 8.function constructor
// 9.function declaration
// 10.immediately invoked functional expressions
// 11.function expression with arguments



// function defination
// function calling
// function declaration or prototype of function

// prototype => function name and its own properties like how many arguments are been taken by function


// function sum(a,b)
// {
//     let s=a+b;
//     console.log(`the sum of ${a} and ${b} is ${s}`);
// }

// sum(3,5);       // positional arguments



// let sum =function (a,b)
// {
//     let s=a+b;
//     console.log(`the sum of ${a} and ${b} is ${s}`);
// }

// sum(4,5)


let sum =function (...nums)           // rust operator
{
    // let s=a+b;
    // console.log(`the sum of ${a} and ${b} is ${s}`);
    console.log(nums);
}

sum(4,5,6,9)




