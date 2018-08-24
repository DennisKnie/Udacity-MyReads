import React from 'react';
import PropTypes from 'prop-types';
import { startCase } from 'lodash';

const TitleBar = ({ shelf }) => <h2 className="title-bar">{startCase(shelf)}</h2>;

TitleBar.propTypes = {
  shelf: PropTypes.string,
};

export default TitleBar;
