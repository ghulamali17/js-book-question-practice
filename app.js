//****Chapter: 1 (ALERT)****//

// 1. Write a script to greet your website visitor using JS alert box.
//     alert("Hello User")

// 2. Write a script to display following message on your web page:
//     alert("Error! Please enter a valid password")

// 3. Write a script to display following message on your web
// page: (Hint : Use line break)
//     alert("Welcome to JS Land... \n Happy Coding")

// 4. Write a script to display following messages in sequence:
//     alert("Welcome to JS Land...")
//     alert(" Happy Coding \n Prevant this page from creating addition dialogs ")

//**** Chapter 2: (VARIABLES FOR STRINGS)****//

// 1. Declare a variable called username.
//   let userName;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.
//   let myName;
//   let myName="Ghulam Ali"

// 3. Write script to
// a) Declare a JS variabless, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
//     let message;
//     message="Hello world"
//     alert(message)
//

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.
//     let name="Jhon Doe";
//     let age=15;
//     certificate=" Certified Mobile Application Development"
//     alert(name)
//     alert(age + " years old")
//     alert(certificate)
//

// 5. Write a script to display the following alert using one JS
// variable:
// let pizza="PIZZA\nPIZZ\nPIZ\nPI\nP"
// alert(pizza)

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)
//    let email="ali@gmail.com"
//    alert("My email address is " + email)

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:
// let book="A smarter way to learn JavaScipt"
// alert("I am try to learn from the Book " + book)

// 8. Write a script to display this in browser through JS
//    document.write("Yah! I can write HTML content through JavaScript")

// 9. Store following string in a variable and show in alert and
// browser through JS
// “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
// let stylishString = "═════ஜ۩۞۩ஜ═════";
// alert(stylishString)

//**** Chapter 3: (VARIABLES FOR NUMBERS)****//
// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.
//  let age=23;
//  alert("I am " + age +"Year Old")

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.
// let visit=20;
// alert(`You have visited this website ${visit} times `)

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:
// let birthYear=2000;
// document.write(`My birth year is ${birthYear} \n
// Data type of my declared variable is ${typeof birthYear}.`)

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// name= "Jhon Doe";
// title="T-shirt(s)"
// quantity=5;
// document.write(` ${name}
//    ordered ${quantity} ${title} on XYZ Clothing store.`)

//**** Chapter 4: (VARIABLE NAMES: LEGAL & ILLEGAL)****//

// 1. Declare 3 variables in one statement.
// 3 variables in one statement.
//   var firstVar, secondVar, thirdVar;

// 2. Declare 5 legal & 5 illegal variable names.
// Legal variable names:
//   var myVar;
//   var _myVar;
//   var $myVar;
//   var myVar2;
//   var my_var;

//  Illegal variable names
//  var 2myVar;
//  var my-var;
//  var my var;
//  var @myVar;
//  var var;

//   3. Display this in your browser
//   a) A heading stating “Rules for naming JS variables”
//   b) Variable names can only contain ______, ______,
//   ______ and ______.
//   For example $my_1stVariable
//   c) Variables must begin with a ______, ______ or
//   _____. For example $name, _name or name
//   d) Variable names are case _________
//   e) Variable names should not be JS _________
//   let number1 = +prompt("Enter First Number:");
//   let number2 = +prompt("Enter Second Number:");
//   result = number1 + number2;
//   document.write(
//     "The sum of " + number1 + " and number " + number2 + " is " + result
//   );

//**** Chapter 5: (MATH EXPRESSIONS)****//
// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
//   let number1 = +prompt("Enter First Number:");
//   let number2 = +prompt("Enter Second Number:");
//   result = number1 - number2;
//   document.write(
//     "The substraction of " +
//       number1 +
//       " and number " +
//       number2 +
//       " is " +
//       result
//   );

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// function mul() {
//   let number1 = +prompt("Enter First Number:");
//   let number2 = +prompt("Enter Second Number:");
//   result = number1 * number2;
//   document.write(
//     "The multiplication of " +
//       number1 +
//       " and number " +
//       number2 +
//       " is " +
//       result
//   );
// }

// function div() {
//   let number1 = +prompt("Enter First Number:");
//   let number2 = +prompt("Enter Second Number:");
//   result = number1 / number2;
//   document.write(
//     "The division of " + number1 + " and number " + number2 + " is " + result
//   );
// }

// function mod() {
//   let number1 = +prompt("Enter First Number:");
//   let number2 = +prompt("Enter Second Number:");
//   result = number1 % number2;
//   document.write(
//     "The modulus of " + number1 + " and number " + number2 + " is " + result
//   );
// }

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
//   let variable;
//   alert("Value after variable declaration is:" + variable);
//   variable = 5;
//   alert("Initial value:" + variable);
//   variable++;
//   alert("Value after increment is: " + variable);
//   variable = variable + 7;
//   alert("Value after addition is: " + variable);
//   variable--;
//   alert("Value after decrement is: " + variable);
//   var remainder = variable % 3;
//   alert("The remainder is: " + remainder);

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store ticket price in a variable & calculate the cost of buying 5
// tickets to a movie.
//   let price = 600;
//   tickets = 5 * price;
//   alert("The price of 6 tickets to a movie is " + tickets);

// 5. Write a script to display multiplication table of any
// number in your browser.
//   let table = 4;
//   document.write(table + " x 1 = " + table * 1 + "<br>");
//   document.write(table + " x 2 = " + table * 2 + "<br>");
//   document.write(table + " x 3 = " + table * 3 + "<br>");
//   document.write(table + " x 4 = " + table * 4 + "<br>");
//   document.write(table + " x 5 = " + table * 5 + "<br>");
//   document.write(table + " x 6 = " + table * 6 + "<br>");
//   document.write(table + " x 7 = " + table * 7 + "<br>");
//   document.write(table + " x 8 = " + table * 8 + "<br>");
//   document.write(table + " x 9 = " + table * 9 + "<br>");
//   document.write(table + " x 10 = " + table * 10 + "<br>");


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
//   let celTemp = 25;
//   let fTemp = (celTemp * 9) / 5 + 32;
//   alert(`${celTemp}°C is ${fTemp}°F`);
//   fTemp = 77;
//   celTemp = ((fTemp - 32) * 5) / 9;
//   alert(`${fTemp}°F is ${celTemp}°C`);


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
//   let item1Price = 200;
//   let item2Price = 400;
//   let quantity1 = 5;
//   let quantity2 = 2;
//   let shipCharges = 250;
//   let total = item1Price * quantity1 + item2Price * quantity2 + shipCharges;
//   alert("The total price is: " + total);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
//   let totalMarks = 1100;
//   let obtained = 950;
//   let per = (obtained * 100) / totalMarks;
//   alert("Your Percentage is " + per);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
//   let usDollars = 10;
//   let saudiRiyals = 25;
//   let exchangeRateDollarToPkr = 278;
//   let exchangeRateRiyalToPkr = 28;
//   let totalInPkr =
//     usDollars * exchangeRateDollarToPkr + saudiRiyals * exchangeRateRiyalToPkr;
//   alert("The total amount in Pakistani Rupees is: " + totalInPkr);


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
//   let nmbr = 7;
//   let result = ((nmbr + 5) * 10) / 2;
//   alert("The result is: " + result);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

//   let currentYear = 2024;
//   let birthYear = 1995;
//   let age1 = currentYear - birthYear;
//   let age2 = age1 - 1;
//   alert("They are either " + age2 + " or " + age1 + " years old.");

