// /  /this is a string
// let fullName = "Rafidul Islam";
// We can declare variable with var,let and const

// {
// var a;
// let x;
// const y = 1; // If you want to use const you have to assign value
// }
/*variables data types can be (Primitive) 
 1. Number
 2.string
 3.Boolean
 4.null
 5.undefined
 6.BigInt
 7.Symbol
*/
{
  // let x = 10;
  // console.log(x); //Number type data
}
{
  // let x = "Hello World !"; //String type data (Must be quoted)
  // console.log(x);
}
{
  // let x = true;
  // console.log(x); //Boolean type data
}
{
  // let x = null; //null type data(value is not given at any time)
  // console.log(x);
}
{
  // let x; //Undefined data
  // console.log(typeof x);
}
{
  // let x = BigInt(123); //BigInt Data
  // console.log(typeof x);
}
{
  // let x = Symbol(123); //Symbol type data
  // console.log(x);
}

/*variables data type (Non-Primitive)
1.Objects (Collection of values)
*/
// const Profile = {
//   // This is a object type data
//   profileName: "Rafidul Islam",
//   age: 20,
//   cgpa: 4.0,
// };
// console.log(Profile["age"]);
//  Profile["age"] = 40;
// console.log(Profile.age);
//to Access object data variable
// console.log(Profile.age);
// Profile.age += 1;
// console.log(Profile.age);

// {
// const x = 10;
// console.log(x);
// }
// {
//strings can't be summed but be substracted,multiplied,divided.
// const x = 50;
// const y = "20";
// console.log(x + y);
// }
// {
//   let a=5;
//   let b='5';
//   console.log("a==b",a===b);
// }

// let age = 18;
// if (age >= 18){
//   console.log("You can vote");

// }

// let x=1;
// if (x% 2==0){
//   console.log("Even")
// }else{
//   console.log("Odd")
// }
// let name = prompt("Hello");
// console.log(name);
// alert("HELLO");

// let number = prompt("Enter a Number ");
// if (number % 5 === 0) {
//   console.log(number, " is a multiple of 5 ");
// } else {
//   console.log(number, "is not a multiple of 5");
// }

//--------------------------------------
//Grading system.
// let mark = prompt('Enter your score ');
// if (mark >= 90 && mark <= 100) {
//   grade='A';
// } else if (mark >= 80 && mark <= 89) {
//   grade = "B";
// } else if (mark >= 70 && mark <= 79) {
//   grade = "C";
// } else if (mark >= 60 && mark <= 69) {
//   grade = "D";
// } else{
//   console.log('Fail/invalid Number')
// }
// console.log('According to your score , your grade is : ',grade);

//console.log("john" + "" + "Doe");

// console.log("RAFID");

// let text1='A',text2='B';
// console.log(text1<text2);

// for (let i = 1; i <= 100; i++) {
//   // Rows
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     // Columns
//     row += "*";
//   }
//   console.log(row); // Print the row
// }

// let str = "rafidul-islam";

// for (let i of str) {
//   console.log("i=", i);

// for (let i; i <= 100; i++) {

// }

// for (let x = 1; x <= 100; x++) {
//   //  console.log(x);
//   if (x % 2 == 0) {
//     console.log(x);
//   } else {
//     // console.log("");
//   }
// }

// let num1 = 50,
//   num2 = prompt("Enter a number");
// while (num1 != num2) {
//   num1=prompt("You entered a wrong number,Please Guess another Number");
// }
// console.log("You Won");

// let str="Rafid";
// for(let i of str){
//   console.log("i",i);
// }

// let str = "rafid";
// console.log(str.toUpperCase(str));
// {
// let expr=prompt("Enter which fruit you want to buy");
// switch (expr) {
//   case 'papayas':
//     console.log("Buy Papayas at 5tk");
//     break;
//   case 'orange':
//     console.log("Buy oranges at 10tk");
//     break;
//   default:
//     break;
// }
// }
// {
//   let string = {
//     name: "rafid",
//     age: 20,
//   };
//   console.log(typeof string);
//   console.log(string["name"].toUpperCase());
//   console.log(`The name of the student is ${string.name} and his age is ${string.age}`);
// }
// let str = "rafid";
// console.log(str[5]);
// str += "u";
// str += "l";
// console.log(str[5].toUpperCase());
// console.log(str.length)
// console.log(`My name is ${str}`);//Must include template literals

