const PG_WIDTH = 120; //Should match player graphic in final.
const PG_HEIGHT = 120; //Should match player graphic in final.

const PGW_CENTER = PG_WIDTH / 2; //Measures center of player graphic, x-value.
const PGH_CENTER = PG_HEIGHT / 2; //Center of player graphic, y-value.

const PLAYER_FRICTION = 0.90; //Rate at which speed decreases. Lower = slower.
const PLAYER_RADIUS = 40; //Radius of player.


class PlayerShip {

    /*
    Create the PlayerShip object.
    */
    constructor(game, playerSpeed, player_fire_rate, bulletSpeed, bulletCanvas, bulletWidth, bulletHeight, ship, srcShip, srcShield, srcFire, srcBullet, srcBulletEffect) {
        this.game = game;
        this.imageShip = ASSET_MANAGER.getAsset(srcShip); //Messy hardcode, fix later.
        this.imageShield = ASSET_MANAGER.getAsset(srcShield);
        this.imageFire = ASSET_MANAGER.getAsset(srcFire);
        this.srcBullet = srcBullet;
        game.playerSrc = srcShip;

        this.shipOffsetX = 0;
        this.shipOffsetY = 0;
        this.srcBulletEffect = srcBulletEffect;
        this.playerSpeed = playerSpeed;
        this.player_fire_rate = player_fire_rate;
        this.bulletCanvas = bulletCanvas;
        this.bulletSpeed = bulletSpeed;
        this.bulletWidth = bulletWidth;
        this.bulletHeight = bulletHeight;
        this.health = 100;
        this.damage = 10;
        this.width = PG_WIDTH;

        if (ship == 1) {
            //For ship1 
            this.fire1_x = 25;
            this.fire2_x = 75;
            this.shipOffsetX = 14;
            this.shipOffsetY = 20;
        }
        else if (ship == 2) {
            //For Ship2
            this.fire1_x = 30;
            this.fire2_x = 70;
            this.shipOffsetX = 15;
            this.shipOffsetY = 18;
        }
        else {
            //For ship3
            this.fire1_x = 20;
            this.fire2_x = 80;
            this.shipOffsetX = 14;
            this.shipOffsetY = 16;
        }
        this.x = 190;
        this.y = document.body.clientHeight - PG_HEIGHT;
        this.xCenter = 0;
        this.yCenter = 0;
        this.updateCenter();
        this.BoundingCircle = new BoundingCircle(PLAYER_RADIUS, this.xCenter, this.yCenter);
        this.lastShot = 0;

        this.sound1 = new Audio("./resources/Sounds/sfx_laser1.ogg");
        this.sound2 = new Audio("./resources/Sounds/sfx_laser1.ogg");
        this.sound3 = new Audio("./resources/Sounds/sfx_laser1.ogg");
        this.sound4 = new Audio("./resources/Sounds/sfx_laser1.ogg");
        this.sound5 = new Audio("./resources/Sounds/sfx_laser1.ogg");

        this.xVelocity = 0; //Change in X between ticks.

        this.angle;         //Direction player points in, 0 is straight up...?
    }

    /*
    Draw the PlayerShip.

    Rotates to point to the cursor.
    */
    draw(ctx) {

        var myCanvas = document.createElement('canvas');
        myCanvas.width = PG_WIDTH + 20;
        myCanvas.height = PG_HEIGHT;
        var myCtx = myCanvas.getContext('2d');
        myCtx.save();
        myCtx.translate(PGW_CENTER, PGH_CENTER); //This should go to the center of the object.
        this.angle = this.rotateHandle();
        myCtx.rotate(this.angle);
        myCtx.translate(-(PGW_CENTER), -(PGH_CENTER));
        myCtx.drawImage(this.imageFire, this.fire1_x, 80, 20, 30);
        myCtx.drawImage(this.imageFire, this.fire2_x, 80, 20, 30);
        myCtx.drawImage(this.imageShip, this.shipOffsetX, this.shipOffsetY, 90, 80);
        myCtx.drawImage(this.imageShield, 0, 0, 120, 100);
        myCtx.restore();

        ctx.drawImage(myCanvas, this.x, this.y);

    }

