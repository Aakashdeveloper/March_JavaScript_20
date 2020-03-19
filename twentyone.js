//literal notation
var country = {
    name:'India',
    capital:'Delhi',
    population:9798787
}
undefined
typeof(countryy)
"undefined"
typeof(country)
"object"
country
{name: "India", capital: "Delhi"}
country.name
"India"
country.capital
"Delhi"
country.states = 32
32
country
{name: "India", capital: "Delhi", states: 32}
delete country.name
true
country
{capital: "Delhi", states: 32}
country
{capital: "Delhi", states: 32}
country.capital="Mumbai"
"Mumbai"
country
{capital: "Mumbai", states: 32}

var country = {
    name:'India',
    capital:'Delhi',
    population:9798787
}
country
{name: "India", capital: "Delhi", population: 9798787}
country['name']
"India"


//constructor
var car = new Object()

var car = new Object()
undefined
typeof(car)
"object"
car.name="John"
"John"
car
{name: "John"}


var sayHi = {
    firstname:'John',
    lastName:'eva',
    greet:function(){
        return "Hi Welcome to Object"
    }
}

sayHi.greet()
"Hi Welcome to Object"


var calc = {
    sum:(a,b)=>{return a+b},
    sub:(a,b)=>{return a-b}
}

var calc = {
    sum:(a,b)=>{return a+b},
    sub:(a,b)=>{return a-b}
}
undefined
calc.sum(1,2)
3
calc.sub(1,2)
-1