import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';
import TitleBar from '../TitleBar/TitleBar';

const BookList = ({ books, onModal, onShelfUpdate, shelf }) => {
  return (
    <div>
      {shelf && books.length > 0 ? <TitleBar shelf={shelf} /> : null}
      <ul className="books">
        {books.map(book => (
          <li key={book.id} className="books__item">
            <Book book={book} onModal={onModal} onShelfUpdate={onShelfUpdate}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfUpdate: PropTypes.func.isRequired,
  shelf: PropTypes.string,
};

export default BookList;
