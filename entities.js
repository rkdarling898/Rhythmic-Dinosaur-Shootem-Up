class Player {
    constructor (x=0, y=0, gun) {
        this.x = x
        this.y = y
        this.center = {x: this.x + this.width/2, y: this.y + this.height/2}
        this.width = 40
        this.height = 40
        this.direction = 'down'
        this.gun = gun
    }

    draw (canvas) {
        const canvasEl = canvas
        const ctx = canvasEl.getContext('2d')

        ctx.fillStyle = 'purple'
        ctx.fillRect(this.x, this.y, 40, 40)

        this.shotCourse()
    }

    shoot (x, y, direction) {
        if (this.triggerPressed) {
            this.gun.shoot(x, y, direction)
        }
    }

    shotCourse () {
        switch (this.direction) {
            case 'up':
                this.shoot(this.x + this.width/2, this.y, this.direction)
                break;
            case 'left':
                this.shoot(this.x, this.y + this.height/2, this.direction)
                break;
            case 'down':
                this.shoot(this.x + this.width/2, this.y + this.height, this.direction)
                break;
            case 'right':
                this.shoot(this.x + this.width, this.y + this.height/2, this.direction)
                break;
        }
    }

    keydown (e) {
        switch (e.code) {
            case 'KeyW':
                this.direction = 'up'
                console.log(this.direction)
                break;
            case 'KeyA':
                this.direction = 'left'
                console.log(this.direction)
                break;
            case 'KeyS':
                this.direction = 'down'
                console.log(this.direction)
                break;
            case 'KeyD':
                this.direction = 'right'
                console.log(this.direction)
                break;
            case 'Space':
                this.triggerPressed = true
        }
    }
    
    keyup (e) {
        switch (e.code) {
            case 'Space':
                this.triggerPressed = false
                this.gun.resetDelay()
        }
    }

}

export { Player }