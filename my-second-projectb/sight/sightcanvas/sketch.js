let birds=[];
let meteors = [];
let mn=5; //number of meteors
let star = [];
let n = 80; //number of stars
let boo = false;
let img;

function preload() {
  img = loadImage('forest2.png');
}
function setup() {
  let cnv = createCanvas(1200,640);
  cnv.parent("canvasContainer");
  //sunset setup
  for (let i = 0; i < 3; i++) {
    birds[i] = new Bird();
  }
  //night setup
  for (let i = 0; i < n; i++) {
    star[i] = new Stars();
  }
  for(i=0; i<mn; i++){
    meteors[i] = new Meteor();
  }
 
 
}

function draw() {
  if(boo){//if you click the mouse, the night view will appear
    //gradient background
    let black = color(0);
    let navy = color(27,49,160);
    let purple = color(46,27,98);
    for (let i = 0; i < height; i++) {
      let mergeColor = lerpColor(black, navy, i / height);
      mergeColor = lerpColor(mergeColor, purple, i / height);
      stroke(mergeColor);
      line(0, i, width, i);
    }
    //twinkle stars
    for (let i = 0; i < n; i++){
      star[i].display();
      star[i].update();
    }
    //movement of meteors
    for (let i = 0; i < meteors.length; i++) {
      meteors[i].display();
      meteors[i].update();
      meteors[i].isitgone();
    }
    //add&remove meteors according to boundary
    for (let i = meteors.length - 1; i >= 0; i--) {
      if (meteors[i].isGone) {
        meteors.splice(i, 1);
      }
    }
    if (meteors.length < 1) {
      meteors.push(new Meteor());
  }
    
    
  }else{//default: sunset
    //gradient background
    let  yellow= color(224,153,78); //black
    let orange= color(238,135,61); //navy
    let darkred = color(185,67,41); //purple
    for (let i = 0; i < height; i++) {
      let mergeColor = lerpColor(yellow, orange, i / height);
      mergeColor = lerpColor(mergeColor, darkred, i / height);
      stroke(mergeColor);
      line(0, i, width, i);
    }
    //movement of birds
    for (let i = 0; i < birds.length; i++){
    birds[i].display();
    birds[i].update();
    birds[i].isitgone();
    //add&remove birds accroding to size of scale
    }
    for (let i = birds.length - 1; i >= 0; i--) {
        if (birds[i].isGone) {
           birds.splice(i, 1);
        }
    }
      if (birds.length < 3) {
        birds.push(new Bird());
      }
    }
  image(img, 0,0)
  
}

function mousePressed() {//change day&night
  boo = !boo
  
}

class Stars{
  constructor(x,y){
    this.x= random(width)
    this.y= random(2*height/3)
    this.s= random(1,3)
    this.t= random(TAU)
    this.size = 0
  }
  display(){
    fill(255)
    circle(this.x,this.y,this.size)
  }
  update(){
    this.t+=0.1
    this.size = this.s + sin(this.t)*2
    }
}

class Meteor{
  constructor(){
    this.x= random(width)
    this.y= random(2*height/3)
    this.s=2.5
    this.speed = random(3,8)
    this.isGone = false;
  }
  display(){
    noStroke()
    fill("white")
    circle(this.x,this.y,this.s);
    triangle(this.x,this.y+15/12,this.x-100/12,this.y-50/12,this.x,this.y-15/12)
  }
  update(){
    this.x = this.x + this.speed
    this.y = this.y + this.speed
  }
  isitgone(){
    if(this.y>2*height/3|| this.x>width){
      this.isGone = true;
    }
  }
 
}

class Bird{
  constructor(){
  this.x = random(width);
  this.y = random(height/2,height)
  this.xd = random(-1,1)
  this.flap =0 
  this.flap2 = 14
  this.scalesize = 1.1
  this.isGone = false;
  }
  display(){
    push()
    translate(this.x,this.y)
    stroke("black")
    fill("black")
    strokeWeight(3.5)
    scale(this.scalesize)
    //big bird
    circle(0,0,3)
    line(0,0,10,-2.5)
    line(0,0,-10,-2.5)
    line(10,-2.5,20,this.flap)
    line(-10,-2.5,-20,this.flap)
    //small bird
    strokeWeight(2.5)
    circle(30,15,1.5)
    line(30,15,35,14)
    line(30,15,25,14)
    line(35,14,40,this.flap2)
    line(25,14,20,this.flap2)
    pop()
  }
  update(){
    this.flap = map(sin(frameCount*0.15),-1,1,-10,5)
    this.flap2 = map(sin(frameCount*0.15),-1,1,10,18)
    this.x+=this.xd
    this.y-=0.5
    this.scalesize -= 0.002
  }
  isitgone(){
    if(this.scalesize<0){
      this.isGone = true;
    }
  }
}