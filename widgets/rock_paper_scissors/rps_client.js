function($scope) {

    /* widget controller */
    var c = this; //function
    $scope.data.playerScore = 0;
    $scope.data.computerScore = 0;
    $scope.data.playerChoice = "";
    $scope.data.computer_choice = "";
    $scope.data.win_msg = ""

    //Receives the Players Choice
    $scope.sendData = function (choice) {
        $scope.data.playerChoice = choice;
        var player = choice;
        var computer = getComputerChoice();
        $scope.data.computer_choice = computer;
        var winner = getWinner(player, computer);
        updateScores(winner);
    }

    //Reset the game to default
    $scope.reset = function () {
        $scope.data.playerScore = 0;
        $scope.data.computerScore = 0;
        $scope.data.playerChoice = "";
        $scope.data.computer_choice = "";
        $scope.data.win_msg = ""
    }

    // Function that determines the Computers Choice
    function getComputerChoice() {
        var num = Math.floor(Math.random() * 3);
        switch (num) {
            case 0: {
                return "Rock";
            }
            case 1: {
                return "Paper";
            }
            case 2: {
                return "Scissors"
            }
        }
    }

    // Function to determine the winner
    function getWinner(player, computer) {
        if (player === computer) { return "Tie"; }

        if (player === "Rock" && computer === "Paper" ||
            player === "Paper" && computer === "Scissors" ||
            player === "Scissors" && computer === "Rock") {
            return "Computer";
        }

        return "Player";
    }

    // Function to update scores
    function updateScores(winner) {
        switch (winner) {
            case "Tie": {
                $scope.data.win_msg = "It was a tie";
                break;
            }
            case "Computer": {
                $scope.data.win_msg = "The Computer wins!";
                $scope.data.computerScore++;
                break;
            }
            case "Player": {
                $scope.data.win_msg = "You win!";
                $scope.data.playerScore++;
                break;
            }
        }
    }

}