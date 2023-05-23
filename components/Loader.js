import React from 'react';

const Loader = ({ isLoading }) => {
  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 mr-3 text-gray-500" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-2c0 3.86-3.14 7-7 7-3.86 0-7-3.14-7-7H6c0 2.21 1.791 4 4 4zm10-9.29A7.963 7.963 0 0012 4V2c4.411 0 8 3.589 8 8h-2c0-3.86-3.14-7-7-7-3.86 0-7 3.14-7 7h-2c0-4.411 3.589-8 8-8z"
            />
          </svg>
          <span>Loading...</span>
        </div>
      )}
      {/* Additional content */}
    </div>
  );
};

export default Loader;
