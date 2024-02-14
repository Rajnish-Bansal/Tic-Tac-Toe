let resetButton = document.getElementById("button"); 
const cells = Array.from(document.querySelectorAll("#cell"));
let currentPlayer = "X";

let x_Won = 0;
let x_Lose = 0;
let x_Draw = 0;
let score_x = 0;

let o_Won = 0;
let o_Lose = 0;
let o_Draw = 0;
let score_o = 0;


document.getElementById('player').innerHTML = 'Player ' + currentPlayer;
let gameOver = false; 

// function to switch players
function changeTurn(){
         if(currentPlayer == 'X'){
            return currentPlayer = "O";
        }
        else{
            currentPlayer="X";
        }
    }

//scorboard update
function scoreBoard(winner){
    if(winner == 'X'){
        // score_x =+ 1;
        x_Won += 1;
        o_Lose += 1;
        score_x += 2;
        document.getElementById('x_won').innerHTML = x_Won ;
        document.getElementById('o_lose').innerHTML = o_Lose;
        document.getElementById('totalscore-x').innerHTML = score_x + ' points';
        document.getElementById('mx_won').innerHTML = x_Won ;
        document.getElementById('mo_lose').innerHTML = o_Lose;
        document.getElementById('totalscore-mx').innerHTML = score_x + ' points';
    }
    else if(winner == 'O'){
        // score_o =+ 1;
        o_Won += 1;
        x_Lose += 1;
        score_o += 2;
        document.getElementById('o_won').innerHTML = o_Won ;
        document.getElementById('x_lose').innerHTML = x_Lose;
        document.getElementById('totalscore-o').innerHTML = score_o + ' points' ;
        document.getElementById('mo_won').innerHTML = o_Won ;
        document.getElementById('mx_lose').innerHTML = x_Lose;
        document.getElementById('totalscore-mo').innerHTML = score_o + ' points' ;
    }
    else{
        x_Draw += 1;
        o_Draw += 1;
        score_o += 1;
        score_x += 1;
        document.getElementById('o_draw').innerHTML = o_Draw ;
        document.getElementById('x_draw').innerHTML = x_Draw ;
        document.getElementById('totalscore-x').innerHTML = score_x + ' points' ;
        document.getElementById('totalscore-o').innerHTML = score_o + ' points'; 
        document.getElementById('mo_draw').innerHTML = o_Draw ;
        document.getElementById('mx_draw').innerHTML = x_Draw ;
        document.getElementById('totalscore-mx').innerHTML = score_x + ' points' ;
        document.getElementById('totalscore-mo').innerHTML = score_o + ' points'; 
    }
}

//add eventlistener to cells
for(let i in cells){
        cells[i].addEventListener('click', () =>{
            play(cells[i]);
        })
}

//function to switch players and end game 
function play(box){
    if(gameOver == false){
        if(box.innerHTML==''){
            box.innerText = currentPlayer;
            checkWin();
            changeTurn();    
            document.getElementById('player').innerHTML = "Player" + ' ' + currentPlayer;
        }
        else{
            alert('already marked')
        }       
    }
    else if(gameOver == true){
        document.getElementById('player').innerHTML = "Game Over";
    }
}

//initialising reset function
function resetGame(){
    for(let k in cells){
        cells[k].innerText="";
    }
    document.getElementById('player').innerHTML = "Player" +' ' + currentPlayer ;
    document.getElementById('winner').innerHTML = "" ;
    document.getElementById('gif1').style.display = 'block';
    document.getElementById('gif2').style.display = 'none' ;
    document.getElementById('gif3').style.display = 'none' ;
    gameOver = false;
}

//initialising new game function
function newGame(){
  for(let k in cells){
      cells[k].innerText="";
  }
  document.getElementById('player').innerHTML = "Player" +' ' + currentPlayer ;
  document.getElementById('winner').innerHTML = "" ;
  document.getElementById('gif1').style.display = 'block';
  document.getElementById('gif2').style.display = 'none' ;
  document.getElementById('gif3').style.display = 'none' ;

  document.getElementById('x_won').innerHTML = 0 ;
  document.getElementById('o_lose').innerHTML = 0;
  document.getElementById('totalscore-x').innerHTML = 0;
  document.getElementById('mx_won').innerHTML = 0 ;
  document.getElementById('mo_lose').innerHTML = 0;
  document.getElementById('totalscore-mx').innerHTML = 0;
  document.getElementById('o_won').innerHTML = 0 ;
  document.getElementById('x_lose').innerHTML = 0;
  document.getElementById('totalscore-o').innerHTML = 0;
  document.getElementById('mo_won').innerHTML = 0 ;
  document.getElementById('mx_lose').innerHTML = 0;
  document.getElementById('totalscore-mo').innerHTML = 0;
  document.getElementById('o_draw').innerHTML = 0 ;
  document.getElementById('x_draw').innerHTML = 0 ;
  document.getElementById('mo_draw').innerHTML = 0 ;
  document.getElementById('mx_draw').innerHTML = 0 ;

  score_o = 0;
  score_x = 0;
  x_Won = 0;
  x_Lose = 0;
  x_Draw = 0;
  o_Draw = 0;
  o_Lose = 0;
  o_Won = 0;
  currentPlayer = "X";
  document.getElementById('player').innerHTML = "Player" + ' ' + currentPlayer;
  gameOver = false;

}

