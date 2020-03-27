var a = ['a','b','c','d','e']

for(i=0;i<a.length;i++){
    console.log(a[i])
}


var num = [5,7,3,8,10,34]
for(i=0;i<num.length;i++){
    console.log(num[i]+1)
}

num.map((data) => { return data+1})
[6, 8, 4, 9, 11, 15, 3]

var num = [5,7,3,8,10,14,2]
for(i=0;i<num.length;i++){
    console.log(num[i]>5)
}

var num = [5,7,3,8,10,14,2]
//help to filter over the array
num.filter((data) => { return data>5})
[7, 8, 10, 14]
// filter always return those value for which
// condition true

//help to iterate over the array
num.map((data) => { return data+1})
[6, 8, 4, 9, 11, 15, 3]

num.filter((data) => { return data+1})
(7) [5, 7, 3, 8, 10, 14, 2]
num.map((data) => { return data>5})
(7) [false, true, false, true, true, true, false]


var myarray = [0,1,2,3,4]
myarray.map((data) => {return data*2})
(5) [0, 2, 4, 6, 8]
myarray.filter((data) => {return data*2})
(4) [1, 2, 3, 4]




var city = {"name":"John","class":"ui"}

var out =""
var x;
for(x in city){
    out += city[x] + " "
}
