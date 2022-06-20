
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); //canvas api 

//background colour changer
let colours = ['white', 'green','blue','red','purple','orange','black','pink'] //colour array

let buttonBackground = document.getElementById('buttonBackground')

buttonBackground.addEventListener('click',function(){
var changeColour = colours[Math.floor(Math.random()* colours.length)]
let canvas =document.getElementById('canvas1')

canvas.style.background = changeColour

}) 


canvas.width = window.innerWidth
canvas.height = window.innerHeight   //resize window
ctx. globalCompositeOperation = 'destination-over'
hue = 0

let number = 0
let scale = 10

window.addEventListener('keydown',this.doKeyDown,false); 

function doKeyDown(e) {
   // W Key to draw flower
    if ( e.keyCode == 87 ) {

function drawFlower(){

    let angle = number * 6
    let radius = scale * Math.sqrt(number)
    let positionX = radius * Math.sin(angle) + canvas.width/2
    let positionY = radius * Math.cos(angle) + canvas.height/2

ctx.fillStyle ='hsl(700, 100%, 50%)'
ctx.strokeStyle=  'red'
ctx.lineWidth = 6
ctx.beginPath()
ctx.arc(positionX, positionY, 8, 0, Math.PI * 2) //full circle
ctx.closePath()
ctx.fill()
ctx.stroke()

number++
hue +=0.5
}
    }
    //C key for colour changes 
if(e.keyCode==67){
//draw flower again
let angle = number * 6
let radius = scale * Math.sqrt(number)
let positionX = radius * Math.sin(angle) + canvas.width/2
let positionY = radius * Math.cos(angle) + canvas.height/2

ctx.fillStyle ='#4573de'
ctx.strokeStyle=  '#ab45de'
ctx.lineWidth = 6
ctx.beginPath()
ctx.arc(positionX, positionY, 8, 0, Math.PI * 2) //full circle
ctx.closePath()
ctx.fill()
ctx.stroke()

number++
hue +=0.5
}

function animate(){
    //draw frame
   
//ctx.clearRect(0,0, canvas.width, canvas.height)
drawFlower()
if(number > 950)return
requestAnimationFrame(animate)
}

animate()
}


      


var x = document.getElementById("MySound") //id = MySound

function playAudio(){
    x.play()  //play button
}
function pauseAudio(){
    x.pause() //stop button 
}