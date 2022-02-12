class UIController {
    /*
    Create the SCORE CONTOLLER object.
    */
    constructor(game) {
        this.game = game;
    }

    /*
    Draw the Start OF SCORE.
    */
    draw(ctx) {
        //Getting Lifes and Update
        //Getting Score and Update
        this.updateLifes();
        this.updateScore();
        document.getElementById("level").innerText = "Level " + this.game.levelno;
        if (this.game.playerSrc != "undefined") {
            this.updatePlayerShip();
        }
    }

    /*
    Update Score's state.
    */
    update() {
        this.updateLifes();
        this.updateScore();
        if(document.getElementById("level").innerText != "Level "+ this.game.levelno){
            document.getElementById("level").innerText = "Level " + this.game.levelno;
        }
        if (this.game.playerSrc != "undefined") {
            this.updatePlayerShip();
        }
    }

    updateLifes() {
        var lifes = this.game.lifes;
        document.getElementById("life-count").src = this.getURL(lifes);
    }

    updateScore() {
        var score = this.game.score.toString();
        for (var i = 0; i < score.length; i++) {
            if (i == 0) {
                document.getElementById("number5").src = this.getURL(score[i])
            }
            else if (i == 1) {
                document.getElementById("number4").src = this.getURL(score[i])
            }
            else if (i == 2) {
                document.getElementById("number3").src = this.getURL(score[i])
            }
            else if (i == 3) {
                document.getElementById("number2").src = this.getURL(score[i])
            }
            else if (i == 4) {
                document.getElementById("number1").src = this.getURL(score[i])
            }
        }
    }

    updatePlayerShip() {
        if (this.game.playerSrc == "./resources/PNG/playerShip1_blue.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife1_blue.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip1_green.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife1_green.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip1_orange.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife1_orange.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip1_red.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife1_red.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip2_blue.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife2_blue.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip2_green.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife2_green.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip2_orange.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife2_orange.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip2_red.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife2_red.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip3_blue.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife3_blue.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip3_orange.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife3_orange.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip3_green.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife3_green.png"
        }
        else if (this.game.playerSrc == "./resources/PNG/playerShip3_red.png") {
            document.getElementById("level-ship").src = "./resources/PNG/UI/playerLife3_red.png"
        }
    }

    getURL(count) {
        if (count == 0) {
            return "./resources/PNG/UI/numeral0.png"
        }
        else if (count == 1) {
            return "./resources/PNG/UI/numeral1.png"
        }
        else if (count == 2) {
            return "./resources/PNG/UI/numeral2.png"
        }
        else if (count == 3) {
            return "./resources/PNG/UI/numeral3.png"
        }
        else if (count == 4) {
            return "./resources/PNG/UI/numeral4.png"
        }
        else if (count == 5) {
            return "./resources/PNG/UI/numeral5.png"
        }
        else if (count == 6) {
            return "./resources/PNG/UI/numeral6.png"
        }
        else if (count == 7) {
            return "./resources/PNG/UI/numeral7.png"
        }
        else if (count == 8) {
            return "./resources/PNG/UI/numeral8.png"
        }
        else {
            return "./resources/PNG/UI/numeral9.png"
        }
    }
}