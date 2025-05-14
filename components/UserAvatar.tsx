import React, { useState } from 'react';

interface UserAvatarProps {
  name: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Generate a random color based on the name
  const getRandomColor = (name: string) => {
    const colors = [
      'bg-pink-500',
      'bg-purple-500',
      'bg-indigo-500',
      'bg-blue-500',
      'bg-teal-500',
      'bg-green-500',
      'bg-yellow-500',
      'bg-orange-500',
      'bg-red-500',
    ];
    
    // Use the name to consistently get the same color for the same user
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  const avatarColor = getRandomColor(name);
  const firstLetter = name.charAt(0).toUpperCase();

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className={`w-8 h-8 ${avatarColor} rounded-full flex items-center justify-center text-white font-semibold`}>
          {firstLetter}
        </div>
      </button>

      {isDropdownOpen && (
        <>
          {/* Overlay to close dropdown when clicking outside */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Dropdown menu */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
            <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
              Signed in as <span className="font-medium">{name}</span>
            </div>
            <button
              onClick={() => {
                // Handle logout here
                console.log('Logging out...');
              }}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserAvatar; 