// let fullName = prompt("Enter fullname");
// let userName = "@" + fullName.toLowerCase(fullName);
// userName = userName + userName.length;
// console.log(userName);

// const str = "Hello";
// const string = (str[0] = "Y");
// console.log(str);
//

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array.length)

// var student = {
//   name: "rafid",
//   age: 20,
// };
// console.log(instanceof);

// var companies = [
//   "Bloomberg ",
//   "Microssoft",
//   "Uber",
//   "Google",
//   "IBM",
//   "Netflix",
// ];
// companies.shift();
// companies.splice(2, 0, "Ola");
// companies.push("amazon");
// console.log(companies);

// let a = isNaN('a');
// console.log(a);

// let arr = [
//   12, 13, 14, 17, 19, 12, 13, 14, 17, 1912, 13, 14, 17, 1912, 13, 14, 17, 19,
//   12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17,
//   19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14,
//   17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13,
//   14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12,
//   13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19,
//   12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17,
//   19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14,
//   17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13,
//   14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12,
//   13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19,
//   12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19, 12, 13, 14, 17,
//   19, 12, 13, 14, 17, 19, 12, 13, 14, 17, 19,
// ];
// console.log(Array.isArray(arr));
// console.log(arr);
// let index = 0;
// while (index >= 0 && index <= arr.length) {
//   console.log(arr[index]);
//   index++;
// }

// let promise = "I will give 6 hours daily";
// let i=0;
// while ( i <= 60) {
//   console.log(promise);
//   i++;
// }

// let fruits = ["apple", "bannana", "litchi", "pineapple", "guava"];

// console.log(fruits);
// for (let idx = fruits.length-1; idx >= 0; idx--) {
//   fruits[idx];
//   console.log(fruits[idx]);
// }
// console.log (fruits);

// const array = [1, 2, 3, 4, 5, 6, 7];

// for (let i = 1; i < array.length; i++) {
//   if (i == 5) {
//     continue;
//   }
//   console.log(array[i]);
// }

// const thana =new String()

// let name = "RAFIDUL ISLAM";
// let rev = "";
// for (let i = 0; i < name.length; i++) {
//   // console.log(name[i]);
//   rev = name[i] + rev;
//   console.log(rev);
// }

// const bottle = {
//   brand : 'apple ',
//   price : 250,
//   size : '2lt',
//   material : 'plastic',
// }
// console.log (bottle);
// let idx = Object.keys(bottle);
// console.log(idx);
// console.log(typeof bottle);
// console.log(Array.isArray(bottle));
// let x=[1,2,3,4,5];
// console.log(Array.isArray(x));
// console.log(x.splii);
// let num1 = 0.1;
// let num2 = 0.2;
// // console.log(num1 + num2);
// sum = num1 + num2;
// console.log(sum.toFixed(2));

// let firstName = "Rafiqul";
// let middleName = " ";
// let lastName = "Islam";
// firstName = firstName.replace("q", "d");
// console.log(firstName.includes("d"));
// console.log(firstName.charAt(4));
// console.log(firstName.length);
// // let fullName = firstName + middleName + lastName;
// // fullName = firstName.concat(middleName, lastName);
// // console.log(fullName);

// function priceFuction() {
//   let initialPrice = [250, 645, 300, 900, 50];
//   console.log(initialPrice);
//   let discount;
//   for (let price of initialPrice) {
//     discount = (price * 10) / 100;
//     let afterDiscountPrice = price - discount;
//     console.log(afterDiscountPrice);
//   }
// }

// let name = ['abul','kabul','babul','tabul']
// name.unshift();
// console.log(name);

