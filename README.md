# TicTacToeKata-TDD
Solve TicTacToe Kata using Test Driven Development

Instructions on how to use the app 
"Getting Started: 
git clone https://github.com/MarwaMohammedHanafy/TicTacToeKata-TDD 
cd TicTacToeKata-TDD 
To install dependencies:npm install 
To Run the tests: npm test

I start with take each rule from game rules and treat it as a single functionality and make a test suit for it.
Using the test driven development to build its body.

Components: -
tictactoeMain Component’s public function: 
•	rowIsTaken
•	diagonalIsTaken
•	columnIsTaken
•	IsBoardFull
•	setField
•	switchTurn

I use TDD approach. 
1.	a game is over when all fields in a row are taken by a player
2.	a game is over when all fields in a diagonal are taken by a player
3.	a game is over when all fields in a column are taken by a player
4.	a game is over when all fields are taken
5.	a player can take a field if not already taken
6.	players take turns taking fields until the game is over 
These 2 rules is embedded inside the code.
•	there are two players in the game (X and O) 
•	a game has nine fields in a 3x3 grid

Future phases:
•   Add User Interface 
