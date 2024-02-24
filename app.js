const btn = document.querySelector('button');
const output = document.querySelector('.output');
const headArea = document.querySelector('h2');
const player = {
                name : "Bhargav",
                points : 0
            };
output.innerHTML = `Welcome ${player.name} <br>Click the Button`;
output.style.fontSize = "2em"; 
btn.addEventListener('click',runcode)

function runcode(){
    player.points=0;
    output.innerHTML = "";
    let rolls = getRandom(10);
    console.log(rolls)
    for(let i=0;i<rolls;i++){
        let playerRoll = getRandom(6);
        let computerRoll = getRandom(6);
        let message = playGame(playerRoll,computerRoll);
        let val=`${playerRoll} vs ${computerRoll} ${message}`;
        output.innerHTML += `${val} <br>`;
        }
        updateScore(rolls);
        console.log('click');
    }
   
function updateScore(roundsPlayed){
    headArea.textContent = `${player.name} Won ${player.points} in ${roundsPlayed} Rounds`;
}

function playGame(val1,val2){
    let res;
    if(val1 == val2){
        res="Tie Game";
    }
    else if(val1 > val2){
        res=`${player.name}`+" wins";
        player.points++;
    }
    else{
        res="Computer wins"
    }
    return res;
}

function getRandom(max){
    let res = Math.floor(Math.random()*max)+1;
    return res;
}