import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import InstructionsModal from './InstructionsModal';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showInstructions, setShowInstructions] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  // Load preferences from localStorage
  useEffect(() => {
    const dontShow = localStorage.getItem('dontShowInstructions') === 'true';
    setDontShowAgain(dontShow);
    if (!dontShow) {
      setShowInstructions(true);
    }
  }, []);

  // Listen for toggle instructions event
  useEffect(() => {
    const handleToggleInstructions = () => {
      setShowInstructions(true);
    };

    window.addEventListener('toggle-instructions', handleToggleInstructions);
    return () => window.removeEventListener('toggle-instructions', handleToggleInstructions);
  }, []);

  // Notify about modal state changes
  useEffect(() => {
    window.dispatchEvent(new CustomEvent('modal-state-change', { 
      detail: { isOpen: showInstructions }
    }));
  }, [showInstructions]);

  const handleDontShowAgainChange = (value: boolean) => {
    setDontShowAgain(value);
    localStorage.setItem('dontShowInstructions', value.toString());
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
      <InstructionsModal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
        dontShowAgain={dontShowAgain}
        onDontShowAgainChange={handleDontShowAgainChange}
      />
    </div>
  );
};

export default Layout; 