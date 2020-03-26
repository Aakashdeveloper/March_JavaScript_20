var url = "https://api.exchangeratesapi.io/latest?base="


async function convert(){
    var base = document.getElementById('base').value;
    var convert = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    let response =  await fetch(`${url}${base}`, {method:'GET'})
    let data = await response.json();
    final = data.rates
    final = `${convert} ${final[convert]*parseFloat(amount)}`
    console.log(final)
    document.getElementById('converted').innerText=final
}


/*function convert(){
    var base = document.getElementById('base').value;
    var convert = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    //alert(base)
    console.log(`${url}${base}`)
    fetch(`${url}${base}`, {method:'GET'})
    .then((response) => response.json())
    .then((out) =>  {
        final = out.rates
        final = `${convert} ${final[convert]*parseFloat(amount)}`
        console.log(final)
        document.getElementById('converted').innerText=final
    })
}
*/