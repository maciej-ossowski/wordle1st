import React from 'react';

interface InstructionsModalProps {
  isOpen: boolean;
  onClose: () => void;
  dontShowAgain: boolean;
  onDontShowAgainChange: (value: boolean) => void;
}

const InstructionsModal: React.FC<InstructionsModalProps> = ({
  isOpen,
  onClose,
  dontShowAgain,
  onDontShowAgainChange,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-md mx-auto">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">How to Play</h2>
        
        <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base">
          <p>Guess the word in 6 tries.</p>
          
          <div>
            <p className="mb-2">Each guess must be a valid 5-letter word.</p>
            <p className="mb-2">The color of the tiles will change to show how close your guess was:</p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded"></div>
                <span>Green: Letter is in the correct spot</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-yellow-500 rounded"></div>
                <span>Yellow: Letter is in the word but in the wrong spot</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-400 rounded"></div>
                <span>Gray: Letter is not in the word</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            onClick={onClose}
            className="w-full bg-carry1st-blue text-white py-2.5 px-4 rounded-md hover:bg-blue-600 transition-colors text-sm sm:text-base"
          >
            Got it!
          </button>
          
          <button
            onClick={() => {
              onDontShowAgainChange(!dontShowAgain);
              onClose();
            }}
            className="w-full bg-transparent text-gray-600 py-2.5 px-4 rounded-md hover:bg-gray-100 transition-colors border border-gray-300 text-sm sm:text-base"
          >
            {dontShowAgain ? 'Show on start again' : "Don't show again"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal; 