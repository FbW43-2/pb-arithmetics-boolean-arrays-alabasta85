//exercise 1
1
let snackServings = 3 ;
let guests =  2 ;

2
console.log (snackServings + guests) ; // Results: 5


//3
console.log(snackServings - guests); //Result: 1

//4
console.log(snackServings * guests); //Result: 6

//5
console.log(snackServings / guests); //Result: 1.5


//6
let drinks = 10;
let resultOne = (snackServings * guests) / drinks;
console.log(resultOne); //Result: 0.6

//7
let monkeys = 15;
let bananas = 9;
console.log(monkeys / bananas);                      //Result: 1.66666666666

//8
let monkeyfights = 20;
let resultTwo = (monkeys + bananas) * monkeyfights;
console.log(resultTwo);                             //Result: 480

//9
monkeys++;
console.log(monkeys); //Result :16

//10
bananas--;
console.log(bananas); //Result:8

//11
let happiness = bananas - monkeys;
console.log(happiness + monkeyfights); //Result: 12

//12
console.log(resultOne % resultTwo); //Result: 0.6


//Exercise 2
let firstName, givenName;
firstName = 'Stacey';
let name = givenName || firstName || 'John'; 
console.log(name);
//Result: Stacey. Because it is only the firstName that is defined in this case: firstName = "Stacey", givenName and 'John' are undefined, so false.



//Exercise 3
//1
let myArray = ["Name", "Age", "Address", "IBAN", "Phone"];
console.log(myArray);                                      
//Result: [ 'Name', 'Age', 'Address', 'IBAN', 'Phone' ]

//2
let thirdElement = myArray[2];
console.log(thirdElement);     //Result: Address

//3
myArray[3] = "fourth element";
console.log(myArray);          
//Result: [ 'Name', 'Age', 'Address', 'fourth element', 'Phone' ]
  
