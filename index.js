// let backgroundColor = [230,220,190];
const sounds = Array.from({ length: 6 });

const defaultFillColor = [190, 80, 230]
const defaultStrokeColor = [0, 220, 20]
const lineColor = [0, 0, 0];
const activeLineColor = [0, 0, 0];
const lineWidth = 3;
const activelineWidth = 9;


const ball1 = {
    x: 300,
    y: 300,
    r: 100,
    speed: 1,
    fillColor: [237, 140, 180],
    strokeColor: [194, 89, 93],
    outlineWidth: 6,
    soundLength: 2000,
}

const ball2 = {
    x: 300,
    y: 200,
    r: 80,
    speed: 2,
    fillColor: [194, 129, 60],
    strokeColor: [245, 0, 106],
    outlineWidth: 6,
    soundLength: 400,
}

const ball3 = {
    x: 300,
    y: 100,
    r: 50,
    speed: 3,
    fillColor: [171, 3, 17],
    strokeColor: [224, 121, 130],
    outlineWidth: 6,
    soundLength: 500,
}

const ball4 = {
    x: 300,
    y: 0,
    r: 100,
    speed: 1,
    fillColor: [237, 140, 180],
    strokeColor: [194, 89, 93],
    outlineWidth: 6,
    soundLength: 2000,
}


const leftEdge = {
    x1: 230,
    y1: 0,
    x2: 230,
    y2: 800,
    color: lineColor, 
    width: lineWidth,
}

const rightEdge = {
    x1: 570,
    y1: 0,
    x2: 570,
    y2: 800,
    color: lineColor,
    width: lineWidth,
}

const balls = [ball1, ball2, ball3]
const lines =[leftEdge, rightEdge]




const drawCircle = ({x, y, r, strokeColor, fillColor}) => {
    stroke(strokeColor)
    fill(fillColor)
    ellipse(x, y, r)
}

const activateLine = (line) => {
    line.color = activeLineColor
    line.width = activelineWidth
    setTimeout(() => resetLine(line), 500)
}

const resetLine = (line) => {
    line.color = lineColor
    line.width = lineWidth
}

const updateBall = (ball) => {
    if(ball.x > rightEdge.x1 - ball.r/2){
        ball.speed *= -1
        activateLine(rightEdge)
        ball.rightSound.play()
    } else if(ball.x - ball.r/2 < leftEdge.x1){
        ball.speed *= -1
        activateLine(leftEdge)
        ball.leftSound.play()
    }
    ball.x += ball.speed
}

const drawLine = ({x1, y1, x2, y2, color, width}) => {
    strokeWeight(width)
    stroke(color)
    line(x1, y1, x2, y2)
}

function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    ball1.rightSound = sounds[0];
    ball1.leftSound = sounds[1];
    ball2.rightSound = sounds[2];
    ball2.leftSound = sounds[3];
    ball3.rightSound = sounds[4];
    ball3.leftSound = sounds[5];

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(800, 800);
    background(50,50,100);
}

function draw(){
    background(50,50,100);

    lines.forEach(line => {
        drawLine(line)
    })

    balls.forEach(ball => {
        updateBall(ball)
        drawCircle(ball)
    })

function mousePressed() {
    fill(Canvas[0, 0, 0]);
      }

}