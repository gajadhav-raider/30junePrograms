var map = new Map();  
map.set(1,"Maina");  
map.set(2,"Rani");  
map.set(3,"Vaibhav");  
console.log("Fetching values : ");  
function display(values)   
{  
console.log(values+" ");  
}  
map.forEach(display);