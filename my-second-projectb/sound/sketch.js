let circles = [];
let waves = [];
let sounds = [];
let index = -1;
function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < circles.length; i++) {
    circles[i] = new Circle();
  }
  
  
}

function preload(){
  sounds.push(loadSound("Red_Fire.mp3"));
  sounds.push(loadSound("Green_Bird.mp3"));
  sounds.push(loadSound("Blue_Water.mp3"));
  sounds.push(loadSound("Yellow_Night.mp3"));
  sounds.push(loadSound("White_Snow.mp3"));
}

function draw() {
  background(0,50);
  for (let i = 0; i < circles.length; i++){
  circles[i].display();
  circles[i].update();
  }
}

function mousePressed(){
  //just one sound per one click
  index = int(random(sounds.length));
  for(let i=0; i<sounds.length; i++){
    sounds[i].stop();
  }
  sounds[index].play();

  
  //just one circle per one click
  circles.push(new Circle(mouseX,mouseY));
  if(circles.length>1){
    for (let i = circles.length - 1; i >= 0; i--) {
      circles.splice(i, 1);
      circles.push(new Circle(mouseX,mouseY));
  }
  }
  

  
  
}

class Circle{
  constructor(x,y){
    this.x=x
    this.y=y
    this.s=0
    this.circleColor = "white"
   
  }
  display(){
    noFill()
    stroke(this.circleColor)
    circle(this.x,this.y,this.s)
  }
  update(){
    this.s = map(sin(frameCount*0.03),-1,1,0,200)
    if(index == 0){
      this.circleColor = "red"
    }else if(index == 1){
      this.circleColor = "green"
    }else if(index == 2){
      this.circleColor = "blue"
    }else if(index == 3){
      this.circleColor = "yellow"
    }
  }
}