// let name = "Radul";
// nameArray = name.split("");
// nameArray.splice(2, 0, "f", "i");
// console.log(nameArray.join(""));
// console.log(nameArray.toString().replaceAll(",", ""));
// console.log (nameArray.indexOf('d'));
// name=nameArray.toString();

// let student = {
//   name:'RAFIDUL ISLAM',
// }
// console.log(`The Best Student in The Class Is ${student['name']}`);
// var h = isNaN('11');
// console.log(h);
// var a = isNaN(2 - 10);
// console.log(a);

// const arr = ["mango", "litchi", "pineapple", "kathal", "tormuz"];
// console.log(arr);
// console.log(arr[3]);
// arr[2] = "jambura";
// console.log(arr);

// const tourPlace = ["coxs-baxar", "bandarban", "sree-mongol"];
// const arr = ["aam", "jam", "lichu", "kathal"];
// array = tourPlace.concat(arr);
// console.log(Array.isArray(array));
// console.log(array);

// tourPlace.push("kua-kata");
// tourPlace.push("hatia", "nijhum-dip");
// console.log(tourPlace);
// tourPlace.splice(3,1);
// console.log(tourPlace);

// for (let i = 0; i >= 0 && i <= 200; i++) {
//   console.log(i);
// }
// var sum = 0;
// for (let i = 0; i <= 10; i++) {
//   console.log(i);

// }
// const college = {
//   name: "NDC",
//   location: "Dhaka",
//   class: "xi - xii",
//   student: 500,
//   unique: {
//     color: "cream",
//     result: {
//       gpa: 5,
//       category: "top",
//     },
//   },
// };
// console.log(college.unique.result.gpa)

// const object = {
//   name:'rafid',
// };
// delete object.name;
// console.log (object.name);

// function myfunction(x, y) {
//   const result = x ** y;
//   console.log("result is ", result);
// }
// const num1 = 10;
// const num2 = 2;
// myfunction(num1);

// const power = myfunction(6, 2);

// const Dhaka=prompt();
// console.log (Dhaka);
// function myfunction(array) {
//   let sum = "";
//   for (let num of array) {
//     sum = num + sum;
//   }
//   return sum;
// }
// console.log(
//   myfunction([
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//     "*",
//   ])
// );

// function getMenu() {
//   console.log("Burger, Pizza, Pasta");
// }
// getMenu()

// const names = ["abul", "babul", "abul", "babul", "kabul", "babul"];
// const newNames=[];
// for (name of names) {
//   console.log(name);
//   if (name.includes("abul") ){

//   }
// }

// console.log (Math.pow(5,2))
// const num1 = 'name';
// console.log(isNaN(num1));

// const arr = [1, 2, 3, 454, 6];
// array = arr.toString();
// console.log(array);
// num=array.replaceAll(",","");
// console.log (num)

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

//Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
// for (let i = 0; i <= 200; i++) {
//   console.log(i);
//   if (i === 100) {
//     break;
//   }
// }
// let sum = 0;
// for (let i = 1; i > 0; i++) {
//   console.log(i);
//   sum = sum + i;
//   if (sum >= 100) {
//     break;
//   }
//   console.log(sum);
// }
// console.log(sum);

// ===============================================Assignment Problems
//Probelm 1 Solved
// function cashOut(money) {
//   if (typeof money !== "number" || money <= 0) {
//     return "Invalid";
//   }
//   let charge;
//   charge = (money * 1.75) / 100;
//   return charge;
// }
//================================================
//Problem 2

// function validEmail(email) {
//   if (typeof email !== "string") {
//     return "Invalid";
//   }
//   if (
//     email[0] === "." ||
//     email[0] === "-" ||
//     email[0] === "+" ||
//     email[0] === "@" ||
//     email[0] === " "
//   ) {
//     return false;
//   }
//   if (!email.includes("@") || email.includes(" ")) {
//     return false;
//   }

