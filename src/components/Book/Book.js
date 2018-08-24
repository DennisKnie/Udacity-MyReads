import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Folder } from 'react-feather';
import { etAl } from '../../helpers/helpers';

class Book extends Component {
  state = {
    book: this.props.book,
  };

  static propTypes = {
    book: PropTypes.object.isRequired,
    onShelfUpdate: PropTypes.func.isRequired,
  };

  onSelect = (book, newShelf) => {
    this.setState(() => ({ [book.shelf]: newShelf }));
    this.props.onShelfUpdate(book, newShelf);
  };

  onBookDetails = () => {
    this.props.onModal(this.state.book);
  };

  render() {
    const { book } = this.props;
      
      //add fallbacks for missing cover images and title
      const coverImg = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : null
      const title = book.title ? book.title : "No title available"

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <img
              className="book-top__cover"
              onClick={this.onBookDetails}
              src={book.imageLinks.thumbnail}
              alt={`${book.title} cover`}
            
            <div className={'bookshelf-switcher ' + (book.shelf ? book.shelf : 'none')}>
              <Folder className="bookshelf-switcher__icon" />
              <select
                className={
                  'bookshelf-switcher__menu'
                }
                onChange={e => this.onSelect(book, e.target.value)}
                value={book.shelf || ''}
              >
                <option
                  className="bookshelf-switcher__option"
                  value=""
                  disabled
                >
                  Move to...
                </option>
                <option className="bookshelf-switcher__option" value="none">
                  None
                </option>
                <option
                  className="bookshelf-switcher__option"
                  value="currentlyReading"
                >
                  Currently Reading
                </option>
                <option
                  className="bookshelf-switcher__option"
                  value="wantToRead"
                >
                  Want to Read
                </option>
                <option className="bookshelf-switcher__option" value="read">
                  Read
                </option>
              </select>
            </div>
          </div>
        </div>
        <p className="book__title">{book.title}</p>
        {book.authors ? (
          <p className="book__byline">by {etAl(book.authors)}</p>
        ) : (
          <p className="book__byline">
            <em>N.A.</em>
          </p>
        )}
      </div>
    );
  }
}

export default Book;
