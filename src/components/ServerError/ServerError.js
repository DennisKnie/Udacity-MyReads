import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Error = ({ error }) => (
  <div className="error">
    <span className="error__emoji" role="img" aria-labelledby="Confounded">
      😖
    </span>
    <h1 className="error__title">Something went wrong...&nbsp;</h1>
    <div className="widget">
      <h3 className="widget__header">
        Error: {(error.name = 'This is weird ...')}
      </h3>

      <p className="widget__message">
        Message:{' '}
        {(error.message = "I wish I could tell you what happened '¯\\_(ツ)_/¯'")}
      </p>
    </div>
    <div className="button">
      <Link to="/" replace className="button__link">
        Be safe buddy, go home!
      </Link>
    </div>
  </div>
);

Error.propTypes = {
  error: PropTypes.object.isRequired,
};

export default Error;
