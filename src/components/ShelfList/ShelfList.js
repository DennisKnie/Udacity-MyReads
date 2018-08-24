import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import BookDetails from '../BookDetails/BookDetails';
import BookList from '../BookList/BookList';

class ShelfList extends Component {
  state = {
    book: {},
    isModalOpen: false,
  };

  static propTypes = {
    books: PropTypes.array.isRequired,
    onShelfUpdate: PropTypes.func.isRequired,
  };

  handleModal = book => {
    this.setState(state => ({ isModalOpen: !state.isModalOpen, book }));
  };

  render() {
    // We use location to determine whether to display a link
    // to add new books to track on the main route
    const { location, books, shelves, onShelfUpdate } = this.props;

    if (location.pathname === '/') {
      // Map over all available bookshelves and render them
      return (
        <div className="container">
          {shelves.map(shelf => (
            <BookList
              books={books.filter(book => book.shelf === shelf)}
              key={shelf}
              onModal={this.handleModal}
              onShelfUpdate={onShelfUpdate}
              shelf={shelf}
            />
          ))}
          <BookDetails
            book={this.state.book}
            isOpen={this.state.isModalOpen}
            onModal={this.handleModal}
          />
        </div>
      );
    } else if (location.pathname === '/search') {
      // Just show a list of search results
      return (
        <div className="container">
          <BookList
            books={books}
            onModal={this.handleModal}
            onShelfUpdate={onShelfUpdate}
          />
          <BookDetails
            book={this.state.book}
            isOpen={this.state.isModalOpen}
            onModal={this.handleModal}
          />
        </div>
      );
    }
  }
}

export default withRouter(ShelfList);
