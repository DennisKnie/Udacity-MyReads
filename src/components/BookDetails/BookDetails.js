import React, { Component } from 'react';
import Modal from 'react-modal';

class BookDetails extends Component {
  render() {
    const { book, isOpen, onModal } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        contentLabel="Book Details"
        onRequestClose={onModal}
        closeTimeoutMS={200}
        className="book-details"
      >
        <h1 onClick={onModal} className="book-details__title" >{book.title}</h1>
        <h3 className="book-details__subtitle" >{book.subtitle}</h3>
        <p className="book-details__description" >{book.description}</p>
      </Modal>
    );
  }
}

export default BookDetails;
