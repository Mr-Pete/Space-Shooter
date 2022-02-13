// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class Enemy {
    constructor(game, player, width, height, start_x, start_y, move_rate_x, move_rate_y, shoot_time, isStraight, bulletCanvas, bulletWidth, bulletHeight, bulletSpeed, src, srcBullet, srcBulletEffect) {
        //Initialize element.
        this.game = game;
        this.player = player;
        this.imageEnemy = ASSET_MANAGER.getAsset(src); //Messy hardcode, fix later.
        this.x = start_x;
        this.y = start_y;
        this.move_rate_x = move_rate_x;
        this.move_rate_y = move_rate_y;
        this.isStraight = isStraight;
        this.width = width;
        this.height = height;
        this.srcBulletEffect = srcBulletEffect;
        this.w_Center = width / 2;
        this.h_Center = height / 2;
        this.radius = ((width * width) / 4) / (8 * height) + height / 2;
        this.dX = 0;
        this.dY = 0;
        this.xCenter = 0;
        this.yCenter = 0;
        this.bulletCanvas = bulletCanvas;
        this.bulletWidth = bulletWidth;
        this.bulletHeight = bulletHeight;
        this.bulletSpeed = bulletSpeed;
        this.srcBullet = srcBullet;
        this.shoot_time = shoot_time;
        this.updateCenter();
        this.BoundingCircle = new BoundingCircle(this.radius, this.xCenter, this.yCenter);
        this.lastShoot = 0;
        this.health = 100;
        this.damage = 10;
        this.sound1 = new Audio("./resources/Sounds/sfx_laser2.ogg");
        this.sound2 = new Audio("./resources/Sounds/sfx_laser2.ogg");

        //Pick a random direction and start moving.
        this.angle = this.rotateHandle();
        this.calcMovement();
    }

    draw(ctx) {
        var myCanvas = document.createElement('canvas');
        myCanvas.width = this.width;
        myCanvas.height = this.height;
        var myCtx = myCanvas.getContext('2d');
        myCtx.save();
        myCtx.translate(this.w_Center, this.h_Center); //This should go to the center of the object.
        this.angle = this.rotateHandle();
        myCtx.rotate(this.angle);
        myCtx.translate(-this.w_Center, -this.h_Center);
        myCtx.drawImage(this.imageEnemy, 0, 0, this.width, this.height);
        myCtx.restore();

        ctx.drawImage(myCanvas, this.x, this.y);

    }

    update() {
        //Get current location.
        this.updateCenter();
        this.updateDirection();
        this.rotateHandle();
        this.lastShoot += this.game.clockTick;

        if (this.shoot_time < this.lastShoot) {
            this.shoot();
            this.lastShoot = 0;
        }
        if (this.health < 0) {
            this.removeFromWorld = true;
        }
        this.x += this.dX;
        this.y += this.dY;
    }

    /*
    Update the Wanderer's center.

    For the bounding circle.
    */
    updateCenter() {
        this.xCenter = this.x + this.w_Center;
        this.yCenter = this.y + this.h_Center;
        this.BoundingCircle = new BoundingCircle(this.radius, this.xCenter, this.yCenter);
    }

    shoot() {
        var target_x = player.x+this.player.width/2;
        var target_y = player.y;
        if (this.isStraight) {
            target_x = this.x + this.w_Center;
            target_y = this.y + this.h_Center + 500; //Range 500 ;
        }
        if (this.game.isSoundPlay) {
            if (this.sound1.paused) {
                this.sound1.play();
            }
            else if (this.sound2.paused) {
                this.sound2.play();
            }
        }
        this.game.addEntity(new Bullet(this.game, "Enemy", this.bulletCanvas, this.bulletWidth, this.bulletHeight, this.bulletSpeed, (this.x + this.w_Center - 15), (this.y + this.h_Center), target_x, target_y, this.srcBullet, this.srcBulletEffect));
    }

    collideLeft() {
        return ((this.xCenter - this.radius) < 0)
    }

    collideRight() {
        return ((this.xCenter + this.radius) > 500)
    }

    collideUp() {
        return ((this.yCenter - this.radius) < 0)
    }

    collideDown() {
        return ((this.yCenter + this.radius) > 400)
    }

    updateDirection() {
        // collision with left or right walls
        if (this.collideLeft() || this.collideRight()) {
            this.dX *= -1;
        }

        // collision with top or bottom walls
        if (this.collideUp() || this.collideDown()) {
            this.dY *= -1;
        }
        this.rotate();
    }


    /*
    Calculate the vector that will be used to move the Wanderer.
    
    This is much simpler than others.
    */
    calcMovement() {
        this.dX += Math.cos(this.angle) * this.move_rate_x;
        this.dY += Math.cos(this.angle) * this.move_rate_y;
    }

    rotate() {
        this.angle = (Math.atan2(this.dY, this.dX) + (Math.PI / 2));
    }

    rotateHandle() {
        if (this.player == null) {
            return (0); //If mouse isn't defined yet, don't try to rotate.
            //I know this is gross, bear with me.
        }

        var dx = (this.player.x) - (this.x + this.w_Center); //Accounting for difference in center of thing.
        var dy = (this.player.y) - (this.y + this.h_Center);
        var rotationAngle = Math.atan2(dy, dx) + (Math.PI / 2);
        if (this.isStraight) {
            rotationAngle = 0;
        }
        return (rotationAngle);
    }

}