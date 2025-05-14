import React from 'react';

interface GameBoardProps {
  guesses: string[];
  currentGuess: string;
  wordLength: number;
  maxGuesses: number;
  targetWord: string;
}

const GameBoard: React.FC<GameBoardProps> = ({
  guesses,
  currentGuess,
  wordLength,
  maxGuesses,
  targetWord,
}) => {
  const emptyRows = Array(Math.max(0, maxGuesses - guesses.length - 1)).fill('');

  const getLetterStatus = (letter: string, index: number, guess: string) => {
    if (letter === targetWord[index]) return 'correct';
    if (targetWord.includes(letter)) return 'present';
    return 'absent';
  };

  const getTileClass = (letter: string, index: number = -1, guess: string = '') => {
    const baseClass = "w-12 h-12 sm:w-14 sm:h-14 border-2 flex items-center justify-center text-xl sm:text-2xl font-bold uppercase transition-colors";
    
    if (!letter) return `${baseClass} border-gray-200`;
    
    if (index === -1) {
      return `${baseClass} border-gray-400 bg-gray-100`;
    }

    const status = getLetterStatus(letter, index, guess);
    switch (status) {
      case 'correct':
        return `${baseClass} border-green-500 bg-green-500 text-white`;
      case 'present':
        return `${baseClass} border-yellow-500 bg-yellow-500 text-white`;
      case 'absent':
        return `${baseClass} border-gray-400 bg-gray-400 text-white`;
      default:
        return `${baseClass} border-gray-400 bg-gray-100`;
    }
  };

  return (
    <div className="grid gap-1.5 sm:gap-2">
      {/* Previous guesses */}
      {guesses.map((guess, i) => (
        <div key={i} className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {guess.split('').map((letter, j) => (
            <div
              key={j}
              className={getTileClass(letter, j, guess)}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}

      {/* Current guess */}
      {guesses.length < maxGuesses && (
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {currentGuess.split('').map((letter, i) => (
            <div
              key={i}
              className={getTileClass(letter)}
            >
              {letter}
            </div>
          ))}
          {Array(wordLength - currentGuess.length)
            .fill('')
            .map((_, i) => (
              <div
                key={i + currentGuess.length}
                className={getTileClass('')}
              />
            ))}
        </div>
      )}

      {/* Empty rows */}
      {emptyRows.map((_, i) => (
        <div key={i} className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {Array(wordLength)
            .fill('')
            .map((_, j) => (
              <div
                key={j}
                className={getTileClass('')}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard; 