var person = {
    fullname: function(city,country){
        return this.firstname+"_"+this.lastname+"_"+city+"_"+country
    }
}

var john = {
    firstname:'John',
    lastname:'eva'
}

person.fullname.call(john,'London','England');
person.fullname.apply(john,['Delhi','India'])

/////

function robot(name){
    this.name =name;
    this.legs =2;
    this.color='white'
}

var pepper = new robot('pepper')

function human(name){
    this.name = name
    this.city = 'newyork'
}

human.prototype = new robot()
var John = new human('john')

John
human {name: "john", city: "newyork"}
John.legs
2
John.color
"white"a