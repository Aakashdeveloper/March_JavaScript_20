var a = ['a','b','c','d']
var sum = [10,4,5,32,70]
var test=[true,false,false,true]

var mmyarray = [1,4,'hi','bie',7,'test',true,4,'fff',false,false]

array can be collection of homogenous or Hetrogenous



var city=["London","NewYork","Delhi","Helsinki","Amsterdam"]
undefined
city.length
5
city[0]
"London"
city[5]
undefined
city[city.length-1]
"Amsterdam"
typeof(city)
"object"

var city=["London","NewYork","Delhi","Helsinki","Amsterdam"]
undefined
city.push('Mumbai')
6
city
(6) ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai"]
city.push('Mumbai','Tapia')
8
city
(8) ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai", "Tapia"]
city.push(['Pune','Boston'])
9
city
(9) ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai", "Tapia", Array(2)]0: "London"1: "NewYork"2: "Delhi"3: "Helsinki"4: "Amsterdam"5: "Mumbai"6: "Mumbai"7: "Tapia"8: Array(2)0: "Pune"1: "Boston"length: 2__proto__: Array(0)length: 9__proto__: Array(0)
city[8]
(2) ["Pune", "Boston"]
city[8][0]
"Pune"

var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai", "Tapia"]
undefined
city.pop()
"Tapia"
city
(7) ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai"]
city
(7) ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai"]
city.pop()
"Mumbai"
city
(6) ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai"]
city.pop(1)
"Mumbai"
city
(5) ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam"]
city.pop(10)
"Amsterdam"
city
(4) ["London", "NewYork", "Delhi", "Helsinki"]


var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai", "Tapia"]
undefined
city.shift()
"London"
city
(7) ["NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai", "Tapia"]
city.shift(2)
"NewYork"
city
(6) ["Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai", "Tapia"]
var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai", "Tapia"]
undefined
city.unshift('Paris')
9
city
(9) ["Paris", "London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Mumbai", "Mumbai", "Tapia"]




push => add value at the end of array
pop=> take out from the last of the array  
shift => Take out from the begining of array
unshift => Add at the begining of array






var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam"]
var city1 = ["Paris","Nice","Auckland"]
city+city1


var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam"]
var city1 = ["Paris","Nice","Auckland"]
undefined
var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam"]
var city1 = ["Paris","Nice","Auckland"]
city+city1
"London,NewYork,Delhi,Helsinki,AmsterdamParis,Nice,Auckland"
city.concat(city1)
(8) ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam", "Paris", "Nice", "Auckland"]



//To the same game  save the reslt of the user
// Check the probabilty of win /loose
