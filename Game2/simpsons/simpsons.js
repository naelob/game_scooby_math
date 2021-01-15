var scores, roundScore, activePlayer, gamePlaying,tmp;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;
gamePlaying = true;
tmp=0;

var randomNumber = Math.floor(Math.random() * 8) + 1;


document.getElementsByClassName('score-1').textContent = '0';
document.getElementsByClassName('score-2').textContent = '0';
document.getElementsByClassName('current-score-1').textContent = '0';
document.getElementsByClassName('current-score-2').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        //Random Number
        var randomNumber = Math.floor(Math.random() * 8) + 1;
        
        //Display Result
        document.querySelector('.image-roll').src = "pics/" + randomNumber + ".png";
        //Update the score
        
        if(randomNumber === 1 && tmp === 6){
            roundScore+=200;
            document.querySelector(".current-score-" + activePlayer).textContent = roundScore;
        }
        
        else if(randomNumber === 4){
            roundScore+=30;
            document.querySelector(".current-score-" + activePlayer).textContent = roundScore;
        }else if (randomNumber !== 3) {
            roundScore += randomNumber;
            document.querySelector(".current-score-" + activePlayer).textContent = roundScore;
        } else {

            activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
            roundScore = 0;
            document.querySelector('.current-score-1').textContent = '0';
            document.querySelector('.current-score-2').textContent = '0';
            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;

            elem1.classList.toggle('active');
            elem2.classList.toggle('active');
        }
        tmp = randomNumber;
    }

});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //AJOUTER SCORE A NOTRE GLOBALE
        scores[activePlayer - 1] += roundScore;

        //UPDATE 

        document.querySelector('.score-' + activePlayer).textContent = scores[activePlayer - 1];
        //TEST GAGNANT
        if (scores[activePlayer - 1] >= 200) {
            document.querySelector(".name-" + activePlayer).textContent = "Winner!";
            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;

            elem1.classList.remove('active');
            elem2.classList.remove('active');
            gamePlaying = false;
        } else {
            activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
            roundScore = 0;
            document.querySelector('.current-score-1').textContent = '0';
            document.querySelector('.current-score-2').textContent = '0';
            var elem1 = document.querySelector(".part1").firstChild;
            var elem2 = document.querySelector(".part2").firstChild;

            elem1.classList.toggle('active');
            elem2.classList.toggle('active');
        }
    }


});
