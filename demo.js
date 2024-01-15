// document.write("<h1>PROPERTY CONSULTANCY</h1>" );
// document.write("<h3>HEADING FILE </h3>" );

//VARIABLE AND DATA TYPES
// var num=16; 
// var Num=17;
// let corn="abcde";
// const k=13;
// var name = "SAHIL SAWAL";
// var flag=false;
// alert("THIS"+ num); 
// document.write(name);
// name="THE GR8 BADSHA";
// document.write(name);
// console.log(corn);
// console.log(k);

//CREATE AN OBJECT
// let person={
//      name: "sahil sawal ",
//      height: 178 ,
//      hairColor: "black",
//      language:"English"
// }

// let s='the great lord';
// person.name= s;
// console.log(person);
// document.write(person.hairColor);

//ARRAY FUNCTIONS
// var FisrtArray= ['sahil','sawal','priyanka','hello',12,"october",2026];
// console.log(FisrtArray[0]);
// document.write(FisrtArray[4]);
// console.log (FisrtArray.lastIndexOf(12,3));

//FUNCTIONS
// function funName(a){
//     alert("Hi "+" "+ a +", have a wonderful time");
// }
// var name = 'SAHIL SAWAL';
// funName(name);

//CONTROL FLOW
//IF-ELSE
// var a=11;
// if (a>10)
//    document.write("greater than 10");
// else if (a==10)
//    document.write("equal to 10");
// else
//     document.write("less than 10");      

//LOOPS FOR,WHILE, DO-WHILE, FOR IN, FOR OF
// for(let i=0; i<5; i++){
//     document.write(i);
// }
// let i=0;
// while(i<=5){
//     if(i %2 !== 0)
//        document.write(i);
// i++;
// }

// let person={
//     name:"Mohit Sharma",
//     hairColour:"Black",
//     height: 178
// }
// ;
// for(let a in person)
//    document.write(a);
//    console.log(a);
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
