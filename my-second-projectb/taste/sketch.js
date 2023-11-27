let imgArray = ["Chicken.jpeg","Chips.jpeg","Pasta.jpeg","Pizza.jpeg","Salad.jpeg"]
let img;
let rectangles = [];
let cr = 1;
let cols;
let rows;
let size = 40;
let ranimg;
let song1,song2,song3,song4,song5;

function preload() {
  ranimg = int(random(0,5));
  img = loadImage(imgArray[ranimg]);
  song1 = loadSound("friedchicken.mp3");
  song2 = loadSound("chips.wav");
  song3 = loadSound("pasta.mp3");
  song4 = loadSound("pizza.mp3");
  song5 = loadSound("salad.mp3");
  
  
 
}

function setup(){
  let index = int(random(0,5));
  createCanvas(img.width,img.height);
  cols = width/size;
  rows = height/size;
  for (let i=0; i<cols; i++){
    rectangles[i] = [];
    for (let j=0; j<rows; j++){
      rectangles[i][j] = new Particle(i*size, j*size, size, size);
    }
  }

}

function draw(){
  // createCanvas(400,400);
  // push();
  // fill("white")
  // rect(0,0,400,400);
  // pop();
  
  
  image(img,0,0)
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      rectangles[i][j].drawParticle();
      rectangles[i][j].collision(mouseX,mouseY,cr);
    }
  }
 
  fill(255,0,0);
  ellipse(mouseX,mouseY,cr*2, cr*2);

}

function mousePressed(){
  if(ranimg == 0){
    song1.play();
  }else if(ranimg == 1){
    song2.play();
  }else if(ranimg == 2){
    song3.play();
  }else if(ranimg == 3){
    song4.play();
  }else if(ranimg == 4){
    song5.play();
  }
}


class Particle{
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.cc = 255;
  }
  
  drawParticle(){
    fill(0,this.cc);
    noStroke();
    rect(this.x,this.y,this.w,this.h);
    
  }
  
  collision(cx,cy,cr){
    let closeX = cx;
    let closeY =cy;
    if(cx>this.x+this.w){
      closeX = this.x+this.w;
    }else if(cx<this.x){
      closeX = this.x
    }
    
    if(cy>this.y+this.h){
      closeY = this.y+this.h;
    }else if(cy<this.y){
      closeY = this.y
    }
    
    let distX = cx - closeX;
    let distY = cy - closeY;
    let distance = sqrt((distX * distX)+((distY * distY)));
    
    if (distance <= cr){
      this.cc = 0;
    }
    
   
  }
}