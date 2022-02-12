const gameEngine = new GameEngine(0);

const ASSET_MANAGER = new AssetManager();
// PLayer Ships
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip1_blue.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip1_green.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip1_orange.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip1_red.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip2_blue.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip2_green.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip2_orange.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip2_red.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip3_blue.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip3_orange.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip3_green.png");
ASSET_MANAGER.queueDownload("./resources/PNG/playerShip3_red.png");

// Enemy Ships
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlack1.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlack2.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlack3.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlack4.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlack5.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlue1.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlue2.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlue3.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlue4.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyBlue5.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyGreen1.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyGreen2.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyGreen3.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyGreen4.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyGreen5.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyRed1.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyRed2.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyRed3.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyRed4.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Enemies/enemyRed5.png");


// Lasers
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue01.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue02.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue03.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue04.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue05.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue06.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue07.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue08.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue09.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue10.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserBlue11.png");

ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen01.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen02.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen03.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen04.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen05.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen06.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen07.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen08.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen09.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen10.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserGreen11.png");

ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed01.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed02.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed03.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed04.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed05.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed06.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed07.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed08.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed09.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed10.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Lasers/laserRed11.png");

// Sheilds
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/shield1.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/shield2.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/shield3.png");


// Fires
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/fire (1).png");
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/fire (2).png");
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/fire (3).png");
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/fire (4).png");
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/fire (5).png");
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/fire (6).png");
ASSET_MANAGER.queueDownload("./resources/PNG/Effects/fire (7).png");


