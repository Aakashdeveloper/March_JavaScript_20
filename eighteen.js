var a = 10
var a //declaration
a = 10 //assignment

var => we can declare and reassign
let => we cannot redeclare but can reassign
const => we cannot redeclare nor reassign 
////////////////////////////
        RegExp
/////////////////////////////

var email = "a@a"

var name = "john"
name.match("^([a-z]+)$")

var name = "john"
name.match("^([a-z]+)$")
(2) ["john", "john", index: 0, input: "john", groups: undefined]
var name = "john1"
name.match("^([a-z]+)$")
null
var name = "hi john"
name.match("^([a-z]+)$")
null
var name = "johN"
name.match("^([a-z]+)$")
null
var name = "johN"
name.match("^([a-zA-Z]+)$")
(2) ["johN", "johN", index: 0, input: "johN", groups: undefined]
var name = "johN "
name.match("^([a-zA-Z]+)$")
null


name.match("^([a-zA-Z0-9]+)$")
var phone = "8768878931"
phone.match("^[0-9]{10}$")




var email= "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")


var email= "a@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["a@a.com", "a", "a", "com", index: 0, input: "a@a.com", groups: undefined]
var email= "a@a."
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email= "a@a.aakash"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email= "@a.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
null
var email= "ahanda205@\1gmail.com"
email.match("^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")
(4) ["ahanda205@gmail.com", "ahanda205", "gmail", "com", index: 0, input: "ahanda205@gmail.com", groups: undefined]

const re = new RegExp("^([aeiou]).+\\1$"); 
 
email.match("^([a-zA-Z0-9_-%]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$")

"^[\w]$"


6-9