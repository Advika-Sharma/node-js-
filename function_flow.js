// function sum()                         // side stack --> follows stack
// {
//     console.log("6");   
// }
// function main()
// {
//     console.log("1");
//     console.log("2");
//     console.log("3");
//     sum();
//     console.log("4");
//     console.log("5");
// }
// console.log("a");                      // main stack --> follows queue
// console.log("b");
// console.log("c");
// main();
// console.log("d");
// console.log("e");


function sum()                         
{
    console.log("6");   
}
function main()
{
    setTimeout(()=>
    {},5000)
    console.log("1");
    sum();
    console.log("4");
}
console.log("a");                      
console.log("b");
main();
console.log("d");
console.log("d");