//   let len = email.length;
//   if (
//     email[len - 1] !== "m" ||
//     email[len - 2] !== "o" ||
//     email[len - 3] !== "c" ||
//     email[len - 4] !== "."
//   ) {
//     return false;
//   }
//       else {
//          return true;
//       }

// }
// const result = validEmail("hero@alom.com");
// console.log(result);

// function validEmail(email) {
//   if (
// email[0] === "." ||
// email[0] === "-" ||
// email[0] === "+" ||
// email[0] === "@" ||
// email[0] === " " ||
//     typeof email !== "string"
//   ) {
//     return "Invalid";
//   } else {
//     // email.indexof("@");
//     // return email.indexOf("@");
//   }
// }
// const emailName = validEmail("rafid.iconic@gmail.com");
// console.log(emailName);
//====================
//Problem 3

// function electionResult(votes) {
//   arr1 = [];
//   arr2 = [];
//   if (
//     typeof votes === "object" &&
//     typeof votes === "string" &&
//     !Array.isArray(votes)
//   ) {
//     return "Invalid";
//   }

//   for (let vote of votes) {
//     if (vote === "mango") {
//       arr1.push(vote);
//     } else if (vote === "banana") {
//       arr2.push(vote);
//     }
//   }

//   if (arr1.length > arr2.length) {
//     return "Mango";
//   } else if (arr2.length > arr1.length) {
//     return "Banana";
//   } else if (arr1.length === arr2.length) {
//     return "Draw";
//   }
// }
// const result = electionResult(["mango", "BananA", "na vote", "na vote"]);
// console.log(result);

// //===================
// function electionResult(votes) {
//   if (Array.isArray(votes)) {
//     const arr1 = [];
//     const arr2 = [];
//     for (let vote of votes) {
//       if (vote === "mango") {
//         arr1.push(vote);
//       } else if (vote === "banana") {
//         arr2.push(vote);
//       }
//     }
//     if (arr1.length > arr2.length) {
//       return "Mango";
//     } else if (arr2.length > arr1.length) {
//       return "Banana";
//     } else if (arr1.length == arr2.length) {
//       return "Draw";
//     }
//   }

//   // =====
//   else {
//     return "Invalid";
//   }
// }
// ===============================
//Problem 4
// function isBestFriend(f1, f2) {
//   if (typeof f1 === "object" && typeof f2 === "object") {
//     if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   // =====
//   else {
//     return "Invalid";
//   }
// }
// const result = isBestFriend(
//   { name: "hashem", roll: 1, bestFriend: 1 },
//   { name: "kashem", roll: 1, bestFriend: 1 }
// );
// console.log(result);

// ======================
// Problem 05
// function calculateWatchTime(arr) {
//   if (Array.isArray(arr)) {
//     let sumOfTime = 0;
//     for (time of arr) {
//       if (typeof time === "number") {
//         sumOfTime = time + sumOfTime;
//       } else {
//         return "Invalid Time";
//       }
//     }
//     const hour = parseInt(sumOfTime / (60 * 60));
//     // console.log(hour);
//     const remainingSeconds = sumOfTime % (60 * 60);
//     // console.log(remainingSeconds);
//     const minutes = parseInt(remainingSeconds / 60);
//     // console.log(parseInt(minutes));
//     const seconds = remainingSeconds % 60;
//     // console.log(seconds);
//     const Time = {
//       hour: hour + "h",
//       minutes: minutes + "m",
//       seconds: seconds + "s",
//     };
//     return Time;
//   } else {
//     return "Invalid";
//   }
// }
// const result = calculateWatchTime([10000]);
// console.log(result);

// let expr = prompt("Enter name");
// expr = expr.trim();
// expr = expr.toUpperCase();
// // console.log(expr);
// switch (expr) {
//   case "PAPAYA":
//     console.log("Buy papaya");
//     break;
// }
// let arr = [1, 2, 3, 4, 5, 6,  7, 8, 9, 0];
// arr.slice(2, 5);
// console.log(arr);

// If we slice an array it will return the sliced array in a new array.Immutable

