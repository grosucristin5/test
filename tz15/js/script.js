var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close =  document.querySelector(".close");
var name = window.prompt("ваше имя:");
var ageCheck = window.prompt("ваш возраст:");


console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);


function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
	popup.style.display = "none"
	}
function delItem(){
  myList.removeChild(story[0]);

  if(story.length == 0){
  	 popup.style.display = "block";
  }
}	

function closePopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem)
btn2.addEventListener("click", delItem)
close.addEventListener("click", closePopup)



if (ageCheck < 18){

	 window.alert("вы сообщили, что вы :" + ageCheck + ":возраст, " + name + ".");
	 window.alert("вам должно быть не менее восемнадцати лет, чтобы посетить этот сайт");
}

	 else if (ageCheck > 18 && ageCheck < 101 ){

	  window.alert("вы достаточно взрослыи, чтобы посетить сайт!");
	  window.alert("добро пожаловать " + name + "!");
	  
	}
	else {
		 window.alert("вы должны быть честны о своем возрасте, " + name + "." );
		 
	}
