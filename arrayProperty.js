//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' so that every instance of String can call reverse and reverse itself.
  
  //code here
  //can reverse itself, will need cb?
String.prototype.reverse = function(str) {
    return str.split('').reverse().join('');
 }

 var str = "Ship";
 console.log(str.reverse(str));
