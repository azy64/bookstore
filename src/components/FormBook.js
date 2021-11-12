import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveBook, increment, normalizeData } from '../redux/books/books';

class FormBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  save = (e) => {
    e.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    if (title.value && author.value) {
      const { props } = this;
      const { dispatch } = this.props;
      const { books } = props.bookReducer;
      const book = {
        title: title.value,
        author: author.value,
        item_id: increment(normalizeData(books)) + 1,
        category: 'fiction',
      };
      dispatch(saveBook(book));
      // dispatch(saveBook(book));
      // dispatch(addBook(book));
      title.value = '';
      author.value = '';
    }
  }

  render() {
    return (
      <div className="form m-b">
        <h2 className="form-title">ADD NEW BOOK</h2>
        <form className=" grid col-3-auto">
          <div id="book_title">
            <input className="form-input" type="text" aria-labelledby="book_title" id="title" placeholder="Book title" />
          </div>
          <div id="book_author">
            <input type="text" className="form-input" aria-labelledby="book_title" placeholder="Book Author" id="author" />
          </div>
          <div id="save" className="text-end">
            <button type="button" className="btn btn-primary" onClick={this.save}>ADD BOOK</button>
          </div>
        </form>
      </div>
    );
  }
}
FormBook.propTypes = {
  bookReducer: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.instanceOf(Function).isRequired,
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(FormBook);
