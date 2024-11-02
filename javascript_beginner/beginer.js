
var item_name = "orange"
var quantity;
var amount;


// item_name = "orange"
console.log(item_name);

quantity = 5
amount = 50

// item_name = "apple"         
console.log(item_name);
// typeof(item_name);
var person = [1,  10];
console.log(typeof(person));


var total_cost = quantity * amount

console.log(item_name + 's: ' + total_cost );

console.log(1 < 2 < 3); 

let a = 8;
let b = 2;
let c = 16;

console.log(a < b < c); 

console.log((a * b) === c);  

console.log((a * b) !== c);  

// alert("Who are You")


var myHeading = document.querySelector("h1");
myName = prompt("What's your name ?")
localStorage.setItem("name",myName)
console.log(myName);
myHeading.textContent =` ${myName}`


