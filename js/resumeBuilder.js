/*
This is empty on purpose! Your code to build the resume will go here.


var awesomeThoughts = "I am Miri and I am awesome!" 
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("awesome","fun");
/*$("#main").append(funThoughts);
*/
var formattedName = HTMLheaderName.replace("%data%","Miri");
var formattedRole = HTMLheaderRole.replace("%data%","question");

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
skills =[1,2,3];
var bio= {
	"name":"Miri",
	"role":"Mascot",
	"contact": "telephone",
	"pic":"<img src='images/fry.jpg'>" ,
	"welcome":"hi!",
	"skills":skills

};
/*var img = document.createElement("img");
img.src = "http://www.google.com/intl/en_com/images/logo_plain.png";

var src = document.getElementById("header");

src.appendChild(img);

*/
$("#main").append(bio.pic)