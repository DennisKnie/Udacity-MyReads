import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="error">
    <span className="error__emoji" role="img" aria-labelledby="Dizzy">
      😵
    </span>
    <h1 className="error__title">We are so sorry!</h1>
    <div className="widget">
      <h3 className="widget__header">
        We couldn't find what you were looking for
      </h3>
      <p className="widget__message">
        However, you might discover some pretty interesting things inside some
        of the books in your collection!
      </p>
    </div>
    <div className="button">
      <Link to="/" replace className="button__link">
        Back Home
      </Link>
    </div>
  </div>
);

export default NotFound;