    /*
    Update player's state.
    */
    update() {
        //TODO Get final player graphic so we can do a proper check on edges.

        this.moveHandle();
        this.rotateHandle();
        this.checkForCollisions();
        this.lastShot += this.game.clockTick;

        //If mouse exists, is down, and shot not on cooldown, fire.
        if (this.game.mousedown && this.game.mouse && this.lastShot > this.player_fire_rate) {
            this.shoot(this.game.mouse);
            this.lastShot = 0;
            this.game.click = false;
        }
        if (this.game.shoot && this.game.mouse && this.lastShot > this.player_fire_rate) {
            this.shoot(this.game.mouse);
            this.lastShot = 0;
            this.game.click = false;
        }
        if (this.health < 0) {
            if (this.game.lifes >= 1) {
                this.game.lifes--;
                this.health = 100;
            }
            else {
                document.getElementById("game-state").style.display = "block";
                document.getElementById("game-state").innerText = "Game Over";
                this.game.gameOver = true;
                setTimeout(function () {
                    document.location.reload();
                    document.getElementById("menu").style.display = "none";
                    document.getElementById("level-menu").style.display = "none";
                    document.getElementById("game").style.display = "block";
                }, 3000);
            }
        }
    }

    /*
    Create a bullet given the location of the last click.
    This creates a new Bullet object using the Player's X and Y,
    and the X and Y coordinates of the last click. Please see
    bullet.js for more information.
    */
    shoot(click) {
        if (this.game.isSoundPlay) {
            if (this.sound1.paused) {
                this.sound1.play();
            }
            else if (this.sound2.paused) {
                this.sound2.play();
            }
            else if (this.sound3.paused) {
                this.sound3.play();
            }
            else if (this.sound4.paused) {
                this.sound4.play();
            }
            else if (this.sound5.paused) {
                this.sound5.play();
            }
        }
        this.game.addEntity(new Bullet(this.game, "Player", this.bulletCanvas, this.bulletWidth, this.bulletHeight, this.bulletSpeed, (this.x + PGW_CENTER - this.shipOffsetX), (this.y + PGH_CENTER - this.shipOffsetY), click.x, click.y, this.srcBullet, this.srcBulletEffect));
    }

    /*
    Control player's movement.

    The player's movement is velocity based - it rapidly approaches a cap.
    This is to give "flow" of movement.
    */
    moveHandle() {
        //Note: commented code 
        let effectiveMoveRate = this.playerSpeed * this.game.clockTick;

        //Calculate the x velocity.
        //This is found by adding "left" to "right"; if both are pressed, no movement.
        this.xVelocity += (
            //Get player's movement in the first place.
            (this.game.left ? (-1 * effectiveMoveRate) : 0) + (this.game.right ? effectiveMoveRate : 0)
        );

        //Calculate differences and change position according to clock tick.
        this.x += this.xVelocity;

        if (this.x <= 0) {
            this.x = 0;
        }
        else if (this.x >= 500 - PG_WIDTH) {
            this.x = 500 - PG_WIDTH;
        }

        //Calculate friction.

        this.xVelocity *= PLAYER_FRICTION;

        this.updateCenter();

    }

    /*
    Update the player's center.
    For the bounding circle.
    */
    updateCenter() {
        this.xCenter = this.x + PGW_CENTER;
        this.yCenter = this.y + PGH_CENTER;
        this.BoundingCircle = new BoundingCircle(PLAYER_RADIUS, this.xCenter, this.yCenter);
    }

    /*
    Handles rotating the player.
    The player points toward the cursor using trigonometry.
    Please don't alter the math here unless it's really necessary,
    it's very finicky and prone to fit-throwing.
    */
    rotateHandle() {
        var mouse = this.game.mouse;
        if (mouse == null) {
            return (0); //If mouse isn't defined yet, don't try to rotate.
            //I know this is gross, bear with me.
        }
        var dx = (mouse.x) - (this.x + PGW_CENTER); //Accounting for difference in center of thing.
        var dy = (mouse.y) - (this.y + PGH_CENTER);
        var rotationAngle = Math.atan2(dy, dx) + (Math.PI / 2);
        return (rotationAngle);
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
            if (!(typeof entity.BoundingCircle === 'undefined') && !(entity instanceof PlayerShip) && !(entity instanceof Bullet)
                && entity.BoundingCircle && that.BoundingCircle.collide(entity.BoundingCircle)) {
                that.health -= that.damage;
            }
        });
    }
}