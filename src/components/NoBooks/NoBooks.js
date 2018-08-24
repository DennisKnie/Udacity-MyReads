import React from 'react';

const NoBooks = () => {
  return (
    <div className="placeholder">
      <span
        role="img"
        aria-labelledby="Confounded"
        className="placeholder__emoji"
      >
        🤓
      </span>
      <p className="placeholder__message">
        The book you don't read won't help.
      </p>
    </div>
  );
};

export default NoBooks;
