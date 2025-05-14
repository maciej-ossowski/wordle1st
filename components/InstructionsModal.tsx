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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Play</h2>
        
        <div className="space-y-4 text-gray-600">
          <p>Guess the word in 6 tries.</p>
          
          <div>
            <p className="mb-2">Each guess must be a valid 5-letter word.</p>
            <p className="mb-2">The color of the tiles will change to show how close your guess was:</p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
                <span>Green: Letter is in the correct spot</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                <span>Yellow: Letter is in the word but in the wrong spot</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                <span>Gray: Letter is not in the word</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <button
            onClick={onClose}
            className="w-full bg-carry1st-blue text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Got it!
          </button>
          
          <button
            onClick={() => {
              onDontShowAgainChange(!dontShowAgain);
              onClose();
            }}
            className="w-full bg-transparent text-gray-600 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors border border-gray-300"
          >
            {dontShowAgain ? 'Show on start again' : "Don't show again"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionsModal; 