
function purchasecake()          // execution based on queue concept
{
    return new Promise((curatindec)=>
    {setTimeout(()=>
    {
        console.log("Cake purchased");
    },2000);
})
}

function curatindec()
{
    return new Promise((ballons)=>
    {setTimeout(()=>
    {
        console.log("curtains purchased");
    },4000);
})
}

function ballons()
{
    return new Promise((cakecutting)=>
    {setTimeout(()=>
    {
        console.log("ballons purchased");
    },5000);
})
}


function cakecutting()
{
    return new Promise((resolve,reject)=>
    {setTimeout(()=>
    {
        console.log("cake cutting");
    },7000);
});
}

// callback hell

// console.log("happy birthday 1");
// console.log("happy birthday 2");
// ballons();
// purchasecake();
// console.log("happy birthday 3");
// curatindec();
// console.log("happy birthday 4");
// ballons();
// console.log("happy birthday 5");
// cakecutting();
// console.log("happy birthday 6");
// console.log("happy birthday 7");
// purchasecake();

// purchasecake(()=>{
//     curatindec(()=>{
//         ballons(()=>{
//             cakecutting()
//             })
//             })
// })


// promise 
purchasecake()
.then(()=> curatindec())
.then(()=> ballons())
.then(()=> cakecutting())
.catch((err)=> console.log(err))
.finally(()=> console.log("happy birthday"))