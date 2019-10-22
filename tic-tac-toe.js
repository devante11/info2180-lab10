window.onload = function(){ 
    let r = document.getElementById("status");
    var symbol = "X";
    var turns = 0;
    let t = document.getElementById("board").children;
    var state = new Array(9).fill(""); 
    p.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    addSquares(); 
    clickButton();

    
function drawCheck(){ // Checks if game ends in a draw
    if(turns === 9 && !(r.classList.contains("you-won"))){
        r.classList.add("draw")
        r.innerHTML = "Game Ends In A Draw! Press New Game To Begin!";
         }
    }

function clickButton(){ // adds a click even to the New Game Button
    console.log(state);
    document.getElementsByClassName("btn")[0].onclick = function(){
         turns = 0;
         state = new Array(9).fill("");
         r.classList.remove("you-won")
         r.innerHTML = "Move your mouse over a square and click to play an X or an O.";
         for(let index = 0; index < t.length; index++){
             t[index].innerHTML = "";
             t[index].classList.remove("X","O");
            }
        }
    }
function addEvent(index){ //Adds a click event to the squares
        x[index].addEventListener("click",function(){
            if(t[index].innerHTML === "" && !(r.classList.contains("you-won")) ){ // Disallows clicking after a win
                t[index].classList.add(symbol);
                t[index].innerHTML = symbol;
                state[index] = t[index].innerHTML;
                turns++;
                if(turns > 4){ // doesn't check winner until a winner could possibly be selected
                    if(getWinner()){
                        const victory = `Congratulations! ${symbol} is the Winner` //Creates a literal instead of multiple nested if statements
                        r.classList.add("you-won");
                        r.innerHTML = victory;
                    }
                }
                switchTurn(symbol);
                if(turns === 9){ // doesn't check for a draw until all possible moves are completed 
                    drawCheck();
                }
            }
        })
    }                                 
function addSquares(){  //adds the square class to the divs
    for(let index = 0; index < t.length; index++){
        t[index].classList.add("square");
        addEvent(index); //adds click effect to each square
        addHover(index); // adds hover effect to each square
    }    
}   
function switchTurn(){ // switches between X and O's
    if(symbol === "X"){
        symbol = "O";
    }else{
        symbol = "X";
    }
}
function addHover(index){ // adds hover element and title
     t[index].addEventListener("mouseover", function(){
            t[index].classList.add("hover");
        })
     t[index].addEventListener("mouseout", function(){
            t[index].classList.remove("hover");
        })
    }    
function getWinner(){// Calculates if there is a winner    
        for(let i = 0; i < state.length; i += 3){
            if(state[i] !== "" && state[i] === state[i+1] && state[i] === state[i+2]){
                return true;}}
        for(let i = 0; i < state.length; i += 1){
            if(state[i] !== "" && state[i] === state[i+3] && state[i] === state[i+6]){
                return true;}}
        for(let i = 0; i <= 2; i += 2){
             if(state[i] !== "" && state[i] === state[4] && state[i] === state[4+4-i]){
                return true;}
        }
    }
}
        /*
        if(state[0] !== "" && state[0] === state[1] && state[0] === state[2]){
            return true;
        }else if((state[3] !== "") && state[3] === state[4] && state[3] === state[5]){
            return true;
        }else if((state[6] !== "") && state[6] === state[7] && state[6] === state[8]){           
            return true;
        }else if((state[0] !== "") && state[0] === state[3] && state[0] === state[6]){          
            return true;
        }else if((state[1] !== "") && state[1] === state[4] && state[1] === state[7]){
            return true;
        }else if((state[2] !== "") && state[2] === state[5] && state[2] === state[8]){
            return true;
        }else if((state[0] !== "") && state[0] === state[4] && state[0] === state[8]){
            return true;
        }else if((state[2] !== "") && state[2] === state[4] && state[2] === state[6]){
            return true;
        } 
    }*/