// Topics

// 1.scope of variable
// 2.reassignment
// 3.redeclaration
// 4.mutability {changes allowed}
// 5.immutability {changes not allowed}
// 6.closures
// 7.hosting

// Scope of Variable

// a=10;
// function variable()
// {
//     {var a=20;
//     console.log(a);
//     }
//      console.log(a);
// }
// variable();
// console.log(a);


// HOSTING

// a=5;
// a=10;
// console.log(a);


// CLOSURES

// a=5;
// function variable()
// {
//     console.log(a);
// }
// variable();
// console.log(a);

a=5;
function variable()
{
    let a=20;
    let b=10;
    console.log(b);
    console.log(a);

}
variable();
console.log(a);
