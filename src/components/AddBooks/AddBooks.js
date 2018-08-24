import React from 'react';
import { HashLoader } from 'react-spinners';
import NoBooks from '../NoBooks/NoBooks';
import SearchBar from '../SearchBar/SearchBar';
import ServerError from '../ServerError/ServerError';
import ShelfList from '../ShelfList/ShelfList';

const AddBooks = (props) => {
  const { error, hasError, isFetching, onSearch, onUpdateBook, searchResults } = props;

  if (hasError) {
    // Wait, something went wrong, handle the case gracefully
    return <ServerError error={error} />;
    // Let the user know we are busy fetching data
  } else if (searchResults && searchResults.length > 0) {
    // Finally have something here
    return (
      <div>
        <SearchBar onUpdateQuery={onSearch} />
        {isFetching ? (
          <div className="sweet-loading">
            <HashLoader
              color={'#8e91a9'}
              loading={isFetching}
              size={100}
            />
          </div>
        ) : (
          <div className="top-margin">
            <ShelfList books={searchResults} onShelfUpdate={onUpdateBook} />
          </div>
        )}
      </div>
    );
  } else {
    // No books to display
    return (
      <div>
        <SearchBar onUpdateQuery={onSearch} />
        <div className="top-margin">
          <NoBooks />
        </div>
      </div>
    );
  }
};

export default AddBooks;
