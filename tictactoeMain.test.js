const {
    rowIsTaken,
    diagonalIsTaken,
    columnIsTaken,
    IsBoardFull
} = require("./tictactoeMain.js");

//a game is over when all fields in a row are taken by a player

describe("Test a game is over when all fields in a row are taken by a player ", () => {
    ;
    test('it throws an error if not send the board ', () => {
        expect(() => {
            rowIsTaken();
        }).toThrow("The board is required");
    });
    test('return X ,If all three cells in any row are X', () => {
        //Arrange 
        const board = [
            ["X", "X", "X"],
            [null, null, "O"],
            ["X", null, "O"]
        ];
        //Act 
        const result = rowIsTaken(board);
        //Assert
        expect(result).toBe('Player X Is A WINNER');
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
        expect(result).toBe('Player O Is A WINNER');
    });

});

//a game is over when all fields in a diagonal are taken by a player
describe("Test a game is over when all fields in a diagonal are taken by a player ", () => {
    ;
    test('it throws an error if not send the board ', () => {
        expect(() => {
            diagonalIsTaken();
        }).toThrow("The board is required");
    });
    test('return X ,If all three cells in any diagonal are X', () => {
        //Arrange 
        const board = [
            ["X", "X", null],
            [null, "X", "O"],
            ["X", null, "X"]
        ];
        //Act 
        const result = diagonalIsTaken(board);
        //Assert
        expect(result).toBe('Player X Is A WINNER');
    });
    test('return O ,If all three cells in any diagonal are O', () => {
        //Arrange 
        const board = [
            ["X", "O", "O"],
            [null, "O", "X"],
            ["O", null, "X"]
        ];
        //Act 
        const result = diagonalIsTaken(board);
        //Assert
        expect(result).toBe('Player O Is A WINNER');
    });

});

//a game is over when all fields in a column are taken by a player
describe("Test a game is over when all fields in a column are taken by a player ", () => {
    ;
    test('it throws an error if not send the board ', () => {
        expect(() => {
            columnIsTaken();
        }).toThrow("The board is required");
    });
    test('return X ,If all three cells in any column are X', () => {
        //Arrange 
        const board = [
            ["X", "X", null],
            ["X", null, "O"],
            ["X", null, "O"]
        ];
        //Act 
        const result = columnIsTaken(board);
        //Assert
        expect(result).toBe('Player X Is A WINNER');
    });
    test('return O ,If all three cells in any column are O', () => {
        //Arrange 
        const board = [
            ["O", "X", "O"],
            ["X", null, "O"],
            ["O", null, "O"]
        ];
        //Act 
        const result = columnIsTaken(board);
        //Assert
        expect(result).toBe('Player O Is A WINNER');
    });

});

//a game is over when all fields are taken

describe("a game is over when all fields are taken", () => {
    ;
    test('it throws an error if not send the board ', () => {
        expect(() => {
            IsBoardFull();
        }).toThrow("The board is required");
    });
    test('return true ,If all fields are taken', () => {
        //Arrange 
        const board = [
            ["X", "X", "O"],
            ["O", "X", "X"],
            ["X", "O", "O"]
        ];
        //Act 
        const result = IsBoardFull(board);
        //Assert
        expect(result).toBe(true);
    });

    test('return false  ,If some of fields are not taken', () => {
        //Arrange 
        const board = [
            ["X", "X", "O"],
            ["O", null, "X"],
            ["X", "O", "O"]
        ];
        //Act 
        const result = IsBoardFull(board);
        //Assert
        expect(result).toBe(false);
    });

});

