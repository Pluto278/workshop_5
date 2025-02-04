let data = []
let click = -1;

function preload() {
  img2 = loadImage('2.png');
  img1 = loadImage('1.png');
  img0 = loadImage('0.png');
  data = loadTable('mood.csv','csv','');
}

function setup() {
  createCanvas(600, 600);
  image(img1,0,0,100,100);
}

function draw() {
  background(2);

  if (click == -1) {
    textSize(20);
    fill(255);
    textAlign(CENTER);
    text("Click to Reveal Mood Data", width / 2, height / 2);
  } else {
    drawmood();
  }
}

function drawmood() {
  for(let i = 0; i <= click; i++) {
    let day_mood = data.getRow(i);
    for(let j = 0; j < 24; j++) {
      mood = day_mood.get(j);
      console.log(mood);
      if(mood==2) {
        image(img2,100*i,25*j,25,25);
      }
      else if(mood==1) {
        image(img1,100*i,25*j,25,25);
      }
      else {
        image(img0,100*i,25*j,25,25);
      }
    }
  }
}

function mousePressed() {
  if (click < 6) {
    click++;
  }
  else {
    click = -1;
  }
}