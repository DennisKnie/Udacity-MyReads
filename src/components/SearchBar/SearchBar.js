import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';

class SearchBar extends Component {
  state = {
    query: '',
  };

  static propTypes = {
    onUpdateQuery: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.searchInput.focus();
  }

  onInputChange = query => {
    this.setState({ query: query.trim() });
    this.props.onUpdateQuery(query);
  };

  render() {
    return (
      <div>
        <form className="search-bar">
          <div className="search-bar__button">
            <ArrowLeft className="search-bar__icon" size={48} />
            <Link to="/" className="search-bar__link">
              Close Search
            </Link>
          </div>
          <input
            className="search-bar__input"
            onChange={e => this.onInputChange(e.target.value)}
            onKeyPress={e => e.which === 13 && e.preventDefault()}
            placeholder="Type and search by author or title..."
            ref={input => {
              this.searchInput = input;
            }}
            type="text"
            value={this.state.query}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
