import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import UserAvatar from './UserAvatar';
import Logo from './Logo';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleModalStateChange = (event: CustomEvent<{ isOpen: boolean }>) => {
      setIsModalOpen(event.detail.isOpen);
    };

    window.addEventListener('modal-state-change', handleModalStateChange as EventListener);
    return () => window.removeEventListener('modal-state-change', handleModalStateChange as EventListener);
  }, []);

  const getLinkClass = (path: string) => {
    const isActive = router.pathname === path && !isModalOpen;
    const baseClass = "px-3 py-2 text-sm font-medium transition-colors rounded-full";
    return isActive
      ? `${baseClass} bg-carry1st-blue text-white`
      : `${baseClass} text-gray-600 hover:text-gray-900 hover:bg-gray-100`;
  };

  const getHowToPlayClass = () => {
    const baseClass = "px-3 py-2 text-sm font-medium transition-colors rounded-full";
    return isModalOpen
      ? `${baseClass} bg-carry1st-blue text-white`
      : `${baseClass} text-gray-600 hover:text-gray-900 hover:bg-gray-100`;
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="w-12 h-12 flex items-center justify-center">
              <Logo />
            </div>
            <span className="ml-1 text-xl font-semibold text-carry1st-blue">Wordle1st</span>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={getLinkClass('/')}
            >
              Game of the Day
            </Link>
            <Link
              href="/leaderboard"
              className={getLinkClass('/leaderboard')}
            >
              Leaderboard
            </Link>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('toggle-instructions'))}
              className={getHowToPlayClass()}
            >
              How to Play
            </button>
            <a
              href="https://shop.carry1st.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Carry1st Shop
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {/* User Avatar */}
            <UserAvatar name="Maciej" />

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex justify-end">
                <Link
                  href="/"
                  className={`inline-block ${getLinkClass('/')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Game of the Day
                </Link>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/leaderboard"
                  className={`inline-block ${getLinkClass('/leaderboard')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Leaderboard
                </Link>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('toggle-instructions'));
                    setIsMobileMenuOpen(false);
                  }}
                  className={`inline-block ${getHowToPlayClass()}`}
                >
                  How to Play
                </button>
              </div>
              <div className="flex justify-end">
                <a
                  href="https://shop.carry1st.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Carry1st Shop
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 