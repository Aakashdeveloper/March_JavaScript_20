var city = "lOndoN"
city.toUpperCase()
"LONDON"
var city1 ="HelsInkI"
city1.toLowerCase()
"helsinki"

var city2 = "London"

var country = "India"

var country = "India"
undefined
country.length
5
var country = "  India    "
undefined
country.length
11
country.trim()
"India"
country.trim().length
5

var country = "India"
undefined
country[0]
"I"
country[1]
"n"
country.slice(1)
"ndia"
country.slice(1)
"ndia"
country[0].toUpperCase()+country.slice(1).toLowerCase()
"India"
var country= "UnItedStAte"
undefined
country[0].toUpperCase()+country.slice(1).toLowerCase()
"Unitedstate"

var a = "I Love Javascript"
undefined
a.replace("Javascript","React")
"I Love React"
var a = "Javascript, I Love Javascript"
undefined
a.replace("Javascript","React")
"React, I Love Javascript"
a.replace(/Javascript/g,"React")
"React, I Love React"
var a = "Javascript, I Love Javascript"
undefined
a.replace(" ","_")
"Javascript,_I Love Javascript"
a.replace(/ /g,"_")
"Javascript,_I_Love_Javascript"


slice(start,end)
> if first value is -ve than output is  null if second value
is -ve than it will start removing from backward
substring(start,end) 
=> if first or second is -ve than it will start the counting from -ve direction toward 
+0 but if both are -ve than null
substr(start,length)
=> -ve indicate how many values from -ve direction

var a = "JavaScript"
a.slice(1)

var a = "JavaScript"
a.slice(1)
"avaScript"
a.slice(2)
"vaScript"
a.slice(4)
"Script"
a.slice(1,4)
"ava"
a.slice(1,5)
"avaS"
a.substring(1)
"avaScript"
a.substring(1,4)
"ava"
a.substring(1)
"avaScript"
a.substring(1,4)
"ava"
a.substr(1)
"avaScript"
a.substr(1,4)
"avaS"
a.substring(1,4)
"ava"
a.substr(1,4)
"avaS"
a.slice(2,-2)
"vaScri"
a.slice(-2,-2)
""
a.slice(-2,2)
""
a.slice(-1,1)
""
a.slice(2,-2)
"vaScri"
a.slice(-2,-2)
""
a.slice(-2,2)
""
a.slice(-1,1)
""

var language="Hindi"
undefined
language.charAt(0)
"H"
language.charAt(7)
""
language.charAt(3)
"d"
language.indexOf('i')
1
language.indexOf('d')
3

//array