var a = 10

function add(ui) {
    var b = 5
    return ui+a+b
}

add(3)
console.log('aa>>>>',a)
console.log('bb>>>>',b)

clouser => restrict the scope/local declare



var c = "hi"
for(i=0;i<5;i++){
    var d = "bie"
    console.log(c+i+d)
}

hi0bie
VM179:4 hi1bie
VM179:4 hi2bie
VM179:4 hi3bie
VM179:4 hi4bie
undefined
c
"hi"
d
"bie"


var y = "hi"
for(i=0;i<5;i++){
    let x = "bie"
    console.log(y+i+x)
}