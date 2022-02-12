/*
Hurdless... hurdle.
*/
class Hurdle {
    constructor(game, width, height, x, y, min_x, max_x, min_y, max_y, move_rate_x, move_rate_y, src) {
        //Initialize element.
        this.game = game;
        this.imageHurdle = ASSET_MANAGER.getAsset(src); //Messy hardcode,.
        this.width = width;
        this.height = height;
        this.w_Center = width / 2;
        this.h_Center = height / 2;
        this.tag = "Hurdle";
        this.min_x = min_x;
        this.max_x = max_x;
        this.min_y = min_y;
        this.max_y = max_y;
        this.health = 100;
        this.damage = 10;
        this.move_rate_x = move_rate_x;
        this.move_rate_y = move_rate_y;
        this.radius = ((width * width) / 4) / (8 * height) + height / 2;
        this.x = x;
        this.y = y;
        this.dX = 0;
        this.dY = 0;
        this.xCenter = 0;
        this.yCenter = 0;
        this.updateCenter();
        this.BoundingCircle = new BoundingCircle(this.radius, this.xCenter, this.yCenter);
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
        myCtx.translate(-(this.w_Center), -(this.h_Center));
        myCtx.drawImage(this.imageHurdle, 0, 0, this.width, this.height);
        myCtx.restore();

        ctx.drawImage(myCanvas, this.x, this.y);

    }

    update() {
        //Get current location.
        this.updateCenter();
        this.updateDirection();
        this.rotateHandle();
        this.x += this.dX;
        this.y += this.dY;
        if (this.health < 0) {
            if (this.width > 50 && this.height > 50) {
                this.game.addEntity(new Hurdle(this.game, (this.width / 100) * 40, (this.height / 100) * 40, this.x, this.y, this.min_x, this.max_x, this.min_y, this.max_y, this.move_rate_x, this.move_rate_y, "./resources/PNG/Meteors/meteorBrown_big1.png"));
                this.game.addEntity(new Hurdle(this.game, (this.width / 100) * 50, (this.height / 100) * 50, this.x, this.y, this.min_x, this.max_x, this.min_y, this.max_y, this.move_rate_x - 0.2, this.move_rate_y - 0.2, "./resources/PNG/Meteors/meteorBrown_big1.png"));
            }
            this.removeFromWorld = true;
        }
    }

    /*
    Update the Hurdle's center.

    For the bounding circle.
    */
    updateCenter() {
        this.xCenter = this.x + this.w_Center;
        this.yCenter = this.y + this.h_Center;
        this.BoundingCircle = new BoundingCircle(this.radius, this.xCenter, this.yCenter);
    }

    collideLeft() {
        return ((this.xCenter - this.radius) < -100)
    }

    collideRight() {
        return ((this.xCenter + this.radius) > 600)
    }

    collideDown() {
        return ((this.yCenter + this.radius) > 1000)
    }

    updateDirection() {
        // collision with left or right walls
        if (this.collideDown() || this.collideLeft() || this.collideRight()) {
            this.dX = 0;
            this.dY = 0;
            this.health = 100;
            this.calcMovement();
            this.x = Math.random() * (this.max_x - this.min_x) + this.min_x;
            this.y = Math.random() * (this.max_y - this.min_y) + this.min_y;
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

        return (Math.atan2(dy, dx) + (Math.PI / 2));
    }
}