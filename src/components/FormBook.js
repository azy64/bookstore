import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addBook } from '../redux/books/books';

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
      const { counter } = this.props;
      const book = {
        title: title.value,
        author: author.value,
        id: counter,
      };
      const { dispatch } = this.props;
      dispatch(addBook(book));
      title.value = '';
      author.value = '';
    }
  }

  render() {
    return (
      <div>
        <form>
          <div id="book_title">
            <input type="text" aria-labelledby="book_title" id="title" placeholder="Book title" />
          </div>
          <div id="book_author">
            <input type="text" aria-labelledby="book_title" placeholder="Book Author" id="author" />
          </div>
          <div id="save">
            <button type="button" onClick={this.save}>Save</button>
          </div>
        </form>
      </div>
    );
  }
}
FormBook.propTypes = {
  counter: PropTypes.number.isRequired,
  dispatch: PropTypes.instanceOf(Function).isRequired,
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(FormBook);
