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
slice =>take out chunk of array without modify actual array
splice=> can moodify actual arrayy by inserting or removing from particular position


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


var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam"]
undefined
city.slice(2,4)
(2) ["Delhi", "Helsinki"]
city.slice(2,5)
(3) ["Delhi", "Helsinki", "Amsterdam"]
city.splice(2,0,'Pune',"Paris","Boston")
[]
city
(8) ["London", "NewYork", "Pune", "Paris", "Boston", "Delhi", "Helsinki", "Amsterdam"]
city.splice(3,1,'Honkong',"Macau")
["Paris"]
city
(9) ["London", "NewYork", "Pune", "Honkong", "Macau", "Boston", "Delhi", "Helsinki", "Amsterdam"]

//To the same game  save the reslt of the user
// Check the probabilty of win /loose

var city = ["London", "NewYork", "Pune", "Honkong", "Macau", "Boston", "Delhi", "Helsinki", "Amsterdam"]
undefined
city.indexOf('Pune')
2
city.indexOf('Mumbai')
-1
city.indexOf('Macau')
4
city.indexOf('Nice')
-1

var a = ['a','b','c']
var b = [1,2,3]

var a = [a,b,c]
var b = [1,2,3]
var c = [1,'a',10.1]

a[0]
a[1]
a[2]

var a = ['a','b','c']
var b = [1,2,3]
undefined
a+b
"a,b,c1,2,3"
a.concat(b)
(6) ["a", "b", "c", 1, 2, 3]
b.concat(a)
(6) [1, 2, 3, "a", "b", "c"]
var c = [1,'a',10.1]
undefined
a.concat(b.c)
(4) ["a", "b", "c", undefined]
a.concat(b,c)
(9) ["a", "b", "c", 1, 2, 3, 1, "a", 10.1]

var a = [a,b,c]
var b = [1,2,3]
var c = [1,'a',10.1]
undefined
a[0]
(3) ["a", "b", "c"]
a[1]
(3) [1, 2, 3]
a[2]
(3) [1, "a", 10.1]

var a = [a,b,c]
var b = [1,2,3]
var c = [1,'a',10.1]
undefined
a[0]
(3) ["a", "b", "c"]
a[1]
(3) [1, 2, 3]
a[2]
(3) [1, "a", 10.1]
a[0][0]
"a"
a


var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam"]

var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam"]
undefined
city+""
"London,NewYork,Delhi,Helsinki,Amsterdam"
city.toString()

"London,NewYork,Delhi,Helsinki,Amsterdam"

var mycity= "London,NewYork,Delhi,Helsinki,Amsterdam"
undefined
mycity.split(',')
(5) ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam"]
var a = "london"
undefined
a.split('')
(6) ["l", "o", "n", "d", "o", "n"]

var city = ["London", "NewYork", "Delhi", "Helsinki", "Amsterdam"]
undefined
city.sort()
(5) ["Amsterdam", "Delhi", "Helsinki", "London", "NewYork"]
city.reverse()
(5) ["NewYork", "London", "Helsinki", "Delhi", "Amsterdam"]

//check any value from array satistfy condition or not
array.some()

function checkval(val, index,array){
    return val>2
}

console.log([2,6,3,7,8].some(checkval))
array.some()


//check value is part of array or not
var city = ["Amsterdam", "Delhi", "Helsinki", "London", "NewYork"]
var test = city.includes('Pune')

var city = ["Amsterdam", "Delhi", "Helsinki", "London", "NewYork"]
var test = city.includes('Pune')

undefined
test
false
var city = ["Amsterdam", "Delhi", "Helsinki", "London", "NewYork"]
var test = city.includes('Delhi')

undefined
test
true



//findIndex
give first occurance which satisify condition

function checkeven(val, index,array){
    return (val%2 ==0)
}

[2,5,7,3].findIndex(checkeven)

//Every and fill


