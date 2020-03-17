var a = 10
var b = 20
a+b


//function
function add(a,b){
    return a+b
}
add(1,2)
3
add('1','1')
"11"


//Method
var isEven = function(numarray){
    var output = [];
    for(i=0;i<numarray.length;i++){
        if(numarray[i]%2==0){
            output.push("Number is even")
        }else{
            output.push("Number is odd")
        } 
    }
    return output
}



var isEven = function(userinput){
    var output;
        if(userinput%2==0){
            output= "Number is even"
        }else{
            output=  "Number is odd"
        }
  
    return output;
}
