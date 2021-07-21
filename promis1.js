const  stmt= new Promise((resolve,reject)=>{
x=5;
if(x==4)
{
    resolve("Successful");
}
else{
    reject("Unsuccessful");
}
});
stmt.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
})