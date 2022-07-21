//for left dice

var newrandom1 = Math.random()*6;
newrandom1 = Math.floor(newrandom1)+1;

var randomdiceimage="dice" + newrandom1 + ".png";

var randomimagesource="images/" + randomdiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomimagesource);


//for right dice

var newrandom2= Math.floor(Math.random()*6)+1;

var randomimagesource2="images/dice" + newrandom2 +".png";

document.querySelectorAll("img")[1].setAttribute("src" , randomimagesource2);

if (newrandom1>newrandom2){
document.querySelector("h1").innerHTML="Player 1 wins !";
}

else if(newrandom2 > newrandom1){
document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}