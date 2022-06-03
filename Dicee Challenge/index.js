// var random1 = Math.floor(Math.random() * 6) + 1;
// var random2 = Math.floor(Math.random() * 6) + 1;
// if(random1 == 1){
//     document.getElementById("myImageId").src="dice1.png";
// }
// if(random2 == 1){
//     document.getElementById("myImageId1").src="dice1.png";
// }
// if(random1 == 2){
//     document.getElementById("myImageId").src="dice2.png";
// }
// if(random2 == 2){
//     document.getElementById("myImageId1").src="dice2.png";
// }
// if(random1 == 3){
//     document.getElementById("myImageId").src="dice3.png";
// }
// if(random2 == 3){
//     document.getElementById("myImageId1").src="dice3.png";
// }
// if(random1 == 4){
//     document.getElementById("myImageId").src="dice4.png";
// }
// if(random2 == 4){
//     document.getElementById("myImageId1").src="dice4.png";
// }
// if(random1 == 5){
//     document.getElementById("myImageId").src="dice5.png";
// }
// if(random2 == 5){
//     document.getElementById("myImageId1").src="dice5.png";
// }
// if(random1 == 6){
//     document.getElementById("myImageId").src="dice6.png";
// }
// if(random2 == 6){
//     document.getElementById("myImageId1").src="dice6.png";
// }
// if(random1 == random2){
//     document.querySelector("h1").textContent = "DRAW";
// }
// else if(random1 > random2){
//     document.querySelector("h1").innerHTML = "🚩Player 1 win";
// }
// else{
//     document.querySelector("h1").innerHTML = "Player 2 win🚩";
// }

// --------------------------------------------------------------------------------------------------------------------

// Another Solution 

// ----------------------------------------------------------------------------------------------------------------

// var random1 = Math.floor(Math.random()*6)+1;
// var random2 = Math.floor(Math.random()*6)+1;

// var randomOneImage = "images/dice"+random1+".png";
// document.querySelectorAll("img")[0].setAttribute("src", randomOneImage);

// var randomTwoImage = "images/dice"+random2+".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomTwoImage);

// if(random1 == random2){
//         document.querySelector("h1").innerHTML = "DRAW";
//     }
//     else if(random1 > random2){
//         document.querySelector("h1").innerHTML = "🚩Player 1 win";
//     }
//     else{
//         document.querySelector("h1").innerHTML = "Player 2 win🚩";
//     }

var random1 = (Math.floor(Math.random()*6))+1;
var random2 = (Math.floor(Math.random()*6))+1;

var randomImage = "images/dice"+random1+".png";
document.getElementById("myImageId").setAttribute("src", randomImage);

var randomTwoImage = "images/dice"+random2+".png";
document.getElementById("myImageId1").setAttribute("src", randomTwoImage);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}
else if(random1 < random2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}