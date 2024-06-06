let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset_button");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let win = document.querySelector("#win");
let player = document.querySelector("#player");


let turnO = true; //PlayerX and PlayerO



const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
        location.reload();
};


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

let count = 0;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        console.log("clicked");

        if (turnO) {//player O
            box.innerText = "O";
            turnO = false;
            player.innerText = "Player 2's Turn !";
        } else { //player X
            box.innerText = "X";
            turnO = true;
            player.innerText = "Player 1's Turn !";
        }

        box.disabled = true;
        if (count === 9){
            console.log("draw");
           draw();
        }
        checkWinner();
    });
});

const draw = () =>{
    msgContainer.classList.remove("hide");
    msg.innerText = 'DRAW !';
};

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};


const showwinner = (winner) => {
    msg.innerText = 'Congratulatoins ! Winner';
    win.innerText = winner;
    msgContainer.classList.remove("hide");
    disableBoxes();
};



const checkWinner = () => {
    for (let pattern of winPatterns) {
        // console.log(pattern);
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,
        //      boxes[pattern[1]].innerText,
        //      boxes[pattern[2]].innerText
        //     );
        let pos1val = boxes[pattern[0]].innerText;

        let pos2val = boxes[pattern[1]].innerText;

        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {

            if (pos1val === pos2val && pos2val === pos3val) {
                showwinner(pos1val);
            }
        }

    }
};




newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame)



