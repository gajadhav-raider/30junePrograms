function makeFunc() {
    var name = 'Maina';
    function displayName() {
      console.log(name);
    }
    return displayName;//Outer function return inner function 
  }
  
  var myFunc = makeFunc(); //makeFunc is Return Displayname function
  myFunc();//inner function calling 