// The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 
// Here's how the app works:



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


// The random number shown at the start of the game should be between 19 - 120.
// Each crystal should have a random hidden value between 1 - 12.



// creat variables to track

var wins = 0;
var losses = 0;
var goal = 0; //19-120
var score = 0;
var crystals = [{image:"assets/images/c1.jpg", score:0},{image:"assets/images/c2.png", score:0},{image:"assets/images/c3.jpg", score:0},{image:"assets/images/c4.png", score:0} ];

// console.log(crystalVal)
    function makeCrystals(){
        $("#crystals").empty();
        for(var i=0;i<crystals.length;i++){
            var crystalImg = $("<img src=" + crystals[i].image + ">");
            crystalImg.addClass("images");
            // crystals[i].score = Math.floor(Math.random()*12)+1;
            crystalImg.attr("crystalval", Math.floor(Math.random()*12)+1)
            $("#crystals").append(crystalImg);
            // crystalVal = crystals[i].score
            // console.log(crystals[i].score)
            
        }
    };
    
$("#crystals").on("click","img",function(){
    var crystalVal = $(this).attr("crystalval");
    score = parseInt(crystalVal) + score;
       $("#score").text(score);
       if (score === goal){
        wins++;
        $("#wins").text(wins);
        alert("!!!  Fortune is YOURS  !!!")
        reset();
        } else if (score > goal){
        losses++;
        $("#losses").text(losses);
        alert("!THEY TOOK YOUR GOLD!")
        reset();
        
        };
       
});

function reset(){
    $("#goal").empty();
    $("#score").empty();
    score = 0;
    makeCrystals();
    goal = Math.floor(Math.random()*120)+19;
$("#goal").append(goal);

};
reset()


//creat function to start/reset game
 //pick new goal -random number 
            //update wins to page
            //update losses to page
            //creat a new random number between 19-120
            //possibly move crystals so player knows crystals are a different value
            //update randome number on the page
            //creat new crystal values between 1-12
            //update score to 0

// creat function to test wins/losses //call reset function
//creat a click event
// $("crystal").on("click",function(){



// });
    //grab value of crystal that was clicked
    //add that value to players score
    //test to see if player has won/loss
        //if the player score === goal
            //win++
            //pick new goal -random number 
            //update wins to page
            //creat new crystal values
                //assign each value to crystal
            //if score > goal
                //losses++
                //call reset function
               
            