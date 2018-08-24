import React from 'react';
import { Link } from 'react-router-dom';
import { Book } from 'react-feather';
import { HashLoader } from 'react-spinners';
import Header from '../Header/Header';
import ShelfList from '../ShelfList/ShelfList';
import ServerError from '../ServerError/ServerError';
import NoBooks from '../NoBooks/NoBooks';

const App = props => {
  const { books, error, hasError, isFetching, onUpdateBook, shelves } = props;

  if (hasError) {
    // Wait, something went wrong, handle the case gracefully
    return <ServerError error={error} />;
    // Let the user know we are busy fetching data
  } else if (isFetching) {
    return (
      <div className="sweet-loading">
        <HashLoader color={'#8e91a9'} loading={isFetching} size={100} />
      </div>
    );
  } else if (books.length > 0 && shelves.length > 0) {
    // Finally we have something here
    return (
      <div>
        <Header />
        <ShelfList
          books={books}
          onShelfUpdate={onUpdateBook}
          shelves={shelves}
        />
        <div className="search">
          <Link to="/search" className="search__button">
            Add Book
            <Book className="search__icon" />
          </Link>
        </div>
      </div>
    );
  } else {
    // No books to display
    return (
      <div>
        <Header />
        <NoBooks />
        <div className="search">
          <Link to="/search" className="search__button">
            Add Book
            <Book className="search__icon" />
          </Link>
        </div>
      </div>
    );
  }
};

export default App;
