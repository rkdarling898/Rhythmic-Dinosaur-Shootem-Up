//Canvas variables and imports
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d')

import { Player } from "./entities.js";
import { Gun, Bullet } from "./gun.js";

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
const gun = new Gun(canvas)
const player = new Player(center.x - 20, center.y - 20, gun)

const bkgImg = new Image
bkgImg.src = './images/main-background.png'

const drawGame = () => {
    if (player.gun.bullets > 0) player.gun.draw()
    player.draw(canvas, player.x, player.y, player.direction)
}

const gameLoop = () => {
    ctx.fillStyle = 'black'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bkgImg, 0.025 * canvas.width, 0.025 * canvas.height, 0.95 * canvas.width, 0.95 * canvas.height)

    player.gun.draw()
    player.draw(canvas, player.x, player.y, player.direction)

    requestAnimationFrame(gameLoop)
}

//Movement
document.addEventListener('keydown', player.keydown.bind(player))
document.addEventListener('keyup', player.keyup.bind(player))

gameLoop()