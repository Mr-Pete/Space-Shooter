class GameEngine {
    constructor(options) {
        // What you will use to draw
        // Documentation: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
        this.ctx = null;

        // Everything that will be updated and drawn each frame
        this.entities = [];

        // Information on the input
        this.click = null;
        this.mouse = null;
        this.mousedown = false; //tracking when mouse is down.
        this.wheel = null;
        this.keys = {};

        // THE KILL SWITCH
        this.running = false;

        this.isSoundPlay = true;
        this.gameOver = false;
        this.playerSrc;
        // IF You want to Start From Again 1st Level then Uncommit this line and run game after that again come here and commit this again
        //  |  |  |
        //  V  V  V
        //localStorage.setItem("levelno",1);
        if(localStorage.getItem("levelno") == null)
        {
            localStorage.setItem("levelno",1);
        }
        this.levelno = localStorage.getItem("levelno");
        this.score = 0;
        this.lifes = 3;

        // Options and the Details
        this.options = options || {
            prevent: {
                contextMenu: true,
                scrolling: true,
            },
            debugging: false,
        };
    };

    init(ctx) {
        this.ctx = ctx;
        this.startInput();
        this.timer = new Timer();
    };

    start() {
        this.running = true;
        const gameLoop = () => {
            this.loop();
            if (this.running) {
                requestAnimFrame(gameLoop, this.ctx.canvas);
            }
        };
        gameLoop();
    };

    startInput() {
        //Reference to self because JS.
        var that = this;

        const getXandY = e => ({
            x: e.clientX - this.ctx.canvas.getBoundingClientRect().left,
            y: e.clientY - this.ctx.canvas.getBoundingClientRect().top
        });
        //Player input block; all player inputs go here...
        document.addEventListener("keydown", e => {
            switch (e.code) {
                //Player Movement with WASD
                case "KeyA":
                    that.left = true;
                    break;
                case "KeyD":
                    that.right = true;
                    break;
                case "Space":
                    that.shoot = true;
                    break;
                case "Escape":
                    that.escape = true;
                    break;
            }
        }, false);

        //Now to detect key releases. Use same pattern as above...
        document.addEventListener("keyup", e => {
            switch (e.code) {
                //Player Movement with WASD
                case "KeyA":
                    that.left = false;
                    break;
                case "KeyD":
                    that.right = false;
                    break;
                case "Space":
                    that.shoot = false;
                    break;
                case "Escape":
                    that.escape = false;
                    break;
            }
        }, false);


        document.getElementById("leftBtn").addEventListener('mousedown', function(e) {
            that.left = true;
        });
        document.getElementById("leftBtn").addEventListener("mouseup", function(e) {
            that.left = false;
        });

        document.getElementById("rightBtn").addEventListener('mousedown', function (e) {
            that.right = true;
        });
        document.getElementById("rightBtn").addEventListener("mouseup", function(e) {
            that.right = false;
        });

        document.getElementById("shootBtn").addEventListener('mousedown', function(e) {
            that.shoot = true;
        });
        document.getElementById("shootBtn").addEventListener("mouseup", function(e) {
            that.shoot = false;
        });

        document.getElementById("leftBtn").addEventListener('pointerdown', function(e) {
            that.left = true;
        });
        document.getElementById("leftBtn").addEventListener("pointerup", function(e) {
            that.left = false;
        });

        document.getElementById("rightBtn").addEventListener('pointerdown', function (e) {
            that.right = true;
        });
        document.getElementById("rightBtn").addEventListener("pointerup", function(e) {
            that.right = false;
        });

        document.getElementById("shootBtn").addEventListener('pointerdown', function(e) {
            that.shoot = true;
        });
        document.getElementById("shootBtn").addEventListener("pointerup", function(e) {
            that.shoot = false;
        });


        this.ctx.canvas.addEventListener("mousemove", e => {
            if (this.options.debugging) {
                console.log("MOUSE_MOVE", getXandY(e));
            }
            if (this.running)
                this.mouse = getXandY(e);
        });

        this.ctx.canvas.addEventListener("mousedown", e => {
            if (this.options.debugging) {
                console.log("MOUSE_DOWN", getXandY(e));
            }
            if (this.running)
                this.mousedown = true;
        });

        this.ctx.canvas.addEventListener("mouseup", e => {
            if (this.options.debugging) {
                console.log("MOUSE_UP", getXandY(e));
            }
            if (this.running)
                this.mousedown = null;
        });

        this.ctx.canvas.addEventListener("pointerdown", e => {
            if (this.options.debugging) {
                console.log("MOUSE_DOWN", getXandY(e));
            }
            if (this.running)
                this.mousedown = true;
        });

        this.ctx.canvas.addEventListener("pointerup", e => {
            if (this.options.debugging) {
                console.log("MOUSE_UP", getXandY(e));
            }
            if (this.running)
                this.mousedown = null;
        });

        this.ctx.canvas.addEventListener("click", e => {
            if (this.options.debugging) {
                console.log("CLICK", getXandY(e));
            }
            if (this.running)
                this.click = getXandY(e);
        });

        this.ctx.canvas.addEventListener("wheel", e => {
            if (this.options.debugging) {
                console.log("WHEEL", getXandY(e), e.wheelDelta);
            }
            if (this.options.prevent.scrolling) {
                e.preventDefault(); // Prevent Scrolling
            }
            if (this.running)
                this.wheel = e;
        });

        this.ctx.canvas.addEventListener("contextmenu", e => {
            if (this.options.debugging) {
                console.log("RIGHT_CLICK", getXandY(e));
            }
            if (this.options.prevent.contextMenu) {
                e.preventDefault(); // Prevent Context Menu
            }
            if (this.running)
                this.rightclick = getXandY(e);
        });

        window.addEventListener("keydown", event => this.keys[event.key] = true);
        window.addEventListener("keyup", event => this.keys[event.key] = false);
    };

    addEntity(entity) {
        this.entities.push(entity);
    };

    draw() {
        // Clear the whole canvas with transparent color (rgba(0, 0, 0, 0))
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        // Draw latest things first
        for (let i = this.entities.length - 1; i >= 0; i--) {
            this.entities[i].draw(this.ctx, this);
        }
    };

    update() {
        if (!this.gameOver && this.running) {
            if (this.escape) {
                document.location.reload();
            }
            let entitiesCount = this.entities.length;

            for (let i = 0; i < entitiesCount; i++) {
                let entity = this.entities[i];

                if (!entity.removeFromWorld) {
                    entity.update();
                }
            }

            for (let i = this.entities.length - 1; i >= 0; --i) {
                if (this.entities[i].removeFromWorld) {
                    this.entities.splice(i, 1);
                }
            }

            var count = 0;
            this.entities.forEach(function (entity) {
                if (entity instanceof Enemy) {
                    count++;
                }
            });
            if (count == 0) {
                var that = this;
                document.getElementById("game-state").style.display = "block";
                document.getElementById("game-state").innerText = "Game Win";
                that.gameOver = true;
                that.running = false;
                setTimeout(function () {
                    localStorage.setItem("levelno", parseInt(that.levelno) + 1);
                    document.location.reload();
                }, 3000);
            }
        }
    };

    loop() {
        this.clockTick = this.timer.tick();
        this.update();
        this.draw();
    };

};