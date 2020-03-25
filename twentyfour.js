function language(name,country){
    this.name=name;
    this.country=country;
}

var hindi = new language('Hindi','India')
/////////////////
class geo{
    constructor(lat,long){
        this.lat=lat;
        this.long=long;
    }
}

class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country=country;
    }

    add(a,b){
        out= a+b
    }
}

var hindi = new language('English','India',10.1,22.2)
hindi.add()