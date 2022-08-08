
const firstName = "Joseph";
let lastName = "Broome";
var age = 33;
let language ="JavaScript";
let createdYear = 1995;
let isCaseSensitive = true; 
let price =19.99;
let isOnSale = false;
let salePercentage = 15;
let inStock = false;
let selectedSize = "M";
let title = "Name of the Wind";
let author = "Patric Rothfuss";
let pageCount = 722;
let bookMark = 456;
let hasRead = true;
age=32
price=20.11
let exercise1 = document.getElementById("Exercise1");
let exercise2= document.getElementById("Exercise2")
let exercise3= document.getElementById("Exercise3")
let exercise4=document.getElementById("Exercise4")
exercise1.innerHTML = (`${firstName +" "+lastName} is ${age} years old`)

exercise2.innerHTML =(`The ${language} language was first created in ${createdYear} and it is ${isCaseSensitive} that is is case sensitive.`)

exercise3.innerHTML= (`A barnd new t-shirt cost $${price} and it is ${inStock} that it is in stock and also ${isOnSale} that is is on sale. 
It only comes in size ${selectedSize}`)

exercise4.innerHTML =(`${firstName} is currenlty reading ${title} by author ${author}. ${firstName} is on page ${bookMark} out of ${pageCount} pages.
It is ${hasRead} that he as read the book before`)