// let name = "Rafid";
// const newName = name.split("a");
// console.log(newName);
// let friends = "rahim,akrim,apon,turag";
// console.log(friends.split(","));
// function myfunction(){
//   window.print("Hello Motherfucker!!");
// }
// function myfunction(x, i) {
//   let result;
//   for (i = 1; i <= 10; i++) {
//     result = x * i;
//     console.log(`${x} * ${i} = ${result} `);
//   }
// }
// myfunction(10, 1);

//whenever using function the vaeriable is already declared.

// for (let i = 81; i >= 65; i--) {
//   console.log(i);
// }
// let i = 1;
// let sum=0;
// while (i < 60) {
//   if (i % 2 == 1) {
//     sum = i + sum;
//     console.log(i);
//   }
//   i++;
// }
// console.log(sum);

// let n = 2,
//   i = 1,
//   result;
// while (i <= 10) {
//   result = n * i;
//   console.log(`${n} * ${i} = ${result}`);
//   i++;
// }

// const thana= new String("Senbag");
// console.log(typeof thana);

// const name = "Dhaka";
// named = name.replace("D", "F");
// console.log(named);

// const student = {
//   name: "Rafid",
//   age: 20,
//   marks: {
//     subject1: {
//       part1: {
//         chapter1: "Vector",
//         chapter2: "Newtonian Mechanics",
//       },
//       part2: "Physics 2nd Paper",
//     },
//     subject2: "Chemmistry",
//     subject3: "Math",
//     subject4: "Biology",
//   },
// };
// console.log(student)
// for (let prop in student){
//   console.log(student[prop]);
// }
// for (let prop in student){
//   console.log(prop);
// }
// console.log(Object.values(student))
// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;
// console.log(result);
// let x = "*";
// let sum = "";
// for (let i = 0; i <= 10; i++) {
//   sum = sum + x;
//   console.log(sum,"");
// }

// const object = new Object();

// object.item1 = "Brush";
// object.item2 = "Soap";
// object.item3 = "Oil";
// object.item4 = "Perfume";
// object.item5 = "Facewash";

// console.log(object['item3']);

// const object = {
//   name : "Rafid",
// }
// //strings are immutable
// delete object.name;
// object.age = 20;
// console.log(object);

// const student ={
//   firstName:"Rafidul",
//   lastName:"Islam",
//   fullName: function myfunction(){
//     return this.firstName .toUpperCase()+" "+this.lastName.toUpperCase();
//   }
// }
// console.log(student.fullName());

// function myfunction(fname, age, dept) {
//   const student = {
//     fullName: fname,
//     age: age,
//     department: dept,
//   };
//   return fname;
// }
// const object = myfunction("rafid", 20, "SWE");
// console.log(object);
// function myfunction(array) {
//   let sum = 0;
//   for (let i of arr) {
//     sum = sum + i;
//   }
//   return sum;
// }
// arr=[1,2,3,4,5,6,7,8]
// console.log(myfunction(arr));

// let array = [1, 2, 3, 4, 5, 6, 4, 8, 4, 10, 4];
// console.log(array.includes(4));
// console.log(array.indexOf(4));
// array.splice(3, 1);
// console.log(array);
// for (let i = 0; i <= array.length; i++) {
//   if (array[i] === 4) {
//     array.splice(i, 1);
//   }
// }
// console.log(array);

// For counting vowels in a String
// function countVowels(str) {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char == "a" ||
//       char == "e" ||
//       char == "i" ||
//       char == "o" ||
//       char == "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// countVowels("aeiou");

// let arr = ["dhaka", "chittagong", "noakhali", "rajshahi"];
// for (let val of arr) {
//   console.log(val.toUpperCase());
// }

// arr.forEach(function myfunction(city, name, location) {
//   console.log(city, name, location);
// });

