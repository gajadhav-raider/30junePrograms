function outerfun(a)
{
    let b=5;
    function inner()
    {
        let sum= a+b;
        console.log(` the sum of two num is ${sum}.`);
    }
    inner();
}
   outerfun(5);