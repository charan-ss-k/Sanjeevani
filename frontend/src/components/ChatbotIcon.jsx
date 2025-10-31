import React from 'react';

const ChatbotIcon = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.836 8.836 0 01-4.43-1.253l-2.434.812a1 1 0 01-1.253-1.253l.812-2.434A8.836 8.836 0 012 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9a1 1 0 11-2 0 1 1 0 012 0zm5 0a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
};

export default ChatbotIcon;