let libs = ['https://unpkg.com/p5.tween/dist/p5.tween.min.js']
let tween
let max1
let max2
let tree
let avocado
let det
let water
let bubble
let emoji
let music
let idea
let earth
let salad
let juice
let milk
let activeimg
let imgs = []
let letters = []
let activeLetters = 0
let startX = 350
let startY = 170
let ar 

const myShape = {
	x: startX,
	y: startY,
	w: 200,
	h: 200
}


function preload() {
	max1 = loadImage('data/image/max0.png')
	max2 = loadImage('data/image/max3.png')
	tree = loadImage('data/image/tree2.png')
	avocado = loadImage('data/image/avocado3.png')
	det = loadImage('data/image/det1.png')
	water = loadImage('data/image/ice1.png')
	bubble = loadImage('data/image/bubble4.png')
	emoji = loadImage('data/image/emoji2.png')
	music = loadImage('data/image/music2.png')
	idea = loadImage('data/image/idea4.png')
	earth = loadImage('data/image/earth3.png')
	salad = loadImage('data/image/salad1.png')
	juice = loadImage('data/image/juice3.png')
	milk = loadImage('data/image/milk3.png')
	imgs.push(max1)
	imgs.push(max2)
	imgs.push(tree)
	imgs.push(avocado)
	imgs.push(det)
	imgs.push(water)
	imgs.push(bubble)
	imgs.push(emoji)
	imgs.push(music)
	imgs.push(idea)
	imgs.push(earth)
	imgs.push(salad)
	imgs.push(juice)
	imgs.push(milk)
}

function setup() {
	
	ar = createGraphics(895, 1280, P2D, document.getElementById('canvas'))
	// background(0, 0, 0)
	// background(0, 0, 0)
	createCanvas(895, 1280)
	tween = p5.tween.manager.addTween(myShape)
	motionA()
	activeimg = random(imgs)
	letters.push(motionA)
	letters.push(motionI)
	letters.push(motionR)
	tween.startTween()
}

function draw() {
	clear()
	ar.reset()
	// ar.scale(.8)
	if(!tween.active) {
		tween.resetMotions()
		myShape.x = startX
		myShape.y = startY
		activeLetters++
		ar.clear()
		letters[activeLetters % 3]()
		tween.startTween()
	}
	// background(0)

	noCursor()
	ar.push()
	// translate(-width/2, -height*.3)

	let loopCount = 15
	for(let d = 0; d < loopCount; d++) {
		let scl = .14 //frameCount*.001%3
		ar.image(activeimg, myShape.x + d * 5, myShape.y + sin(d * .4 + frameCount * .35) * 30, myShape.w, myShape.h)
	}
	ar.pop()
	image(ar,0,0)
}


function motionA() {
	activeimg = random(imgs)

	tween.addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 350 },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 580 },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 580},
      ], 1000)
    .addMotions([
        { key: 'x', target: 200 },
        { key: 'y', target: 'y'},
      ], 1000)
    .addMotions([
        { key: 'x', target: 350 },
        { key: 'y', target: 170},
      ], 1000)

}

function motionI() {
	activeimg = random(imgs)

	tween.addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170 },
      ], 1000)
  
}

function motionR() {
	activeimg = random(imgs)

	tween.addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 'y' },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 'y'},
      ], 1000)
    .addMotions([
        { key: 'x', target: 550 },
        { key: 'y', target: 300},
      ], 1000)
    .addMotions([
        { key: 'x', target: 500 },
        { key: 'y', target: 480},
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 'y'},
      ], 1000)
    .addMotions([
        { key: 'x', target: 580 },
        { key: 'y', target: 850 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 100 },
        { key: 'y', target: 480 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 'x' },
        { key: 'y', target: 170 },
      ], 1000)
    .addMotions([
        { key: 'x', target: 350 },
        { key: 'y', target: 170 },
      ], 1000)

}
