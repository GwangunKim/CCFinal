let x,y;
let sx=2
let sy=2
let xvalue1=20;
let xvalue2=-5
let xvalue3=-15
let xvalue4=25
let xvalue5=32.5
let xvalue6=37.5
let xvalue7=-22.5
let yvalue7=-2.5
let pmx =-100
let birdcolor="white"
let birdchameleon = "green"
let r,g,b=0

function setup() {
  createCanvas(500, 500);
  x = random(-width/2,width/2);
  y = random(-height/2,height/2);
  
 
  
}

function draw() {
 
  push();
  birdFlapping()
  pop();
  
  //If You press the touchpad, predator will come out&
  //the creature will change its color according to its surroundings to hide
  if(mouseIsPressed){
    r=107
    g=173
    b=218
    Predator(pmx,70)
    pmx=pmx+2
    if(pmx>width+100){
      pmx=0
    }
    if(pmx+100>0&&pmx-100<width){
    birdcolor = birdchameleon
    }
    
  //default color 
  }else{
    birdcolor= 'white'
    r=0 //the text disappears when the mouse is pressed
    g=0
    b=0
    
  }
  
 
   
}

function birdFlapping() {
  
  //Background Setting

      push();
      noStroke()
      //sky
      fill(107,173,218)
      rect(0,0,width,350)
      //ground
      fill(218,183,63)
      rect(0,350,width,150)
      beginShape();
      fill(218,183,63)
      vertex(22,395)
      vertex(32,305)
      vertex(42,395)
      vertex(52,295)
      vertex(62,395)
      vertex(120,395)
      vertex(125,291)
      vertex(140,395)
      vertex(142,310)
      vertex(149,395)
      vertex(157,288)
      vertex(167,395)
      triangle(190,395,200,319,210,395)
      triangle(200,395,210,319,220,395)
      triangle(210,395,220,319,230,395)
      endShape();
      //tree
      beginShape();
      fill(87,58,15)
      vertex(465,350);
      vertex(441,181);
      vertex(360,184);
      vertex(335,350);
      endShape();
      quad(345,305,300,255,312,246,346,278)
      //bush
      fill(144,195,59)
      circle(400,110,250)
      circle(300,170,170)
      circle(470,190,130)
      fill(100,196,75)
      circle(307,156,100)
      circle(348,77,110)
      circle(376,188,150)
      circle(455,56,130)
      fill(131,187,108)
      circle(292,111,100)
      circle(446,152,130)
      fill(125,180,75)
      circle(285,211,70)
      circle(349,126,80)
      circle(373,46,110)
      circle(455,176,50)
      pop();
      
      //title of this project
      fill(r,g,b)
      textFont("Georgia")
      textSize(70)
      text("Life",40,105)
      textSize(50)
      text("of",70,185)
      textSize(40)
      text("Birdmeleon",40,265)
  
  //White Bird's Flapping
  noFill();
  translate(width/2,height/2)
  push();
  noStroke();
  fill(birdcolor);
  //flapping
  rectA = map(sin(frameCount*0.15), -1, 1, -35,35)
  rectS = map(sin(frameCount*0.15), -1, 1, -20,20)
  //bird shape
  quad(x, y, x+xvalue1, y, x+xvalue2,y+rectA, x+xvalue3, y+rectS)
  ellipse(x,y,45,20);
  circle(x+xvalue4,y-10,15)
  triangle(x+xvalue5,y-12.5,x+xvalue5,y-7.5,x+xvalue6,y-10)
  pop();
  
  
  
  
  //change position of the bird(direction)
  x=x+sx;
  if(x>width/2-xvalue4||x<-width/2-xvalue4){
    sx=-sx
    xvalue1 = -xvalue1
    xvalue2 = -xvalue2
    xvalue3 = -xvalue3
    xvalue4 = -xvalue4
    xvalue5 = -xvalue5
    xvalue6 = -xvalue6
    xvalue7 = -xvalue7
    
  }
  y=y+sy
  if(y>height/2||y<-height/2){
    sy=-sy
  }
  
  
  
  
  
  
  //change its color according to its environment
  if(x>-250&&x<250&&y>100&&y<250){
    birdchameleon = 'yellow'
  }
  else if(x>-250&&x<35&&y>-250&&y<100){
    birdchameleon = 'skyblue'
  }
  else if(x>35&&x<250&&y>-250&&y<5){
    birdchameleon = 'green'
  }
  else{
    birdchameleon = 'brown'
  }
  

    
  
}

function Predator(predatorX,predatorY) {
  //predator
  noStroke();
  fill(0);
  translate(predatorX,predatorY)
  quad(0,70,0,-70,40,-25,40,25)
  rect(-100,-7,170,15)
  arc(80, 0, 60, 60, QUARTER_PI , TWO_PI)
  
  

  
  
  
}
