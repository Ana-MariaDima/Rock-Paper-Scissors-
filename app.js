let computerScore = 0;
let playerScore = 0;
let rundeJucate = 0;
//const cScore=document.getElementById('playerScore');
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('button')
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper", "fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text3 = document.getElementById('demo3');
//var runde =  parseInt(document.getElementById('nr_runde').value);



const game = () => {

    buttons.forEach(btn => btn.addEventListener('click', (e) => {

       // if (runde >= rundeJucate) {
            let clickedBtn = e.target.className;
            showIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * randomClasses.length);
            computerShowIcon.className = randomClasses[randomNum];

            if (showIcon.className === computerShowIcon.className) {

                text.innerHTML = "Remiza ! ";
                text.style.color = 'orange';

            } else if ((showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]) ||
                (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]) ||
                (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1])) {
                playerScore++;
                pScore.innerHTML = playerScore;
                text.innerHTML = "Ai castigat! ";
                text.style.color = 'green';

            } else if ((showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]) ||
                (showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]) ||
                (showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0])) {
                computerScore++;
                cScore.innerHTML = computerScore;
                text.innerHTML = "Ai pierdut!";
                text.style.color = 'red';

            }
           // rundeJucate++;
           // text3.innerHTML = "Au mai ramas "+ (runde-rundeJucate) +" runde";
       // }
        
    }))


}
game();