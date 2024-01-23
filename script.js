let playGame = confirm("Shall We Play The Rock , Papper , Scissor Game ? ");

if(playGame){

    let playerChoice = prompt("Please Enter The Rock , Papper , Scissor");

    if(playerChoice){

        let playerOne = playerChoice.trim().toLowerCase();
        
        if(playerOne === "rock" || playerOne === "papper" || playerOne === "scissor")
        {
            let computerChoice = Math.floor(Math.random() * 3 + 1 );

            let computer = computerChoice === 1 ? "rock":computerChoice ===2 ? "papper" : "scissor";

            let result = playerOne === computer ? "Tie Game " 
             :playerOne === "rock" && computer === "papper" ? `playerOne : ${playerOne} \n computer : ${computer} \n Computer Wins`
             :playerOne === "papper" && computer === "scissor" ? `playerOne : ${playerOne} \n computer : ${computer} \n Computer Wins`
             :playerOne === "scissor" && computer === "rock" ? `playerOne : ${playerOne} \n computer : ${computer} \n Computer Wins`
             :`playerOne : ${playerOne} \n computer : ${computer} \n PlayerOne Wins` ;
             alert(result)
             let playAgain = confirm("Play Again ?")
             playAgain ? location.reload() : alert("Ok, Thanks For Playing");
        }
        else
        {
            alert("You Didn't Enter Rock , Papper , Scissor");
            let playAgain = confirm("Play Again ?")
            playAgain ? location.reload() : alert("Ok, Thanks For Playing");
        
        }
    }

    else{
        alert("I Think Your Not Interested , Maybe Next Time You Will Try It ");
    }
}

else
{
    alert("Maybe Next Time");
}