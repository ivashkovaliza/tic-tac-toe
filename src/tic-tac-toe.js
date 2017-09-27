class TicTacToe { 
constructor() { 
this.currentPlayer1 = true; 
this.filledCells = 0; 
this.field = 
[ 
[null, null, null], 
[null, null, null], 
[null, null, null] 
]; 
} 

getCurrentPlayerSymbol() { 

return this.currentPlayer1 ? 'x' : 'o'; 
} 

nextTurn(rowIndex, columnIndex) { 
if (this.field[rowIndex][columnIndex] != null) 
	return;
this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol(); 

this.filledCells += 1; 
this.currentPlayer1 = !this.currentPlayer1; 

} 

isFinished() { 
return this.getWinner() !== null || this.noMoreTurns(); 
} 

getWinner() { 
let winner = null; 
if (this.getFieldValue(0, 0) === this.getFieldValue(1, 1) && this.getFieldValue(1, 1) === this.getFieldValue(2, 2) && this.getFieldValue(1, 1) !== null)
winner = this.getFieldValue(1, 1); 

if (this.getFieldValue(2, 0) === this.getFieldValue(1, 1) && this.getFieldValue(1, 1) === this.getFieldValue(0, 2) && this.getFieldValue(1, 1) !== null)
winner = this.getFieldValue(1, 1);  

if (this.getFieldValue(1, 0) === this.getFieldValue(1, 1) && this.getFieldValue(1, 1) === this.getFieldValue(1, 2) && this.getFieldValue(1, 1) !== null)
winner = this.getFieldValue(1, 1);  

if (this.getFieldValue(0, 1) === this.getFieldValue(1, 1) && this.getFieldValue(1, 1) === this.getFieldValue(2, 1) && this.getFieldValue(1, 1) !== null)
winner = this.getFieldValue(1, 1); 

if (this.getFieldValue(2, 0) === this.getFieldValue(1, 0) && this.getFieldValue(1, 0) === this.getFieldValue(0, 0) && this.getFieldValue(2, 0) !== null)
winner = this.getFieldValue(2, 0); 

if (this.getFieldValue(2, 0) === this.getFieldValue(2, 1) && this.getFieldValue(2, 1) === this.getFieldValue(2, 2) && this.getFieldValue(2, 0) !== null)
winner = this.getFieldValue(2, 0);

if (this.getFieldValue(0, 2) === this.getFieldValue(1, 2) && this.getFieldValue(1, 2) === this.getFieldValue(2, 2) && this.getFieldValue(0, 2) !== null)
winner = this.getFieldValue(0, 2);

if (this.getFieldValue(0, 0) === this.getFieldValue(0, 1) && this.getFieldValue(0, 1) === this.getFieldValue(0, 2) && this.getFieldValue(0, 2) !== null)
winner = this.getFieldValue(0, 2); 

return winner; 
} 


noMoreTurns() { 
return this.filledCells === 9; 
} 

isDraw() { 
return this.getWinner() === null && this.noMoreTurns(); 
} 

getFieldValue(rowIndex, colIndex) { 
return this.field[rowIndex][colIndex]; 
} 
} 

module.exports = TicTacToe;