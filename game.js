let userScore = 0;
let compScore = 0;
let msg = document.querySelector("#msg");
let user = document.querySelector("#you");
let comp = document.querySelector("#comp");

// functions or methods of game
const drawGame = () => {
    msg.innerText = "Game draw , Try again.";
    msg.style.backgroundColor = "rgb(10, 9, 9)";
    msg.style.border = "black";
    msg.style.color = "white";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        user.innerText = userScore;
        msg.innerText = "You win..";
        // msg.innerText = `You win, Your ${userChoice} beats ${cmpChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        msg.style.border = "green";

    } else {
        compScore++;
        comp.innerText = compScore;
        msg.innerText = "You lose!!";
        // msg.innerText = `You lose!!, Your ${cmpChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
    }
}

// Generate computer choice     step3 - to make this game
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    return options[Math.floor(Math.random() * 3)];
    // const rndIdx = Math.floor(Math.random() * 3);
    // return options[rndIdx];
}
/*-----------------------*/


// Play Game --->    step2 - to make this game
// user choice
const playGame = (userChoice) => {
    console.log("User choise is = ", userChoice);
    // computer choice
    const cmpChoice = genCompChoice();
    console.log("computer choice is = ", cmpChoice);

    // now the Important logic behind the game           step4 - to make this game
    if (userChoice === cmpChoice) {
        // draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // paper , scissor
            userWin = cmpChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // rock ,scissor
            userWin = cmpChoice === "scissor" ? false : true;
        }
        else {
            // rock, paper
            userWin = cmpChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};
/*-----------------------*/


//choice Selection   step1 - to make this game
const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked!!", userChoice);s
        playGame(userChoice);
    });
});
/*-----------------------*/

