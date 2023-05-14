var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
let img1=document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice"+randomNumber1+".png");
let img2=document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2){
let txt=document.querySelector(".container h1").innerHTML="🚩Player1 wins!";
}
else if(randomNumber1<randomNumber2){
let txt=document.querySelector(".container h1").innerHTML="Player2 wins!🚩";
}
else{
let txt=document.querySelector(".container h1").innerHTML="Draw";
}