const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = ()=> {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }

    //play match 
    const playMatch = ()=> {
        const options = document.querySelectorAll('.option button');
        const playerHand = document.querySelector('.player_hand');
        const computerHand = document.querySelector('.computer_hand');
        const hands = document.querySelectorAll('.hand img');

        hands.forEach(hand  => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })
        })

        //computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option) => {
            option.addEventListener('click', function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() => {
                    //compare hand
                    compareHand(this.textContent, computerChoice);

                    //update Image
                    playerHand.src = `res/${this.textContent}.png`;
                    computerHand.src = `res/${computerChoice}.png`;
                }, 2000)

                //animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';

                //keep 2 hands are rocks when playing the match
                playerHand.src = 'res/rock.png';
                computerHand.src = `res/rock.png`;
            })
        })    
    }

    const updateScore = ()=> {
        const playerScore = document.querySelector('.player_score p');
        const computerScore = document.querySelector('.computer_score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHand = (playerChoice, computerChoice) => {
        //update text 
        const winner = document.querySelector('.winner');

        //check for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie";
            return;
        }

        //check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }

        //check for Scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }

        //check for Paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Computer wins';
                cScore++;
                updateScore();
                return;
            }
        }
    }

    //call the inner function
    startGame();
    playMatch();
}

//start the game function
game();