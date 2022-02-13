// This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

class Bullet {
    constructor(game, parentTag, canvasSize, width, height, speed, x, y, mouseX, mouseY, src,srcEffect) {
        //Initialize element.
        this.game = game;
        this.imageBullet = ASSET_MANAGER.getAsset(src);
        this.imageEffect = ASSET_MANAGER.getAsset(srcEffect);
        this.x = x; //X location
        this.y = y; //Y location
        this.canvasSize = canvasSize;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.center = canvasSize / 2;
        this.tag = "Bullet";
        this.parentTag = parentTag;
        this.mouseX = mouseX;
        this.mouseY = mouseY;
        this.angle; //Angle to move in.
        this.dX;
        this.dY;
        this.radius = ((width * width) / 4) / (8 * height) + height / 2;
        this.calcDXandDY(this.x, this.mouseX, this.y, this.mouseY);
        this.xCenter = 0;
        this.yCenter = 0;
        this.sound = new Audio("./resources/Sounds/sfx_shieldDown.ogg")
        this.updateCenter();
        this.BoundingCircle = new BoundingCircle(this.radius, this.xCenter, this.yCenter);
    }

    /*
    Calculate the vector that will be used to move the bullets.

    Accomplished through the magic of polar coordinates.
    */
    calcDXandDY(p1X, p2X, p1Y, p2Y) {
        this.angle = Math.atan2(p2Y - p1Y, p2X - p1X);
        this.dX = Math.cos(this.angle) * this.speed;
        this.dY = Math.sin(this.angle) * this.speed;
    }
    /*
Update the Nullet's center.

For the bounding circle.
*/
    updateCenter() {
        this.xCenter = this.x + this.width / 2;
        this.yCenter = this.y + this.height / 2;
        this.BoundingCircle = new BoundingCircle(this.radius, this.xCenter, this.yCenter);
    }
    /*
    Draw the bullet on the canvas.

    The bullet should be rotated to match its current direction.
    */
    draw(ctx) {
        if (this.imageBullet != null) {
            var myCanvas = document.createElement('canvas');
            myCanvas.width = this.canvasSize;
            myCanvas.height = this.canvasSize;
            var myCtx = myCanvas.getContext('2d');
            myCtx.save();
            myCtx.translate(this.center, this.center); //This should go to the center of the object.
            myCtx.rotate(this.angle + (Math.PI) / 2);
            myCtx.translate(-this.center, -this.center);
            myCtx.drawImage(this.imageBullet, 0, 0, this.width, this.height);
            myCtx.restore();

            ctx.drawImage(myCanvas, this.x, this.y);
        }

    }

    /*
    Updates the current condition of the bullet.

    If the bullet collides with an enemy or leaves the screen, it should be deleted.

    Otherwise, it should continue to travel in a straight line
    in the direction it was fired.
    */
    update() {
        this.x += this.dX;
        this.y += this.dY;
        this.updateCenter();
        this.checkForCollisions();
        //Ugly canvas size hardcode to remove.
        if (this.x < 0 || this.x > 500 || this.y < 0 || this.y > document.body.clientHeight) {
            this.removeFromWorld = true;
        }
    }
    /*
 Handle collisions with various objects.
 
 This should primarily check for collisions with enemies.
 Later, it could be extended to deal with items or whatnot.
 */
    checkForCollisions() {

        var that = this;
        this.game.entities.forEach(function (entity) {
            /*
            Check if thing has bounding circle.
            If so, make sure it's not the player.
            If that's true, actually detect collision.
            */
            if ((that.parentTag == "Player") && !(typeof entity.BoundingCircle === 'undefined') && !(entity instanceof PlayerShip) && !(entity instanceof Bullet)
                && entity.BoundingCircle && that.BoundingCircle.collide(entity.BoundingCircle)) {
                entity.health -= entity.damage;
                that.canvasSize+= that.canvasSize;
                that.width += that.width;
                that.height += that.height;
                that.imageBullet = that.imageEffect;
                that.game.score += 1;
                that.parentTag = "";
                setTimeout(function(){
                    that.removeFromWorld = true;
                }, 1);
            }
            else if ((that.parentTag == "Enemy") && !(typeof entity.BoundingCircle === 'undefined') && !(entity instanceof Hurdle) && !(entity instanceof Enemy) && !(entity instanceof Bullet)
                && entity.BoundingCircle && that.BoundingCircle.collide(entity.BoundingCircle)) {
                entity.health -= entity.damage;
                that.canvasSize+=that.canvasSize;
                    if(that.sound.paused && that.game.isSoundPlay)
                    {
                        that.sound.play();
                    }
                that.width += that.width;
                that.height += that.height;
                that.imageBullet = that.imageEffect;
                that.parentTag = "";
                setTimeout(function(){
                    that.removeFromWorld = true;
                }, 1);
            }
        })
    }
} 