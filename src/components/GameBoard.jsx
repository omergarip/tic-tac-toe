// @ts-nocheck
import React from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = React.useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, cellIndex) => {
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      newGameBoard[rowIndex][cellIndex] = activePlayerSymbol;
      return [...newGameBoard];
    });
    onSelectSquare();
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex} className="game-row">
          <ol>
            {row.map((playerSymbol, cellIndex) => (
              <button
                key={cellIndex}
                onClick={() => handleSelectSquare(rowIndex, cellIndex)}
                className="game-cell"
              >
                {playerSymbol}
              </button>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
