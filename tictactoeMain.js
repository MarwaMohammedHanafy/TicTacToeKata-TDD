/**
 * 
 * @param {*} board 
 * @returns 
 */
const rowIsTaken = board => {
    if (!board) throw new "The board is required";
    for (let row = 0; row < 3; row++) {
        if (board[row][0] === 'X' && board[row][1] === 'X' && board[row][2] === 'X') {
            return 'Player X Is A WINNER';
        }
        if (board[row][0] === 'O' && board[row][1] === 'O' && board[row][2] === 'O') {
            return 'Player O Is A WINNER';
        }
    }
};
/**
 * 
 * @param {*} board 
 * @returns 
 */
const diagonalIsTaken = board => {
    if (!board) throw new "The board is required";
    if ((board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')
        || (board[2][0] === 'O' && board[1][1] === 'O' && board[0][2] === 'O'))
        return 'Player O Is A WINNER';
    if ((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X'))
        return 'Player X Is A WINNER';
};
/**
 * 
 * @param {*} board 
 * @returns 
 */
const columnIsTaken = board => {
    if (!board) throw new "The board is required";
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === 'X' && board[1][col] === 'X' && board[2][col] === 'X') {
            return 'Player X Is A WINNER';
        }
        if (board[0][col] === 'O' && board[1][col] === 'O' && board[2][col] === 'O') {
            return 'Player O Is A WINNER';
        }
    }
};


module.exports = {
    rowIsTaken,
    diagonalIsTaken,
    columnIsTaken
};