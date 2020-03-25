var url = "https://api.exchangeratesapi.io/latest?base="

function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`, {method:'GET'})
    .then((response) => response.json())
    .then((out) =>  {console.log(JSON.stringify(out.rates))})

}