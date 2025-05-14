import React from 'react';

interface KeyboardProps {
  onKeyPress: (key: string) => void;
  usedLetters?: {
    [key: string]: 'correct' | 'present' | 'absent' | undefined;
  };
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress, usedLetters = {} }) => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'],
  ];

  const getKeyClass = (key: string) => {
    const baseClass = "h-10 sm:h-12 rounded-md text-sm font-semibold flex items-center justify-center select-none transition-colors";
    const widthClass = key === 'ENTER' || key === '⌫' ? 'w-12 sm:w-14' : 'w-8 sm:w-9';
    
    const status = usedLetters[key.toLowerCase()];
    let colorClass = "bg-gray-100 text-gray-900 hover:bg-gray-200";
    
    if (status === 'correct') {
      colorClass = "bg-green-500 text-white hover:bg-green-600";
    } else if (status === 'present') {
      colorClass = "bg-yellow-500 text-white hover:bg-yellow-600";
    } else if (status === 'absent') {
      colorClass = "bg-gray-400 text-white hover:bg-gray-500";
    }
    
    return `${baseClass} ${widthClass} ${colorClass}`;
  };

  return (
    <div className="w-full max-w-lg mx-auto px-1 sm:px-0">
      <div className="bg-white rounded-lg shadow-lg px-2 sm:px-3 py-3 sm:py-4">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          {rows.map((row, i) => (
            <div key={i} className="flex justify-center gap-1 sm:gap-1.5">
              {row.map((key) => (
                <button
                  key={key}
                  onClick={() => onKeyPress(key)}
                  className={getKeyClass(key)}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyboard; 