//<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

$(document).ready(function () {
    var goalNumber = $("#goalNumber");
    var wins = $("#wins");
    var losses = $("#losses");
    var total = $("#total");
  
    var winCount = 0;
    var lossCount = 0;
    var totalCount = 0;
    var randomNumber;
    var gemImageArray = ["./assets/images/gem_0.svg", "./assets/images/gem_1.svg",
        "./assets/images/gem_2.svg", "./assets/images/gem_3.svg"]


    //render the files

    function renderText() {

        wins.text(winCount);
        losses.text(lossCount);
        total.text(totalCount);
        goalNumber.text(randomNumber);
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    // The random number shown at the start of the game should be between 19 - 120.
    function initializeGame() {

        randomNumber = getRandomInt(19, 120);
        renderText();
    }

    //Generate random gems with numbers
    function gemGenerator() {

        //Generate new number for every time an array gets called.   
        for (var i = 0; i < 4; i++) {
            var imgGem = $("<img>");
            //generate image
            var randomPlacement = Math.floor(Math.random() * gemImageArray.length);

            // randomNumber from 1- 12 gets assigned to a gem
            randomNumber = getRandomInt(1, 12);

            console.log(gemImageArray[randomPlacement]);

            $(".gem-container").append(
                imgGem.attr("src", gemImageArray[randomPlacement])
            );

            $(".gem-container").append(
                imgGem.attr("data-crystal", randomNumber)
            );

            //if it's already been used 

            if (gemImageArray.indexOf(gemImageArray[i]) === -1){

            }
        }
    }

    function gemGenerator2() {

        return {
            gem_0: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "./assets/images/gem_0.svg"
            },

            gem_1: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "./assets/images/gem_1.svg"
            },

            gem_2: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "./assets/images/gem_2.svg"
            },
            gem_3: {
                points: Math.floor(Math.random() * 12) + 1,
                imageUrl: "./assets/images/gem_3.svg"

            }
        }
    }


        //The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 


        //Execute functions
        initializeGame();
        gemGenerator();
    });



//Here's how the app works:



// There will be four crystals displayed as buttons on the page.
// The player will be shown a random number at the start of the game.

// When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 


// Your game will hide this amount until the player clicks a crystal.
// When they do click one, update the player's score counter.


// The player wins if their total score matches the random number from the beginning of the game.
// The player loses if their score goes above the random number.

// The game restarts whenever the player wins or loses.


// When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.


// The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.



// Option 1 Game design notes



// Each crystal should have a random hidden value between 1 - 12.