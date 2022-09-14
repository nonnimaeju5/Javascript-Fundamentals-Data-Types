/* Demonstrate variables assignments  */
/*  The simple assignment operator ( = ) is used to assign a value to a variable */

let x = 2;
const y = 3;

console.log(x);
// expected output: 2

console.log(x = y + 1); // 3 + 1
// expected output: 4

console.log(x = x * y); // 4 * 3
// expected output: 12



/* Output the result of arithmetic operations  */
/*  An arithmetic operator accepts numerical values as operands and returns a single numerical value. The numerical values can be literals or variables. Javascript supports arithmetic operators such as Addition (+), Subtraction (-), Divide (/), and Multiplication (*) */

let result = '5' * 2;

console.log(result);

// expected output: 10 



/* Output the result of string concatenations  */
/* In JavaScript, concat() is a string method that is used to concatenate strings together. The concat() method appends one or more string values to the calling string and then returns the concatenated result as a new string.  */

let basketball = 'NBA ' + Action;
console.log(basketball);

// expected output: NBA Action



/* Demonstrate the usage of if statements to check for truthy or falsy values  */
/* If Statements are the foundation of all logic in JavaScript. They expect booleans, which are always either true or false, or they expect some sort of condition that is evaluated to true or false or truthy and falsy.  */

const age = 100;
if (age > 70) {
  console.log('In your seventies');
} else if (age > 60) {
  console.log('In your sixties');
} else if (age > 50) {
  console.log('In your 50s');
} else {
  console.log("nothing was true");
}

// expected output: In your seventies
/* Even though that the rest of the conditions are true, because the first condition is true, none of the other conditions are evaluated or run. That is important to keep in mind if you're working with multiple things that could be true.
You need to be aware of the order of which you check your if statements.  */


/* Create array with multiple values. 
Output one of the items.  
Output the number of items in that array, programmatically (using the length property)  */

const obj = ['bat', 'ball', 'mat', 'pad'];    //While using Javascript length on an array, the function returns the number of elements in the array. And similarly it returns 0 in the array is empty.

console.log(obj.length);
// Output: 4



/* Demonstrate how to:
Create an object
Add properties to it
Remove properties from it
Output specific properties  */

let obj = {
  name: "ABC",
  email: "xyz@abc.com"
};
console.log(obj);

// Adding some properties into the
// above created object...
obj.age = 10;
obj.contact = 123467890;
obj.place = "Earth";
obj["country"]= "India";

console.log(obj);


 // Removing some properties
    // from the above created object
    delete obj.age; // age property deletion
    console.log(obj);
     
    // country property deletion
    delete obj["country"];
    console.log(obj);
    delete obj.place; // place property deletion
    console.log(obj);



  /* Demonstrate at least one Math method  */ 
 /*  The Math.floor() method rounds a number DOWN to the nearest integer.*/ 
 <!DOCTYPE html>
<html>
<body>

<h1>JavaScript Math</h1>
<h2>The Math.floor() Method</h2>
<p>Math.floor() rounds a number DOWN to the nearest integer:</p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = Math.floor(1.6);
</script>

</body>
</html>



/* Output the date and time of opening of the file using Date()  */ 
const d = new Date();
let day = d.getDate();
document.getElementById("demo").innerHTML = day;

// expected output: 13 (or whatever the current day is)



/* Strict Mode:  The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
With strict mode, you can not, for example, use undeclared variables. */ 
<html>
<body>
	<h1>Demo: strict mode</h1>
	
	<p id="errorMessage"></p>
	
	<script>
		"use strict";
		try
		{
			var for = 1; // error
			var if = 1; // error
		}
		catch(ex)
		{
			document.getElementById("errorMessage").innerHTML = ex;
		}

    </script>
</body>
</html>

// expected output: Demo: strict mode



