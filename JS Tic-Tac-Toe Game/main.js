let title = document.querySelector('.title');
let turn = 'x';
let squares = [];
let winningOptions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

let gameEnded = false;

function calculateWinner(num1, num2, num3){
    title.innerHTML = `${squares[num1]} wins!`;
    document.getElementById(num1).style.background = 'green';
    document.getElementById(num2).style.background = 'green';
    document.getElementById(num3).style.background = 'green';
    gameEnded = true;
    setInterval(function(){title.innerHTML += '.' }, 1000);  
    setTimeout(function(){location.reload()}, 4000);  
    
}

function winner(){
    for (let i = 1; i < 10; i++){
        squares[i] = document.getElementById(i).innerHTML;
    }
    for (let i = 0; i < winningOptions.length; i++){
        let [a, b, c] = winningOptions[i];
        if (squares[a] === squares[b] && squares[b] === squares[c] && squares[a] !== ''){
            calculateWinner(a, b, c);
            return;
        }
    }
    if (squares[1] !== '' && squares[2] !== '' && squares[3] !== '' && squares[4] !== '' && squares[5] !== '' && squares[6] !== '' && squares[7] !== '' && squares[8] !== '' && squares[9] !== ''){
        title.innerHTML = 'Draw!';
        gameEnded = true;
        setInterval(function(){title.innerHTML += '.' }, 1000);              
        setTimeout(function(){location.reload()}, 4000);  
    }
} 

function game(id){
    if (!gameEnded) {
        let element = document.getElementById(id);
        if (turn === 'x' && element.innerHTML === ''){
            element.innerHTML = 'x';
            turn = 'o';
            title.innerHTML = 'O\'s turn';
        } else if (turn === 'o' && element.innerHTML === ''){
            element.innerHTML = 'o';
            turn = 'x';
            title.innerHTML = 'X\'s turn';
        }
    winner();
    }  
}