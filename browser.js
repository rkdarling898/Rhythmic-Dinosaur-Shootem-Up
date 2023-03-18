//Canvas variables and imports
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d')

import { Player, Bullet } from "./main.js";

const bulletArr = []
let bulletCount = 0

//Window Adjustments
canvas.width = 95 * (window.innerWidth / 100)
canvas.height = 98 * (window.innerHeight / 100)

const center = {x: canvas.width / 2, y: canvas.height / 2}

window.addEventListener('resize', () => {
    canvas.width = 95 * (window.innerWidth / 100)
    canvas.height = 98 * (window.innerHeight / 100)
    center.x = canvas.width / 2
    center.y = canvas.height / 2
})

//Rendering game loop
const player = new Player(center.x - 20, center.y - 20, canvas, ctx)

const bkgImg = new Image
bkgImg.src = './images/main-background.png'

const gameLoop = () => {
    ctx.drawImage(bkgImg, 0.025 * canvas.width, 0.025 * canvas.height, 0.95 * canvas.width, 0.95 * canvas.height)

    player.draw(canvas)

    if (bulletArr.length > 0) {
        for (let i = 0;i < bulletArr.length;i++) {
            console.log(bulletArr[i])
            bulletArr[i].refresh(bulletArr, canvas)
            if (bulletArr.length > 0) bulletArr[i].draw(canvas)
        }
    }

    requestAnimationFrame(gameLoop)
}

//Movement
window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyW':
            player.direction = 'up'
            break;
        case 'KeyA':
            player.direction = 'left'
            break;
        case 'KeyS':
            player.direction = 'down'
            break;
        case 'KeyD':
            player.direction = 'right'
            break;
        case 'Space':
            let x = new Bullet(player.x, player.y, player.direction)
            bulletCount += 1
            x.id = bulletCount
            bulletArr.unshift(x)
    }
})

gameLoop()