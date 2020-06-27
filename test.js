function yummy(food){

  var eat = "";
  for (var i=0; i<=food; i++){
    eat = eat + "delicious!";
  }
  return eat;
  }

var food = 4;

var git = yummy(food);

console.log(git);




function changeColor(newColor){
var elem = document.getElementById("dynamic");

elem.style.color = newColor;
elem.style.width = "10em";
}

var tryOut = document.getElementByClassName("Gfonts");

tryOut.style.color = "red";
