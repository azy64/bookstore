import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayBOOKS = () => {
    const tmp = [];
    // console.log(this.props);
    const { props } = this;
    const { books } = props.bookReducer;
    books.map((item) => {
      tmp.push(
        <div key={item.id}>
          <span>
            {item.title}
          </span>
          <button type="button" onClick={this.remove} id={item.id}>Remove</button>
          <br />
        </div>,
      );
      return item;
    });
    return tmp;
  }

  remove = (e) => {
    const id = parseInt(e.target.id, 10);
    const { dispatch } = this.props;
    dispatch(removeBook(id));
  }

  render() {
    // this.displayBOOKS();
    // const { books } = this.props;
    return (
      <div>
        {
        this.displayBOOKS()
        }
      </div>
    );
  }
}

BookList.propTypes = {
  bookReducer: PropTypes.instanceOf(Object).isRequired,
  dispatch: PropTypes.instanceOf(Function).isRequired,
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(BookList);
