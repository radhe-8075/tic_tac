
confetti();
let player = "X";
let isGameActive = true;


// Player click function
function playerclick(cellid) {

    if (!isGameActive) {
        alert("Please restart the game!");
        return;
    }

    let cell = document.getElementById(cellid);

    if (cell.innerHTML !== "") {
        alert("Ye box already filled hai!");
        return;
    }

    cell.innerHTML = player;

    if (checkwinner()) {
        return;
    }

    if (checkdraw()) {
        return;
    }

    player = player === "X" ? "O" : "X";

    document.getElementById("turn").innerHTML = player + "'s turn";
}


// Winner checking function
function checkwinner() {

    let c1 = document.getElementById("c1").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;

    let c4 = document.getElementById("c4").innerHTML;
    let c5 = document.getElementById("c5").innerHTML;
    let c6 = document.getElementById("c6").innerHTML;

    let c7 = document.getElementById("c7").innerHTML;
    let c8 = document.getElementById("c8").innerHTML;
    let c9 = document.getElementById("c9").innerHTML;

    let winningPatterns = [
        [c1, c2, c3],
        [c4, c5, c6],
        [c7, c8, c9],

        [c1, c4, c7],
        [c2, c5, c8],
        [c3, c6, c9],

        [c1, c5, c9],
        [c3, c5, c7]
    ];

    for (let pattern of winningPatterns) {

        if (
            pattern[0] !== "" &&
            pattern[0] === pattern[1] &&
            pattern[1] === pattern[2]
        ) {

            document.getElementById("turn").innerHTML =
                pattern[0] + " Wins!";

            isGameActive = false;

            alert(pattern[0] + " is the winner!");

            return true;
        }
    }

    return false;
}


// Draw checking function
function checkdraw() {

    let cells = document.querySelectorAll(".cell");

    for (let cell of cells) {

        if (cell.innerHTML === "") {
            return false;
        }
    }

    document.getElementById("turn").innerHTML = "Game Draw!";

    isGameActive = false;

    return true;
}


// Restart game function
function restartGame() {

    location.reload();

}
