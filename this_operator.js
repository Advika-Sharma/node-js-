function normalFunction()
{
    console.log(this)
}

const ArrowFunction = ()=>
{
    console.log(this)
}

const obj =
{
    normalfnmethod:normalFunction,
    arrowfnmethod:ArrowFunction,

}

obj.normalfnmethod();
obj.arrowfnmethod();

// features :         regular function                     arrow

// 1.this :           depends on                          lexically inherited from scope
//                    how the function is called.

// 2.new :            new context                         doesn't create new context

// 3.constructor:     can be used                         cannot be used

// 4.hosting :        can be hosted                       cannot be hosted
//                    (excepted exceptional)