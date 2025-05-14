import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface GameMessageProps {
  isWin: boolean;
  isGameOver: boolean;
  targetWord: string;
}

const GameMessage: React.FC<GameMessageProps> = ({ isWin, isGameOver, targetWord }) => {
  const { width, height } = useWindowSize();
  const [showModal, setShowModal] = useState(true);

  if (!isGameOver || !showModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {isWin && <Confetti width={width} height={height} />}
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4 text-center relative">
        {/* Close button */}
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className={`text-2xl font-bold mb-4 ${isWin ? 'text-green-500' : 'text-red-500'}`}>
          {isWin ? 'Congratulations!' : 'Game Over'}
        </h2>
        <p className="text-gray-600 mb-4">
          {isWin 
            ? 'Well done! Come back tomorrow for a new word challenge.' 
            : `The word was ${targetWord.toUpperCase()}. Better luck tomorrow!`}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          A new word will be available in 24 hours
        </p>
        <button
          onClick={() => setShowModal(false)}
          className="w-full bg-carry1st-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default GameMessage; 