// HURDLES 
ASSET_MANAGER.queueDownload("./resources/PNG/Meteors/meteorBrown_big1.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Meteors/meteorBrown_big2.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Meteors/meteorBrown_big3.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Meteors/meteorBrown_big4.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Meteors/meteorGrey_big1.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Meteors/meteorGrey_big2.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Meteors/meteorGrey_big3.png");
ASSET_MANAGER.queueDownload("./resources/PNG/Meteors/meteorGrey_big4.png");


ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("board");
    const ctx = canvas.getContext("2d");

    gameEngine.init(ctx);
    gameEngine.addEntity(new UIController(gameEngine));
    ///LEVLE DESIGN OF GAME EACH LEVEL HAS DIFFERENT COMPLEXITY 
    //LEVEL 01
    if (gameEngine.levelno == 1) {
        this.player = new PlayerShip(gameEngine, 90, 0.3, 10, 20, 10, 20, 1, "./resources/PNG/playerShip1_blue.png", "./resources/PNG/Effects/shield2.png", "./resources/PNG/Effects/fire (1).png", "./resources/PNG/Lasers/laserBlue02.png", "./resources/PNG/Lasers/laserBlue08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 200, 100, 2.5, 0, 1.5, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyBlack3.png", "./resources/PNG/Lasers/laserBlue01.png", "./resources/PNG/Lasers/laserBlue08.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 70, 50, -50, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 80, 70, 250, -150, 0, 450, -50, 0, -0.5, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 120, 100, 380, -100, 0, 450, -50, 0, 0, 1.5, "./resources/PNG/Meteors/meteorBrown_big3.png"));
    }
    else if (gameEngine.levelno == 2) {
        this.player = new PlayerShip(gameEngine, 75, 0.3, 12, 20, 10, 20, 1, "./resources/PNG/playerShip1_green.png", "./resources/PNG/Effects/shield2.png", "./resources/PNG/Effects/fire (2).png", "./resources/PNG/Lasers/laserGreen02.png", "./resources/PNG/Lasers/laserGreen08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 100, 50, 2, 2.5, 1, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyBlue3.png", "./resources/PNG/Lasers/laserBlue01.png", "./resources/PNG/Lasers/laserBlue08.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 80, 20, -150, 0, 450, -50, 0, -0.6, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 140, 90, 150, -20, 0, 450, -50, 0, 0.3, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -30, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 100, 350, -200, 0, 450, -50, 0, 0, 1.5, "./resources/PNG/Meteors/meteorBrown_big3.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 60, 60, 450, -100, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big3.png"));
    }
    else if (gameEngine.levelno == 3) {
        this.player = new PlayerShip(gameEngine, 75, 0.3, 12, 20, 10, 20, 2, "./resources/PNG/playerShip2_red.png", "./resources/PNG/Effects/shield1.png", "./resources/PNG/Effects/fire (4).png", "./resources/PNG/Lasers/laserRed02.png", "./resources/PNG/Lasers/laserRed08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 100, 50, 2, 2.5, 1, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyRed5.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue09.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 80, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 140, 90, 150, -20, 0, 450, -50, 0, -2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -30, 0, 450, -50, 0, 2, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 110, 350, -200, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, 350, -200, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 100, 350, -200, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big3.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 60, 60, 450, -100, 0, 450, -50, 0, 0, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
    }
    else if (gameEngine.levelno == 4) {
        this.player = new PlayerShip(gameEngine, 75, 0.3, 14, 20, 10, 20, 3, "./resources/PNG/playerShip3_orange.png", "./resources/PNG/Effects/shield3.png", "./resources/PNG/Effects/fire (4).png", "./resources/PNG/Lasers/laserRed02.png", "./resources/PNG/Lasers/laserRed08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 100, 50, 2, 2.5, 1, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyRed2.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue09.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 350, 50, 0, 2.5, 1, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyGreen5.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue09.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 80, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 140, 90, 150, -20, 0, 450, -50, 0, -2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -30, 0, 450, -50, 0, 2, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 110, 350, -200, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, 350, -200, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 120, 350, -200, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 60, 60, 450, -100, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
    }
    else if (gameEngine.levelno == 5) {
        this.player = new PlayerShip(gameEngine, 75, 0.3, 14, 20, 10, 20, 3, "./resources/PNG/playerShip3_orange.png", "./resources/PNG/Effects/shield3.png", "./resources/PNG/Effects/fire (4).png", "./resources/PNG/Lasers/laserRed02.png", "./resources/PNG/Lasers/laserRed08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 120, 100, 50, 2, 2.5, 1, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyBlack3.png", "./resources/PNG/Lasers/laserRed06.png", "./resources/PNG/Lasers/laserRed09.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 80, 80, 200, 50, 2, 2, 1, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyRed2.png", "./resources/PNG/Lasers/laserGreen06.png", "./resources/PNG/Lasers/laserGreen10.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 350, 50, 0, 2.5, 1, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyGreen5.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 80, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 140, 90, 150, -20, 0, 450, -50, 0, -2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -30, 0, 450, -50, 0, 2, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 110, 350, -200, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, 350, -200, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 120, 350, -200, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 60, 60, 450, -100, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
    }
    else if (gameEngine.levelno == 6) {
        this.player = new PlayerShip(gameEngine, 75, 0.3, 14, 20, 10, 20, 2, "./resources/PNG/playerShip2_green.png", "./resources/PNG/Effects/shield3.png", "./resources/PNG/Effects/fire (5).png", "./resources/PNG/Lasers/laserGreen02.png", "./resources/PNG/Lasers/laserGreen08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 140, 100, 50, 2, 1.5, 1.5, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyBlack1.png", "./resources/PNG/Lasers/laserRed06.png", "./resources/PNG/Lasers/laserRed09.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 80, 80, 200, 50, 2, 2.4, 2, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyRed2.png", "./resources/PNG/Lasers/laserGreen06.png", "./resources/PNG/Lasers/laserGreen10.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 120, 120, 350, 50, 0, 2.5, 1, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyGreen5.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 350, 50, 2, 2, 1.1, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyRed1.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 80, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 140, 90, 150, -20, 0, 450, -50, 0, -2, 2.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -30, 0, 450, -50, 0, 2, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 110, 350, -200, 0, 450, -50, 0, 1, 2.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, 410, -200, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, 30, -200, 0, 450, -50, 0, 1.5, 1, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, 120, -200, 0, 450, -50, 0, 1, 1, "./resources/PNG/Meteors/meteorBrown_big3.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 120, 350, -200, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 60, 60, 450, -100, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
    }
    else if (gameEngine.levelno == 7) {
        this.player = new PlayerShip(gameEngine, 75, 0.3, 14, 20, 10, 20, 3, "./resources/PNG/playerShip3_orange.png", "./resources/PNG/Effects/shield3.png", "./resources/PNG/Effects/fire (4).png", "./resources/PNG/Lasers/laserRed02.png", "./resources/PNG/Lasers/laserRed08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 80, 100, 50, 2, 1.5, 0.6, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyBlack3.png", "./resources/PNG/Lasers/laserRed06.png", "./resources/PNG/Lasers/laserRed09.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 80, 80, 200, 50, 2, 2.4, 1.2, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyRed2.png", "./resources/PNG/Lasers/laserGreen06.png", "./resources/PNG/Lasers/laserGreen10.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 120, 120, 350, 50, 0, 2.5, 2, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyGreen5.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 350, 50, 2, 2, 3, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyGreen1.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 80, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 140, 90, 150, -20, 0, 450, -50, 0, -2, 2.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -30, 0, 450, -50, 0, 2, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 110, 350, -200, 0, 450, -50, 0, 1, 2.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, 410, -200, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, 30, -200, 0, 450, -50, 0, 1.5, 1, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, 120, -200, 0, 450, -50, 0, 1, 1, "./resources/PNG/Meteors/meteorBrown_big3.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 120, 350, -200, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 60, 60, 450, -100, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
    }
    else if (gameEngine.levelno == 8) {
        this.player = new PlayerShip(gameEngine, 75, 0.3, 14, 20, 10, 20, 2, "./resources/PNG/playerShip2_blue.png", "./resources/PNG/Effects/shield2.png", "./resources/PNG/Effects/fire (7).png", "./resources/PNG/Lasers/laserBlue02.png", "./resources/PNG/Lasers/laserBlue08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 90, 100, 50, 2, 1.5, 2, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyBlack3.png", "./resources/PNG/Lasers/laserRed06.png", "./resources/PNG/Lasers/laserRed09.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 80, 80, 200, 50, 2, 2.4, 0.4, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyRed2.png", "./resources/PNG/Lasers/laserGreen06.png", "./resources/PNG/Lasers/laserGreen10.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 120, 120, 350, 50, 0, 2.5, 1.2, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyGreen5.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 350, 50, 2, 2, 0.7, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyGreen1.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 80, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big4.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 140, 90, 150, -20, 0, 450, -50, 0, -2, 2.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -30, 0, 450, -50, 0, 2, 1.5, "./resources/PNG/Meteors/meteorGrey_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 110, 350, -200, 0, 450, -50, 0, 1, 2.5, "./resources/PNG/Meteors/meteorBrown__big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, -500, 40, -100, 0, 0, 150, 1.1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 120, 90, 30, -200, 0, 450, -50, 0, 1.5, 1, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 90, -70, 200, 0, -100, 0, 300, 1, 1, "./resources/PNG/Meteors/meteorBrown_big3.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 120, 350, -200, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 60, 60, 450, -100, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
    }
    else if (gameEngine.levelno == 9) {
        this.player = new PlayerShip(gameEngine, 80, 0.1, 10, 20, 10, 20, 2, "./resources/PNG/playerShip2_blue.png", "./resources/PNG/Effects/shield2.png", "./resources/PNG/Effects/fire (7).png", "./resources/PNG/Lasers/laserBlue02.png", "./resources/PNG/Lasers/laserBlue08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 120, 100, 50, 2, 1.5, 0.5, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyBlack5.png", "./resources/PNG/Lasers/laserRed06.png", "./resources/PNG/Lasers/laserRed09.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 90, 100, 50, 0, 1.5, 1.2, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyBlack2.png", "./resources/PNG/Lasers/laserRed06.png", "./resources/PNG/Lasers/laserRed09.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 80, 80, 200, 50, 2, 2.4, 0.6, true, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyRed1.png", "./resources/PNG/Lasers/laserGreen06.png", "./resources/PNG/Lasers/laserGreen10.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 120, 120, 350, 50, 0, 2.5, 1.1, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyBlack1.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 350, 50, 2, 2, 0.4, false, 20, 10, 20, 10, "./resources/PNG/Enemies/enemyGreen3.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 80, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big4.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 140, 90, 150, -20, 0, 450, -50, 0, -2, 2.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -30, 0, 450, -50, 10, 2, 1.5, "./resources/PNG/Meteors/meteorGrey_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -120, 0, 300, -50, 20, 2, 2.5, "./resources/PNG/Meteors/meteorGrey_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 110, 350, -200, 0, 450, -50, 0, 1, 2.5, "./resources/PNG/Meteors/meteorBrown_big3.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, -500, 40, -100, 0, 0, 150, 1.1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 120, 90, 30, -200, 0, 450, -50, 0, 1.5, 1, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 90, -70, 200, 0, -100, 0, 300, 1, 1, "./resources/PNG/Meteors/meteorBrown_big3.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 120, 350, -200, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 60, 60, 450, -100, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
    }
    else if (gameEngine.levelno == 10) {
        this.player = new PlayerShip(gameEngine, 80, 0.3, 15, 20, 10, 20, 3, "./resources/PNG/playerShip3_orange.png", "./resources/PNG/Effects/shield2.png", "./resources/PNG/Effects/fire (7).png", "./resources/PNG/Lasers/laserBlue02.png", "./resources/PNG/Lasers/laserBlue08.png");
        gameEngine.addEntity(this.player);
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 100, 50, 2, 1.5, 2.5, true, 20, 10, 20, 13, "./resources/PNG/Enemies/enemyBlack5.png", "./resources/PNG/Lasers/laserRed06.png", "./resources/PNG/Lasers/laserRed09.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 80, 100, 50, 0, 1.5, 0.5, false, 20, 10, 20, 12, "./resources/PNG/Enemies/enemyBlack2.png", "./resources/PNG/Lasers/laserRed06.png", "./resources/PNG/Lasers/laserRed09.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 80, 80, 200, 50, 2, 2.4, 0.6, true, 20, 10, 20, 11, "./resources/PNG/Enemies/enemyRed1.png", "./resources/PNG/Lasers/laserGreen06.png", "./resources/PNG/Lasers/laserGreen10.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 120, 120, 350, 50, 0, 2.5, 0.4, false, 20, 10, 20, 12, "./resources/PNG/Enemies/enemyBlack1.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        gameEngine.addEntity(new Enemy(gameEngine, this.player, 100, 100, 350, 50, 2, 2, 0.5, false, 20, 10, 20, 13, "./resources/PNG/Enemies/enemyGreen3.png", "./resources/PNG/Lasers/laserBlue06.png", "./resources/PNG/Lasers/laserBlue08.png"));
        //HURDLES
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 80, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big4.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 20, 40, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big4.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 30, 30, 20, -150, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big4.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 140, 90, 150, -20, 0, 450, -50, 0, -2, 2.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -30, 0, 450, -50, 10, 2, 1.5, "./resources/PNG/Meteors/meteorGrey_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 40, 250, -120, 0, 300, -50, 20, 2, 2.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 110, 350, -200, 0, 450, -50, 0, 1, 2.5, "./resources/PNG/Meteors/meteorBrown__big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 100, 90, -500, 40, -100, 0, 0, 150, 1.1, 1.5, "./resources/PNG/Meteors/meteorBrown_big1.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 120, 90, 30, -200, 0, 450, -50, 0, 1.5, 1, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 40, 90, -70, 200, 0, -100, 0, 300, 1, 1, "./resources/PNG/Meteors/meteorBrown_big3.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 130, 120, 350, -200, 0, 450, -50, 0, 0.2, 1.5, "./resources/PNG/Meteors/meteorBrown_big2.png"));
        gameEngine.addEntity(new Hurdle(gameEngine, 60, 60, 450, -100, 0, 450, -50, 0, 1, 1.5, "./resources/PNG/Meteors/meteorGrey_big1.png"));
    }
});

window.onload = function () {
    resize();
    window.addEventListener('resize', resize);
};

function resize() {
    const canvas = document.getElementById("board");
    canvas.height = document.body.clientHeight;
    var side = (canvas.offsetLeft / document.body.clientWidth) * 100;
    document.getElementById("leftBtn").style.left = side + "%";
    document.getElementById("rightBtn").style.right = side + "%";
    document.getElementById("life").style.left = (side + 1) + "%";
    document.getElementById("score").style.right = (side) + "%";
    var mid = (document.getElementById("board").clientWidth /document.body.clientWidth);
    mid *= 50
    mid -= (document.getElementById("shootBtn").clientWidth/document.body.clientWidth * 50)
    document.getElementById("shootBtn").style.left = side + mid+ "%";
}

function startGame() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("game").style.display = "block";
    resize();
    gameEngine.start();
}



function quitGame() {
    window.close();
}


function changeSoundState() {
    if (gameEngine.isSoundPlay == true) {
        document.getElementById("sound").innerText = "Sound On";
        gameEngine.isSoundPlay = false;
    }
    else {
        document.getElementById("sound").innerText = "Sound Off";
        gameEngine.isSoundPlay = true;
    }
}

function seeLevels() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("level-menu").style.display = "block";
    putTextIntoLevel("level01", 01);
    putTextIntoLevel("level02", 02);
    putTextIntoLevel("level03", 03);
    putTextIntoLevel("level04", 04);
    putTextIntoLevel("level05", 05);
    putTextIntoLevel("level06", 06);
    putTextIntoLevel("level07", 07);
    putTextIntoLevel("level08", 08);
    putTextIntoLevel("level09", 09);
    putTextIntoLevel("level10", 10);
}


function backToMain() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("level-menu").style.display = "none";
}

function putTextIntoLevel(id, levelnumber) {
    if (levelnumber < gameEngine.levelno) {
        document.getElementById(id).innerText = "Level " + levelnumber + " -- Completed";
    }
    else if (levelnumber == gameEngine.levelno) {
        document.getElementById(id).innerText = "Level " + levelnumber + " -- Current";
    }
    else {
        document.getElementById(id).innerText = "Level " + levelnumber + " -- Locked";
    }
}