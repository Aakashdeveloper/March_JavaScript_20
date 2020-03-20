
const sayhi =  () => { console.log('hi to first') }

function greet(){ 
   this.sayhi = () => { console.log('hi to all') }
}


var mygreet = new greet();

mygreet.sayhi()




var bob = new Object();
bob.age = 10
bob.city = "Newyork"
bob.setAge = function(newAge){
    bob.age = newAge
}


var tony = new Object();
tony.age = 10
tony.city = "Newyork"
tony.setAge = function(newAge){
    tony.age = newAge
}


let createAge = function(newAge){
    this.age = newAge
}

var bob = new Object();
bob.age = 10
bob.city = "Newyork"
bob.setAge = createAge

var tony = new Object();
tony.age = 10
tony.city = "Newyork"
tony.setAge = createAge



function database(){
    this.find = (table)=>{ return `Select * from ${table}`}
    this.rank=(table,student)=>{ return `Select mark from ${table} where name ${student} `}
}


var employee = new database()
employee.find('Emp')


