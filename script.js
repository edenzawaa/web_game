
//height = 900
//width = 1600

const tileSize = 50;
const row = 10;
const col = 32;
const gameWidth = tileSize * col;
const gameHeight = tileSize * row;
const speed = 3;

const createImage = (src) => {
    const image = new Image();
    image.src = src;
    return image;
}
const test = createImage('./resources/map.png');

const canva = document.querySelector("canvas");
canva.style.overflow = "hidden";
const ctx = canva.getContext("2d");
ctx.imageSmoothingEnabled = false;
canva.width = gameWidth;
canva.height = gameHeight;

const drawGrid = () => {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
                ctx.strokeRect(
                    j * tileSize,
                    i * tileSize,
                    tileSize,
                    tileSize,
                )
                ctx.strokeStyle = "red";
            }
        }
    }

const groundImage = createImage("./resources/map.png");
groundImage.width = tileSize*4;
groundImage.height = tileSize*4

function drawGround() {
  for (let i = 8; i <= row; i=i+4) {
    for (let j = 0; j < col; j=j+2) {
      ctx.drawImage(
        groundImage,
        j * tileSize-tileSize,
        i * tileSize - tileSize,
        4*tileSize,
        3.6*tileSize
      );

    }
  }
    // drawGrid();
};

const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    " ": false
}

window.addEventListener("keydown", (e) => {
    if (keys[e.key] !== undefined) {
        keys[e.key] = true;
    }
});
window.addEventListener("keyup", (e) => {
    if (keys[e.key] !== undefined) {
        keys[e.key] = false;
    }
});


const scale = 2.5;
let y = 0;
const bottom = 320;
class Player {
    constructor(src,frameRate){
        this.position = {
            x: 0,
            y: 0
        };
        this.velocity = {
            x: 0,
            y: 0
        };
        this.friction = 0.8;
        this.gravity = 0.1;
        this.width = 333;
        this.height = 32;
        this.image = createImage(src);
        this.frameRate = frameRate;
        this.currentFrame = 0;
        this.frameTimer = 0;
        this.frameInterval =    1000 / this.frameRate;
        
        
    }
    draw(ctx, deltaTime) {
        const frameWidth = this.width / this.frameRate;
        const frameHeight = this.height;
        const cropBox = {
            position: {
                x: frameWidth * this.currentFrame,
                y: 0
            },
            width: frameWidth,
            height: frameHeight,
        };

        ctx.save();
        if(this.velocity.x < 0){
            ctx.scale(-1, 1); // Flip the context horizontally
            ctx.drawImage(
                this.image,
                cropBox.position.x, 
                cropBox.position.y, 
                cropBox.width, 
                cropBox.height,
                -this.position.x - frameWidth*scale,
                this.position.y,
                cropBox.width * scale,
                cropBox.height * scale
            );
        }else{
        ctx.drawImage(
            this.image,
            cropBox.position.x, 
            cropBox.position.y, 
            cropBox.width, 
            cropBox.height,
            this.position.x,
            this.position.y,
            cropBox.width * scale,
            cropBox.height * scale
            );
        }
    ctx.restore();
    
    this.updateFrames(deltaTime);
    }
    

    
    update() {
        // ctx.fillStyle = "rgba(8, 45, 255, 0.5)";
        // ctx.fillRect(
        //     this.position.x,
        //     this.position.y, 
        //     (this.width / this.frameRate) * scale,
        //     this.height * scale
        // );
        this.position.y += this.velocity.y;
        if (this.position.y < bottom) {
            this.velocity.y += this.gravity;
        } else {
            this.position.y = bottom;
            this.velocity.y = 0;
        }
    
        this.position.x += this.velocity.x;
        this.velocity.x *= this.friction;
    }
    
    updateFrames(deltaTime){
        this.frameTimer += deltaTime;
        if (this.frameTimer >= this.frameInterval) {
            this.currentFrame++;
            this.frameTimer = 0; // reset timer
            if (this.currentFrame >= this.frameRate) {
                this.currentFrame = 0;
            }
        }
    }
}


const player = new Player( "./resources/skip.png",9);

let lastTime = 0;


function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;


    ctx.clearRect(0, 0, canva.width, canva.height);

    drawGround();
    player.draw(ctx, deltaTime);
    window.requestAnimationFrame(animate);



    if (keys["ArrowLeft"]) {
        player.velocity.x = -speed;
    } else if (keys["ArrowRight"]) {
        player.velocity.x = speed;
    } else if (keys[" "]) {
        if (player.velocity.y === 0) {
            player.velocity.y = -6;
        }
    }
    if (keys["ArrowLeft"] && keys[" "]) {
        player.velocity.x = -speed;
        if (player.velocity.y === 0) {
            player.velocity.y = -6;
        }
    }
    if (keys["ArrowRight"] && keys[" "]) {
        player.velocity.x = speed;
        if (player.velocity.y === 0) {
            player.velocity.y = -6;
        }
    }
    
    player.update();
}

animate(0);
timedMessage();

function timedMessage () {

    const append = (content) => {
        const p = document.createElement('p');
        p.innerText = content;
        document.body.appendChild(p);
    };

    setTimeout(()=>{
        append('woahh youve played for 20sec?? you must really appreciate my game thank you so much :((((')
    },20000);

}
