class A
{
  display()
  {
      console.log("Invoke Class A");
  }
}
class B extends A
{
    display()
    {
        console.log("Invoke Class B");
    }
}
var a= [new A(),new B()];
a.forEach(function(obj){
    obj.display();
});