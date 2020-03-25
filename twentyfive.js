id 
class 
tagname

document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('div')
document.getElementsByTagName('h1')
HTMLCollection [h1]
document.getElementsByTagName('h1')[0]
<h1>​I'm AAKASH HANDA​</h1>​
document.getElementsByTagName('h1')[0].innerText
"I'm AAKASH HANDA"
document.getElementsByTagName('h1')[0].innerText="I m from Nareshit"
"I m from Nareshit"
document.getElementsByTagName('h1')[0].style.color="red"
"red"
document.getElementsByClassName('scroll')
HTMLCollection(4) [a.scroll, a.scroll, a.scroll, a.scroll]length: 40: a.scroll1: a.scroll2: a.scroll3: a.scroll__proto__: HTMLCollection
document.getElementsByClassName('scroll')[1].innerText="Tech"
"Tech"
document.getElementById('test')
<a href=​"#skills" class=​"scroll" id=​"test">​Skills​</a>​
document.getElementById('test').innerText="Experince"
"Experince"
document.getElementById('test').style.visibility="hidden"
"hidden"
document.getElementById('test').style.visibility="visible"
"visible"