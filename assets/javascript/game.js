$(document).ready(function() {

    // ======================== VARIABLES ==========================

    // CREATE VARIABLES FOR 
    var magicNumber;

    var wins = 0;
    var losses = 0;

    var score;

    var jewelOne;
    var jewelTwo;
    var jewelThree;
    var jewelFour;

    // ======================== FUNCTIONS ========================== 

    // FUNCTION GENMAGICNUMBER
    function genMagicNumber() {
        // ASSIGN MAGIC NUMBER A RANDOMLY SELECTED NUMBER FROM 19-120
        magicNumber = Math.floor((Math.random() * 70) + 30);
        // .TEXT MAGIC NUMBER
        $("#magic-number").text(magicNumber);
    }; // END GENMAGICNUMBER

    // FUNCTION SETWINLOSS
    function setWinLoss() {
        // .TEXT WINS 
        $("#wins").text(wins);
        // .TEXT LOSSES
        $("#losses").text(losses);
    }; // END SETWINLOSS

    // FUNCTION RESETSCORE
    function resetScore() {
        // MAKE VARIABLE SCORE = 0
        score = 0;
        // .TEXT SCORE
        $("#score").text(score);
    }; // END RESETSCORE

    // FUNCTION GENJEWELVALUE
    function genJewelValue() {
        // ASSIGN EACH JEWEL A RANDOMLY GENERATED NUMBER BETWEEN 1 & 9
        jewelOne = Math.floor((Math.random() * 6) + 1);
        jewelTwo = Math.floor((Math.random() * 6) + 1);
        jewelThree = Math.floor((Math.random() * 6) + 1);
        jewelFour = Math.floor((Math.random() * 6) + 1);
        // CHECK VARIABLES
        console.log(jewelOne, jewelTwo, jewelThree, jewelFour);
    }; // END GENJEWELVALUE

    // FUNCTION WIN
    function win() {
        // ALERT YOU WON
        alert("You've Won!");
        // ADD 1 TO WINS
        wins++;
        // .TEXT WINS++
        $("#wins").text(wins);
        // CALL GENMAGICNUMBER
        genMagicNumber();
        // CALL RESETSCORE
        resetScore();
        // CALL GENJEWELVALUE
        genJewelValue();
    }; // END WIN FUNCTION

    // FUNCTION LOSS
    function loss() {
        // ALERT YOU LOST
        alert("You've Lost!");
        // ADD 1 TO LOSSES
        losses++;
        // .TEXT LOSSES++
        $("#losses").text(losses);
        // CALL GENMAGICNUMBER
        genMagicNumber();
        // CALL RESETSCORE
        resetScore();
        // CALL GENJEWELVALUE
        genJewelValue();
    }; // END LOSS FUNCTION


    // CALL RESETSCORE
    resetScore();
    // CALL GENMAGICNUMBER
    genMagicNumber();
    // CALL SETWINLOSS
    setWinLoss();
    // CALL GENJEWELVALUE
    genJewelValue();

    // ======================== ONCLICKS ===========================

    // ONCLICK JEWEL1
    $("#jewel1").on("click", function() {
        // SCORE += JEWELONE
        score += jewelOne;
        // SCORE .TEXT SCORE 
        $("#score").text(score);
        // IF SCORE IS === MAGICNUMBER
        if (score === magicNumber) {
            // CALL WIN FUNCTION
            win();
            // ELSE IF SCORE > MAGICNUMBER
        } else if (score > magicNumber) {
            // CALL LOSS FUNCTION
            loss();
        };

    }); // END ONCLICK JEWEL1 

    // ONCLICK JEWEL2
    $("#jewel2").on("click", function() {
        // SCORE += JEWELONE
        score += jewelTwo;
        // SCORE .TEXT SCORE 
        $("#score").text(score);
        // IF SCORE IS === MAGICNUMBER
        if (score === magicNumber) {
            // CALL WIN FUNCTION
            win();
            // ELSE IF SCORE > MAGICNUMBER
        } else if (score > magicNumber) {
            // CALL LOSS FUNCTION
            loss();
        };

    }); // END ONCLICK JEWEL2

    // ONCLICK JEWEL3
    $("#jewel3").on("click", function() {
        // SCORE += JEWELONE
        score += jewelThree;
        // SCORE .TEXT SCORE 
        $("#score").text(score);
        // IF SCORE IS === MAGICNUMBER
        if (score === magicNumber) {
            // CALL WIN FUNCTION
            win();
            // ELSE IF SCORE > MAGICNUMBER
        } else if (score > magicNumber) {
            // CALL LOSS FUNCTION
            loss();
        };

    }); // END ONCLICK JEWEL3

    // ONCLICK JEWEL4
    $("#jewel4").on("click", function() {
        // SCORE += JEWELONE
        score += jewelFour;
        // SCORE .TEXT SCORE 
        $("#score").text(score);
        // IF SCORE IS === MAGICNUMBER
        if (score === magicNumber) {
            // CALL WIN FUNCTION
            win();
            // ELSE IF SCORE > MAGICNUMBER
        } else if (score > magicNumber) {
            // CALL LOSS FUNCTION
            loss();
        };

    }); // END ONCLICK JEWEL4  

}); // END THE READY START FUNCITON