// resetButton.addEventListener('click', () => {
//     resetGame();
// })

function checkWin() {
    const winCombos = [    
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const winCombos2 = [    
        [0, 1, 2, 3, 6],
        [0, 1, 2, 4, 7],
        [0, 1, 2, 5, 8],
        [3, 4, 5, 0, 6],
        [3, 4, 5, 1, 7],
        [3, 4, 5, 2, 8],
        [6, 7, 8, 0, 3],
        [6, 7, 8, 1, 4],
        [6, 7, 8, 2, 5]
    ];
  
    let winner = '';

    for (let i = 0; i < winCombos.length; i++) {
      const [a, b, c] = winCombos[i];
      if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[b].innerText === cells[c].innerText){
        winner = currentPlayer;
        
      }
    }
  
    for (let i = 0; i < winCombos2.length; i++) {
      const [a, b, c, d, e] = winCombos2[i];
      if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[b].innerText === cells[c].innerText && cells[c].innerText === cells[d].innerText && cells[d].innerText === cells[e].innerText){
        winner = currentPlayer;
      }
    }
  
    if (winner) {
      document.getElementById("winner").innerHTML = "Winner is Player " + winner ;
      document.getElementById("gif1").style.display = "none";
      document.getElementById("gif2").style.display = "block";
      document.getElementById("gif3").style.display = "none";
      scoreBoard(winner);
      setTimeout(function(){alert("'Winner is " + winner)}, 500)
      gameOver = true;
      
        // setTimeout(function(){alert(score_x)}, 500)    
    } 
    else if (cells[0].innerText && cells[1].innerText && cells[2].innerText && cells[3].innerText && cells[4].innerText && cells[5].innerText && cells[6].innerText && cells[7].innerText && cells[8].innerText){
      document.getElementById("winner").innerHTML = "It`s a tie";
    //   document.getElementById("player").innerHTML = "Game Over";
      document.getElementById("gif1").style.display = "none";
      document.getElementById("gif2").style.display = "none";
      document.getElementById("gif3").style.display = "block";
      scoreBoard(winner);
      setTimeout(function(){alert("It`s a TIE")}, 500)
      gameOver = true;
    }
  }
  



//checking win condition
// function checkWin(){
//   const winCombos = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],

//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];

//   const winCombos2 = [
//     [0, 1, 2, 3, 6],
//     [0, 1, 2, 4, 7],
//     [0, 1, 2, 5, 8],

//     [3, 4, 5, 0, 6],
//     [3, 4, 5, 1, 7],
//     [3, 4, 5, 2, 8],
    
//     [6, 7, 8, 0, 3],
//     [6, 7, 8, 1, 4],
//     [6, 7, 8, 2, 5]
//   ]

//   for(let j = 0; j< winCombos.length; j++){
//     const [x, y, z,] = winCombos[j];// [0, 1, 2]
//     if (cells[x].innerText && cells[x].innerText === cells[y].innerText && cells[y].innerText === cells[z].innerText) {
//         document.getElementById('winner').innerHTML = "Winner is Player" + ' '+ currentPlayer;
//         document.getElementById('gif1').style.display = 'none' ;
//         document.getElementById('gif2').style.display = 'block' ;
//         document.getElementById('gif3').style.display = 'none' ;
//         // changeTurn = false
//         document.getElementById('player').innerHTML = "Game Over" ;
//         gameOver = true;
//       } 
//     }
    
//     for(let m=0; m<winCombos2.length; m++){
//         const [a, b, c, d, e] = winCombos[m];
//         if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[b].innerText === cells[c].innerText && cells[c].innerText === cells[d].innerText && cells[d].innerText === cells[e].innerText) {
//             document.getElementById('winner').innerHTML = "Winner is Player" + ' '+ currentPlayer;
//             document.getElementById('gif1').style.display = 'none' ;
//             document.getElementById('gif2').style.display = 'block' ;
//             document.getElementById('gif3').style.display = 'none' ;
//             // changeTurn = false
//             document.getElementById('player').innerHTML = "Game Over" ;
//             gameOver = true;
//           }

//         else if(cells[0].innerText && cells[1].innerText && cells[2].innerText && cells[3].innerText && cells[4].innerText && cells[5].innerText && cells[6].innerText && cells[7].innerText && cells[8].innerText){
//             document.getElementById('winner').innerHTML = "It`s a tie";
//             document.getElementById('gif1').style.display = 'none' ;
//             document.getElementById('gif2').style.display = 'none' ;
//             document.getElementById('gif3').style.display = 'block' ;
//             // changeTurn = false
//             document.getElementById('player').innerHTML = "Game Over" ;
//             gameOver = true;
//         }
//     }
// }

// for(let m=0; m<winCombos2.length; m++){
//     const [a, b, c, d, e] = winCombos[m];
//     if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[b].innerText === cells[c].innerText && cells[c].innerText === cells[d].innerText && cells[d].innerText === cells[e].innerText) {
//         document.getElementById('winner').innerHTML = "Winner is Player" + ' '+ currentPlayer;
//         document.getElementById('gif1').style.display = 'none' ;
//         document.getElementById('gif2').style.display = 'block' ;
//         document.getElementById('gif3').style.display = 'none' ;
//         // changeTurn = false
//         document.getElementById('player').innerHTML = "Game Over" ;
//         gameOver = true;
//       }
//     }
