const rowIsTaken = board => {
    if(!board) throw new "The board is required";
    for ( let row = 0 ; row < 3 ; row++){
        if(board[row][0] === 'X' && board[row][1] === 'X' && board[row][2] === 'X'){
            return 'X Is A WINNER';
        }
        if(board[row][0] === 'O' && board[row][1] === 'O' && board[row][2] === 'O'){
            return 'O Is A WINNER';
        }
    }
    

};

module.exports = {
    rowIsTaken,
};