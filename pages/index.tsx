import React, { useState, useCallback, useEffect } from 'react';
import Head from 'next/head';
import GameBoard from '@/components/GameBoard';
import Keyboard from '@/components/Keyboard';
import GameMessage from '@/components/GameMessage';

export default function Home() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [usedLetters, setUsedLetters] = useState<{
    [key: string]: 'correct' | 'present' | 'absent' | undefined;
  }>({});
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  
  const wordLength = 5;
  const maxGuesses = 6;
  const targetWord = 'hello'; // This would normally come from your game logic

  const checkGuess = (guess: string) => {
    const result: { [key: string]: 'correct' | 'present' | 'absent' } = {};
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');

    // First, mark correct letters
    guessLetters.forEach((letter, i) => {
      if (letter === targetLetters[i]) {
        result[letter] = 'correct';
        targetLetters[i] = '#'; // Mark as used
      }
    });

    // Then, mark present letters
    guessLetters.forEach((letter, i) => {
      if (!result[letter]) {
        const targetIndex = targetLetters.indexOf(letter);
        if (targetIndex !== -1) {
          result[letter] = 'present';
          targetLetters[targetIndex] = '#'; // Mark as used
        } else {
          result[letter] = 'absent';
        }
      }
    });

    setUsedLetters(prev => ({
      ...prev,
      ...result
    }));

    // Check if won
    if (guess === targetWord) {
      setIsWin(true);
      setIsGameOver(true);
    }
    // Check if lost (this was the last guess)
    else if (guesses.length + 1 >= maxGuesses) {
      setIsGameOver(true);
    }
  };

  const handleKeyPress = useCallback((key: string) => {
    if (isGameOver) return;
    
    if (key === '⌫' || key === 'Backspace') {
      setCurrentGuess(prev => prev.slice(0, -1));
    } else if (key === 'ENTER' || key === 'Enter') {
      if (currentGuess.length === wordLength) {
        checkGuess(currentGuess);
        setGuesses(prev => [...prev, currentGuess]);
        setCurrentGuess('');
      }
    } else {
      const letter = key.toLowerCase();
      if (letter.length === 1 && letter >= 'a' && letter <= 'z' && currentGuess.length < wordLength) {
        setCurrentGuess(prev => prev + letter);
      }
    }
  }, [currentGuess, guesses.length, maxGuesses, wordLength, isGameOver]);

  // Handle physical keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        handleKeyPress(e.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyPress]);

  return (
    <>
      <Head>
        <title>Wordle1st - Game of the Day</title>
        <meta name="description" content="Play today's Wordle1st challenge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-start min-h-[calc(100vh-4rem)] py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-4">
          <GameBoard
            guesses={guesses}
            currentGuess={currentGuess}
            wordLength={wordLength}
            maxGuesses={maxGuesses}
            targetWord={targetWord}
          />
        </div>
        <Keyboard 
          onKeyPress={handleKeyPress}
          usedLetters={usedLetters}
        />
        <GameMessage
          isWin={isWin}
          isGameOver={isGameOver}
          targetWord={targetWord}
        />
      </div>
    </>
  );
} 