//<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

$(document).ready(function () {
    var goalNumber = $("#goalNumber");
    var wins = $("#wins");
    var losses = $("#losses");
    var total = $("#total");
    var imgGem2 = $(".gem");
    var winCount = 0;
    var lossCount = 0;
    var totalCount = 0;
    var randomNumber;
    var gemImageArray = ["./assets/images/gem_0.svg", "./assets/images/gem_1.svg",
        "./assets/images/gem_2.svg", "./assets/images/gem_3.svg"
    ]


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
        totalCount = 0;
        gemImageArray = ["./assets/images/gem_0.svg", "./assets/images/gem_1.svg",
            "./assets/images/gem_2.svg", "./assets/images/gem_3.svg"
        ]

        // remove gems
        for (var i = 0; i < 4; i++) {
            $(".gem").remove();
        }

        gemGenerator();
        renderText();
        onClickLogic();
    }

    //Generate random gems with numbers
    function gemGenerator() {

        //Generate new number for every time an array gets called.   
        for (var i = 0; i < 4; i++) {

            //generate image and a random placement number
            var imgGem = $("<img>");
            var randomPlacement = Math.floor(Math.random() * gemImageArray.length);

            // randomNumber from 1- 12 gets assigned to a gem
            var randomNumber = getRandomInt(1, 12);

            //assign src and data to img element
            imgGem
                .attr("src", gemImageArray[randomPlacement])
                .attr("data-crystal", randomNumber)
                .attr("id","id-"+(i+1))
                .addClass("gem col-md-3 col-6");

            //append to DOM
            $(".gem-container").append(imgGem);

            // remove the path from the path array
            gemImageArray.splice(randomPlacement, 1);
        }

    }

    // function gemGenerator2() {

    //     return {
    //         gem_0: {
    //             points: Math.floor(Math.random() * 12) + 1,
    //             imageUrl: "./assets/images/gem_0.svg"
    //         },

    //         gem_1: {
    //             points: Math.floor(Math.random() * 12) + 1,
    //             imageUrl: "./assets/images/gem_1.svg"
    //         },

    //         gem_2: {
    //             points: Math.floor(Math.random() * 12) + 1,
    //             imageUrl: "./assets/images/gem_2.svg"
    //         },
    //         gem_3: {
    //             points: Math.floor(Math.random() * 12) + 1,
    //             imageUrl: "./assets/images/gem_3.svg"

    //         }
    //     }
    // }


    //winning condition function

    function winCondition() {
        if (totalCount === randomNumber) {
            setTimeout(function () {
                
                winCount++;
                initializeGame();
                alert("great job, you won!");
            }, 50);

        } else if (totalCount > randomNumber) {

         setTimeout(function () {
            
            lossCount++;
            initializeGame();
            alert("you lost!");
         }, 50);   
            


        }

    }


    //on click function

    function onClickLogic() {
        $(".gem").on("click", function () {
            //add to totalCount

            var crystalValue = parseInt($(this).attr("data-crystal"));
            totalCount += crystalValue;

            console.log("CLick!!!");
            winCondition();

            renderText();
        });

    }

    //Execute functions
    initializeGame();
    //  gemGenerator();
    onClickLogic();





});