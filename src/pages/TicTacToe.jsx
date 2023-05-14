import { useState } from "react";
import Board from "../components/TicTac/Board";
import "./TicTacToe.css";

const TicTacToe = () => {

    const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [xIsNext, setXIsNext] = useState(true);

    function calculateWinner(squares) {
      const lines = [
        [0, 1, 2], // 0
        [3, 4, 5], // 1
        [6, 7, 8], // 2
        [0, 3, 6], // 3
        [1, 4, 7], // 4
        [2, 5, 8], // 5
        [0, 4, 8], // 6
        [2, 4, 6], // 7
      ];

      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
          squares[a] &&
          squares[a] === squares[b] &&
          squares[a] === squares[c]
        ) {
          return squares[a];
        }
      }
      return null;
    }

    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O") + "";
    }

    const handleClick = (i) => {
      const newSquares = [...current.squares];
      if (calculateWinner(newSquares) || newSquares[i]) {
        return;
      }

      newSquares[i] = xIsNext ? "X" : "O";
      setXIsNext(!xIsNext);
      setHistory([...history, { squares: newSquares }]);
    };

    const jumpTo = (step) => {
      setHistory(history.slice(0, step + 1));
      setXIsNext(step % 2 === 0);
    };

    const moves = history.map((step, move) => {
      const desc = move ? "Go to move#" + move : "Go to game start";
      return (
        <li key={move}>
          <button className="move-button" onClick={() => jumpTo(move)}>
            {desc}
          </button>
        </li>
      );
    });

  return (
    <div className="ticTac">
      <h1>Tic Tac Toe</h1>
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
        </div>
        <div className="game-history">
          <ol style={{ listStyle: "none" }}>{moves}</ol>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
