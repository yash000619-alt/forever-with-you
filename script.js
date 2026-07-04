/* ==========================
   Romantic Proposal Website
   Part 3.1
========================== */

// Elements

const typing = document.getElementById("typing");

const intro = document.getElementById("intro");

const proposal = document.getElementById("proposal");

const success = document.getElementById("success");

const startBtn = document.getElementById("startBtn");

const hearts = document.getElementById("hearts");

const petals = document.getElementById("petals");

const stars = document.getElementById("stars");

const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

// Typewriter Text

const message =

"Someone very special deserves something beautiful... ❤️";

let index = 0;

function typeWriter(){

if(index < message.length){

typing.innerHTML += message.charAt(index);

index++;

setTimeout(typeWriter,60);

}

}

typeWriter();

// Start Button

startBtn.onclick = function(){

intro.classList.add("hide");

proposal.classList.remove("hide");

};

// Floating Hearts

function createHeart(){

const heart = document.createElement("div");

heart.className = "heart";

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100 + "%";

heart.style.fontSize =

Math.random()*25 + 15 + "px";

heart.style.animationDuration =

Math.random()*5 + 5 + "s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,300);

// Rose Petals

function createPetal(){

const petal = document.createElement("div");

petal.className = "petal";

petal.innerHTML = "🌹";

petal.style.left = Math.random()*100 + "%";

petal.style.fontSize =

Math.random()*18 + 18 + "px";

petal.style.animationDuration =

Math.random()*5 + 6 + "s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,700);

// Stars

for(let i=0;i<120;i++){

const star = document.createElement("div");

star.className = "star";

star.style.left = Math.random()*100+"%";

star.style.top = Math.random()*100+"%";

const size = Math.random()*3+1;

star.style.width = size+"px";

star.style.height = size+"px";

star.style.animationDelay =

Math.random()*3+"s";

stars.appendChild(star);

}
/* ==========================
   Romantic Proposal Website
   Part 3.2
========================== */

// Funny messages for NO button

const funnyMessages = [

"🥺 Are you sure?",

"❤️ Think once again...",

"😅 You almost clicked No!",

"😭 My heart can't take this!",

"😂 Nice try!",

"💖 Give YES a chance!",

"🥹 Don't break my heart!",

"🌹 Love deserves a YES!"

];

let noCount = 0;

// Move NO button

function moveNoButton(){

const box = document.querySelector(".glass");

const rect = box.getBoundingClientRect();

const btnWidth = noBtn.offsetWidth;

const btnHeight = noBtn.offsetHeight;

const x = Math.random() * (rect.width - btnWidth - 40);

const y = Math.random() * (rect.height - btnHeight - 40);

noBtn.style.position = "absolute";

noBtn.style.left = x + "px";

noBtn.style.top = y + "px";

if(noCount < funnyMessages.length){

noBtn.innerHTML = funnyMessages[noCount];

}

noCount++;

if(noCount > funnyMessages.length){

noBtn.innerHTML = "😜 Catch Me";

}

}

// Desktop

noBtn.addEventListener("mouseover",moveNoButton);

// Mobile

noBtn.addEventListener("touchstart",function(e){

e.preventDefault();

moveNoButton();

});

// YES button

yesBtn.addEventListener("click",function(){

proposal.classList.add("hide");

success.classList.remove("hide");

// Small zoom animation

success.animate([

{

transform:"scale(.8)",

opacity:0

},

{

transform:"scale(1)",

opacity:1

}

],{

duration:900,

fill:"forwards"

});

});

// Floating hearts after YES

function heartBurst(){

for(let i=0;i<25;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(3+Math.random()*3)+"s";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

}

yesBtn.addEventListener("click",heartBurst);
/* ==========================
   Romantic Proposal Website
   Part 3.3
========================== */

// ❤️ Confetti Effect

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

let confetti=[];

function Confetti(){

this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height-canvas.height;

this.r=Math.random()*6+4;

this.speed=Math.random()*3+2;

this.color=

["#ff4d6d","#ffb703","#ffffff","#7b2cbf","#00f5d4"][Math.floor(Math.random()*5)];

this.draw=function(){

ctx.beginPath();

ctx.arc(this.x,this.y,this.r,0,Math.PI*2);

ctx.fillStyle=this.color;

ctx.fill();

};

this.update=function(){

this.y+=this.speed;

if(this.y>canvas.height){

this.y=-20;

this.x=Math.random()*canvas.width;

}

this.draw();

};

}

function startConfetti(){

confetti=[];

for(let i=0;i<180;i++){

confetti.push(new Confetti());

}

animateConfetti();

}

function animateConfetti(){

ctx.clearRect(0,0,canvas.width,canvas.height);

confetti.forEach(c=>c.update());

requestAnimationFrame(animateConfetti);

}

// YES button celebration

yesBtn.addEventListener("click",()=>{

startConfetti();

document.body.style.background=

"linear-gradient(180deg,#1a0033,#5a189a,#ff4d8d)";

});

// Sparkle Effect

function sparkle(){

const s=document.createElement("div");

s.innerHTML="✨";

s.style.position="fixed";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

s.style.fontSize=(20+Math.random()*20)+"px";

s.style.pointerEvents="none";

s.style.zIndex="999";

document.body.appendChild(s);

s.animate([

{

opacity:1,

transform:"scale(0)"

},

{

opacity:0,

transform:"scale(2)"

}

],{

duration:1800

});

setTimeout(()=>{

s.remove();

},1800);

}

setInterval(sparkle,400);

// Success Text Animation

const successTitle=document.querySelector(".successBox h1");

if(successTitle){

setInterval(()=>{

successTitle.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:1500

});

},1800);

}

// Ending Console Message 😄

console.log(

"❤️ Made with Love for Sneha ❤️"

);
