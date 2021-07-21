const stmt= new Promise((resolve,reject)=>{
    var x=5;
    if(x==5)
    {
        resolve("Successful");
    }
    else{
        reject("Unsuccesful");
    }
    });
  async function fun()
  {
    const raj= await stmt;
    console.log(raj);
  };
  
  fun();