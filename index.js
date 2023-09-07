let array = ["Rock", "Paper", "Scissor"];
      let Wins = 0;
      let Losses = 0;
      let Tie = 0;
      let Result = "";
      let Sign;

      function updateScore() {
        document.getElementById("wins").innerHTML = Wins;
        document.getElementById("losses").innerHTML = Losses;
        document.getElementById("tie").innerHTML = Tie;
        document.getElementById("result").innerHTML = Result;
        document.getElementById("sign").innerHTML = Sign;
      }

      document.getElementById("rock").addEventListener("click", function () {
        compare("Rock");
      });

      document.getElementById("paper").addEventListener("click", function () {
        compare("Paper");
      });

      document.getElementById("scissor").addEventListener("click", function () {
        compare("Scissor");
      });

      document.getElementById("reset").addEventListener("click", function () {
        Wins = 0;
        Losses = 0;
        Tie = 0;
        Result = "";
        Sign = "";
        updateScore();
      });

      function compare(userChoice) {
        let randomSign = array[Math.floor(Math.random() * array.length)];
        Sign = `You Picked ${userChoice} : ${randomSign} Picked by Computer`;
        if (
          (userChoice === "Rock" && randomSign === "Rock") ||
          (userChoice === "Paper" && randomSign === "Paper") ||
          (userChoice === "Scissor" && randomSign === "Scissor")
        ) {
          Tie++;
          Result = "Tie";
        } else if (
          (userChoice === "Rock" && randomSign === "Scissor") ||
          (userChoice === "Paper" && randomSign === "Rock") ||
          (userChoice === "Scissor" && randomSign === "Paper")
        ) {
          Wins++;
          Result = "Win";
        } else {
          Losses++;
          Result = "Lose";
        }
        updateScore();
      }