const {
    rowIsTaken
} = require("./tictactoeMain.js");

describe("Test a game is over when all fields in a row are taken by a player ", () => {;
    test('it throws an error if not send the board ', () => {
        expect(() => {
            rowIsTaken();
        }).toThrow("The board is required");
    });
    test('return X ,If all three cells in any row are X', () => {
        //Arrange 
        const board = [
            ["X", "X", "X"],
            [null, null, "0"],
            ["X", null, "0"]
        ];
        //Act 
        const result = rowIsTaken(board);
        //Assert
        expect(result).toBe('X Is A WINNER');
    });
    test('return O ,If all three cells in any row are O', () => {
        //Arrange 
        const board = [
            ["O", "O", "O"],
            [null, null, "X"],
            ["O", null, "O"]
        ];
        //Act 
        const result = rowIsTaken(board);
        //Assert
        expect(result).toBe('O Is A WINNER');
    });
    
});