// const value1 = arr.forEach(function squareVal(val, idx, arr) {
//   return val;
// });
// console.log(value1);
// const value2 = arr.map(function squareVal(val, idx, arr) {
//   return val;
// });
// console.log(value2);
// function even() {
//   for (let val of arr) {
//     return val % 2 === 0;
//   }
// }
// even();

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const newArr = arr.filter((val) => {
//   return val % 2 === 0;
// });
// console.log(newArr);

// const name = "Rafid";
// name = "islam"
// console.log(name);

// document.getElementById("div").addEventListener("click", function (event) {
//   console.log("Div Clicked");
// });
// const work = (event) => {
//   console.log("Div1 Clicked");
//   event.stopPropagation();
// };
// document.getElementById("div1").addEventListener("click", work);

// const person = {
//   name: "Rafid",
//   age: 21,
//   skills: ["JavaScript", "HTML", "CSS"],
// };

// console.log(person);

// document.getElementById("div").setAttribute("class", "class");
// document.querySelector("").style.backgroundColor = "red";
// document.getElementById("div").style.backgroundColor = "red";

// class phone {
//   #ram;
//   constructor(brand, price, color, variant, ram, rom) {
//     this.brand = brand;
//     this.price = price;
//     this.color = color;
//     this.variant = variant;
//     this.#ram = ram;
//     // This is private data.It can only be shown only when it's being called from inside the Functionl
//     this.rom = rom;
//   }
//   action() {
//     console.log(this.#ram);
//   }
// }
// class Nokia extends phone {
//   constructor(brand, price, color, variant, ram, rom, Durability) {
//     super(brand, price, color, variant, ram, rom);
//     this.Durability = Durability;
//   }
// }

// const iPhone = new phone("iphone", 10000, "black", "us", 8, 256);
// console.log(iPhone);

// const nokia = new Nokia("nokia", 1000, "blue", "chineese", 8, 200, 1000);
// console.log(nokia.action());

// if (undefined) {
//   console.log("hello");
// }

// const myFunc = () => {

// };
// console.log(myFunc);
// {
//   var x,
//     y = 4;
// }
// console.log(y);
// console.log(undefined + y);
// const sum = (p, q) => {
//   p + q;
// };
// const result = sum(2, 3);
// console.log(result);
// function work(x, y = 4) {
//  return x + y;
// }
// console.log(work(32);

// const x= 10;
// console.log(x.isInteger())

// console.log(Number.MAX_VALUE)

// const fetchedData = () => {
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((res) => res.json())
//     .then((json) => console.log(JSON.stringify(json)));
// };

// const postHandler = () => {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => {
//       displayPost(data);
//     });
// };
// const displayPost = (posts) => {
//   const postContainer = document.getElementById("post-container");
//   for (const post of posts) {
//     const li = document.createElement("li");
//     li.innerText = post.title;
//     postContainer.appendChild(li);
//   }
// };

// postHandler();

// let items = [250, 650, 300, 900, 50];
// let i = 0;
// for (let item of items) {
//   console.log(`Item price at ${i} = ${item}`);
//   i++;
// }
// // const newItems=
// items.splice(1,2,200);
// console.log(items.includes(200))
// console.log(items.indexOf(200))

// for (let i = 0; i <= 15; i++) {
//   if (i == 10) {
//     continue;
//   }
//   console.log(i);
// }
// let i = 0;
// while (i <= 15) {
//   console.log(i);
//   i++;
// }

// //
// const person = {
//   name: "rafid",
//   age: 21,
//   city: "dhaka",
// };

// for (let key in person) {
//   console.log(person[key]);//this will work like this instead of person.key
// }

// let numbers = [250, 650, 300, 900, 50];
// console.log(items.reverse());
// const reverse = [];
// for (const num of numbers) {
// console.log(num);
// reverse.unshift(num);
// console.log(reverse);
// }
// const btn = document.getElementById("btn");
// const color = () => {
//   let r = Math.random() * 3000;
//   let g = Math.random() * 3000;
//   let b = Math.random() * 3000;
//   document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
// };
// btn.onclick = color;
// document.getElementById("btn").addEventListener("click", function (e) {
//   console.log(e);
// });
