import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import GameBoard from '@/components/GameBoard';
import { useRouter } from 'next/router';

export default function GameOfTheDay() {
  const router = useRouter();
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const wordLength = 5;
  const maxGuesses = 6;

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return null;
} 