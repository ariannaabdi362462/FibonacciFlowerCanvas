
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d'); // 2D drawing using canvas api 


//background colour changer
let colours = ['white', 'green','blue','red','purple','orange','black','pink'] //colour array

let buttonBackground = document.getElementById('buttonBackground') //declared in html

buttonBackground.addEventListener('click',function(){ //event listener 
var changeColour = colours[Math.floor(Math.random()* colours.length)] //change colours in random order 
let canvas =document.getElementById('canvas1')

canvas.style.background = changeColour  //change background

}) //https://www.youtube.com/watch?v=jznWWxPZkvQ


canvas.width = window.innerWidth
canvas.height = window.innerHeight //resize window
ctx. globalCompositeOperation = 'destination-over'
hue = Math.random() * 360 //create rainbow  

let number = 0 //set varible 
let scale = 10

function drawFlower(){

    
    let angle = number * 3.8  // equal to let  number
    let radius = scale * Math.sqrt(number) //square route 
    let positionX = radius * Math.sin(angle) + canvas.width/2   //set postion of flower x axis
    let positionY = radius * Math.cos(angle) + canvas.height/2 //set postion of flower Y axis

    

ctx.fillStyle ='hsl('+ hue + ', 100%, 50%)' //hue saturation light , fill in circle 
ctx.strokeStyle=  'black' //outline 
ctx.lineWidth = 4    
ctx.beginPath()
ctx.arc(positionX, positionY, 8, 0, Math.PI * 2) //full circle
ctx.closePath()  //begin path to draw 
ctx.fill()
ctx.stroke() 

number++
hue +=0.5

}

function animate(){
    //draw frame
   
//ctx.clearRect(0,0, canvas.width, canvas.height) - if this is present it will only show the pattern which is made once and not the sequence
drawFlower()
if(number > 850)return //size of frame 
requestAnimationFrame(animate)
}

animate()  // animate flower 

const setUpCanvas = () => {
    // Feed the size back to the canvas.
    c.width = c.clientWidth;
    c.height = c.clientHeight;
}

//*Fibonacci flower code = https://www.youtube.com/watch?v=ymmtEgp0Tuc   



//audio
var x = document.getElementById("MySound") //id = MySound

function playAudio(){
    x.play()  //play button
}
function pauseAudio(){
    x.pause() //stop button 
}


