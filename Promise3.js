function funpromise()
{
return new Promise((resolve)=>{
    setTimeout(()=>
    {
        resolve("Function is Resolve");
    },2000);
});
}
async function fun()
{
    console.log("Calling");
    const a= await funpromise();
    console.log(a);
}
fun();