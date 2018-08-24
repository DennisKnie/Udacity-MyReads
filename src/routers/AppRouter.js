import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { debounce } from 'lodash';
import { getAll, search, update } from '../api/BooksAPI';
import AddBooks from '../components/AddBooks/AddBooks';
import App from '../components/App/App';
import NotFound from '../components/NotFound/NotFound';

class AppRouter extends Component {
  state = {
    books: [],
    searchResults: [],
    error: {},
    hasError: false,
    isFetching: true,
    shelves: [],
  };

  componentDidMount() {
    this.getAllBooks();
  }

  getAllBooks = () => {
    getAll()
      .then(books => {
        // Save reference of available shelves to loop over
        let shelves = [...new Set(books.map(book => book.shelf))];
        // Save state and update isFetching property
        this.setState(() => ({ books, shelves, isFetching: false }));
      })
      // Catch any error
      .catch(err => this.setState(() => ({ hasError: true, error: err })));
  };

  searchBook = debounce(query => {
    this.setState(() => ({ isFetching: true }));
    // Merging state using a function as update is asynchronous
    search(query, 20)
      .then(results => {
        if (results instanceof Array) {
          const searchResults = results.reduce((acc, item) => {
            const updatedItem = this.state.books.find(book => book.id === item.id);
            updatedItem ? acc.push(updatedItem) : acc.push(item);
            return acc;
          }, []);
          this.setState(state => ({ searchResults, isFetching: false }));
        } else {
          this.setState(() => ({ isFetching: false }));
        }
      })
      // Catch any error
      .catch(err => this.setState(() => ({ hasError: true, error: err })));
  }, 300);

  updateBook = (book, shelf) => {
    this.setState(() => ({ isFetching: true }));
    update(book, shelf)
      .then(() => {
        // Update the book
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books
            .filter(oldStateBook => oldStateBook.id !== book.id)
            .concat([book]),
          isFetching: false,
        }));
      })
      // Catch any error
      .catch(err => this.setState(() => ({ hasError: true, error: err })));
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <App {...this.state} onUpdateBook={this.updateBook} />
            )}
          />
          <Route
            path="/search"
            render={() => (
              <AddBooks
                {...this.state}
                onSearch={this.searchBook}
                onUpdateBook={this.updateBook}
              />
            )}
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
