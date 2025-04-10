import React, { useEffect, useState, useRef } from "react";
import "../styles/wordsearch.css";
import confetti from "canvas-confetti";

const SIZE = 15;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const WordSearch = ({ wordList }) => {
  const [grid, setGrid] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [mouseDown, setMouseDown] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [score, setScore] = useState(0);
  const finalVictorySoundRef = useRef(null);
  const [highlightedCells, setHighlightedCells] = useState([]);

  useEffect(() => {
    generateGrid();
    setStartTime(Date.now());
  }, []);

  const generateGrid = () => {
    const newGrid = Array(SIZE)
      .fill(null)
      .map(() => Array(SIZE).fill(""));

    const directions = [
      [0, 1], // → derecha
      [1, 0], // ↓ abajo
      [0, -1], // ← izquierda
      [-1, 0], // ↑ arriba
    ];

    wordList.forEach((word) => {
      let placed = false;

      while (!placed) {
        const dir = directions[Math.floor(Math.random() * directions.length)];
        const row = Math.floor(Math.random() * SIZE);
        const col = Math.floor(Math.random() * SIZE);

        if (canPlace(word, newGrid, row, col, dir)) {
          placeWord(word, newGrid, row, col, dir);
          placed = true;
        }
      }
    });

    // Fill empty cells
    for (let i = 0; i < SIZE; i++) {
      for (let j = 0; j < SIZE; j++) {
        if (!newGrid[i][j]) {
          newGrid[i][j] = ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
        }
      }
    }

    setGrid(newGrid);
  };

  const canPlace = (word, grid, row, col, dir) => {
    const [dx, dy] = dir;
    for (let i = 0; i < word.length; i++) {
      const x = row + dx * i;
      const y = col + dy * i;
      if (x < 0 || y < 0 || x >= SIZE || y >= SIZE) return false;
      if (grid[x][y] && grid[x][y] !== word[i].toUpperCase()) return false;
    }
    return true;
  };

  const placeWord = (word, grid, row, col, dir) => {
    const [dx, dy] = dir;
    for (let i = 0; i < word.length; i++) {
      const x = row + dx * i;
      const y = col + dy * i;
      grid[x][y] = word[i].toUpperCase();
    }
  };

  // Event handlers for touch devices
  const handleTouchStart = (row, col) => {
    setMouseDown(true);
    setSelectedCells([[row, col]]);
  };

  const handleTouchMove = (row, col) => {
    if (mouseDown) {
      setSelectedCells((prev) => {
        const alreadyIncluded = prev.some(([r, c]) => r === row && c === col);
        return alreadyIncluded ? prev : [...prev, [row, col]];
      });
    }
  };

  const handleTouchEnd = () => {
    setMouseDown(false);
    finalizeSelection();
  };

  // Event handlers for mouse devices
  const handleMouseDown = (row, col) => {
    if (!isTouchDevice()) {
      setMouseDown(true);
      setSelectedCells([[row, col]]);
    }
  };

  const handleMouseEnter = (row, col) => {
    if (mouseDown && !isTouchDevice()) {
      setSelectedCells((prev) => {
        const alreadyIncluded = prev.some(([r, c]) => r === row && c === col);
        return alreadyIncluded ? prev : [...prev, [row, col]];
      });
    }
  };

  const handleMouseUp = () => {
    if (!isTouchDevice()) {
      setMouseDown(false);
      finalizeSelection();
    }
  };

  // Finalize word selection logic
  const finalizeSelection = () => {
    const word = selectedCells.map(([r, c]) => grid[r][c]).join("");
    const reversed = word.split("").reverse().join("");
    const validWord = wordList.find(
      (w) => w.toUpperCase() === word || w.toUpperCase() === reversed
    );

    if (validWord && !foundWords.includes(validWord)) {
      setFoundWords([...foundWords, validWord]);
      setScore(score + validWord.length * 10);

      // Play sound for found word
      const foundSound = new Audio("/sounds/prewin.mp3");
      foundSound.play();

      setHighlightedCells((prev) => [...prev, ...selectedCells]);
    }

    if (foundWords.length + 1 === wordList.length) {
      triggerConfetti();
    }

    setSelectedCells([]);
  };

  const getElapsedTime = () => {
    const seconds = Math.floor((Date.now() - startTime) / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" + secs : secs}`;
  };

  const isCellSelected = (r, c) => {
    return selectedCells.some(([row, col]) => row === r && col === c);
  };

  const isCellHighlighted = (r, c) => {
    return highlightedCells.some(([row, col]) => row === r && col === c);
  };

  // Function to trigger confetti
  const triggerConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
    });
    finalVictorySoundRef.current?.play();
  };

  // Function to detect if it's a touch device
  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  return (
    <div className="wordsearch-container" onMouseLeave={() => setMouseDown(false)}>
      <div className="score-time">
        <div>⏱ Tiempo: {getElapsedTime()}</div>
        <div>⭐ Puntaje: {score}</div>
      </div>

      <div className="grid">
        {grid.map((row, i) => (
          <div key={i} className="row">
            {row.map((letter, j) => (
              <span
                key={j}
                className={`cell 
                    ${isCellSelected(i, j) ? "selected" : ""} 
                    ${isCellHighlighted(i, j) ? "highlighted" : ""}`}
                onMouseDown={() => handleMouseDown(i, j)}
                onMouseEnter={() => handleMouseEnter(i, j)}
                onMouseUp={handleMouseUp}
                onTouchStart={() => handleTouchStart(i, j)} 
                onTouchMove={() => handleTouchMove(i, j)} 
                onTouchEnd={handleTouchEnd} 
              >
                {letter}
              </span>
            ))}
          </div>
        ))}
      </div>

      <div className="wordlist">
        {wordList.map((word, idx) => (
          <span
            key={idx}
            className={`word ${foundWords.includes(word) ? "found" : ""}`}
          >
            {word}
          </span>
        ))}
      </div>

      <audio ref={finalVictorySoundRef} preload="auto">
        <source src="/sounds/win.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default WordSearch;
