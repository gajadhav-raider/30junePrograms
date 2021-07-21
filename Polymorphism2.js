class A
{

}
A.prototype.display=function()
{
    console.log("Invoke Class A");
}
class B extends A
{
    
}
     B.prototype.display=function()
    {
        console.log("Invoke Class B");
    }
var a= [new A(),new B()];
a.forEach(function(obj){
    obj.display();
});