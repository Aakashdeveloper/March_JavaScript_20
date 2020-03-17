for
while
do while
for of
for in
Map
filter 




for(i=0;i<10;i++){
    console.log(i)
}

var city=["London","NewYork","Delhi","Helsinki","Amsterdam"]
for(i=0;i<city.length;i++){
    console.log(city[i])
}


var movies = [
    {
      "_id": "5ab12612f36d2879268f284a",
      "name": "Black Panther",
      "language": "ENGLISH",
      "rate": 4.5,
      "type": "Action Adventure Fantasy",
      "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
    },
    {
      "_id": "5ab12666f36d2879268f2902",
      "name": "Death Wish",
      "language": "ENGLISH",
      "type": "Action Crime Thriller",
      "rate": 3.2,
      "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
    },
    {
      "_id": "5ab12678f36d2879268f291d",
      "name": "Coco",
      "language": "ENGLISH",
      "type": "Adventure Animation Family",
      "rate": 5,
      "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
    }
]


for(i=0;i<movies.length;i++){
    console.log("Name of the movie is "+ movies[i].name + " And Rating is " + movies[i].rate +" star")
}

for(i=0;i<movies.length;i++){
    console.log(`Name of the movie is ${movies[i].name} And Rating is ${movies[i].rate} star`)
}

for(i=0;i<10;i++){
  console.log("first",i)
  console.log(i)
  console.log("second",i)
}

/************While Loop *****/
var i =0;
console.log("outside",i)
while(i<10){
  console.log("first",i)
  i++
  console.log("second",i)
}


/***********Do While************/
var i = 0
console.log("outside",i)
do{
  console.log("first",i)
  i++
  console.log("second",i)
}
while(i<10)



var language =["NodeJS", "AngularJs","ReactJS"]
for(i=0;i<language.length;i++){
  console.log(language[i])
}

var i =0;
while(i<language.length){
  console.log(language[i])
  i++
}

var i = 0
do{
  console.log(language[i])
  i++
}
while(i<language.length)


var citys = ["NodeJS", "AngularJs","ReactJS"]
for(city of citys){
  console.log(city)
}