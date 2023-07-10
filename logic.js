let txt=document.getElementById('text');
let btn=document.getElementById('restartbtn');
let boxes=Array.from(document.getElementsByClassName('option'));
const X_TEXT='X';
const O_TEXT='O';
let currentplayer=X_TEXT;
let spaces=Array(9).fill(null);
function startGame() {
     boxes.forEach(box => box.addEventListener('click', boxClicked));
}
function boxClicked(e){
    const id=e.target.id;
    if(!spaces[id]){
    spaces[id]=currentplayer;
    e.target.innerText=currentplayer;
    if(playerhaswon()!==false){
        txt.innerText=`${currentplayer} has won!`
        let winningblocks=playerhaswon();
        winningblocks.forEach(box=>boxes[box].style.backgroundColor='grey');
        return
    }
    currentplayer=currentplayer == X_TEXT ? O_TEXT : X_TEXT;
    }
}
const possibilities=[
    [0,1,2],[0,3,6],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]
function playerhaswon(){
    for (const condition of possibilities) {   
     let [a,b,c]=condition;
    if(spaces[a] && spaces[a]==spaces[b] &&spaces[a]==spaces[c]){
        return [a,b,c];
    }}
    return false;
}
btn.addEventListener('click',restart);
function restart(){
    spaces.fill(null);
    boxes.forEach(box=>{
        box.innerText='';
        box.style.backgroundColor='';
    })
    txt.innerText='TIC TAC TOE';
    
    currentplayer=X_TEXT;
}
startGame()
