import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { getDataFromApi, removeOneBook, normalizeData } from '../redux/books/books';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const { dispatch } = this.props;
    dispatch(getDataFromApi());
  }

  displayBOOKS = () => {
    const tmp = [];
    const { props } = this;
    const { books } = props.bookReducer;
    const temp = normalizeData(books);
    temp.map((item) => {
      tmp.push(
        <div key={item.id} className="book white shadow-bottom grid col-3-auto border-gray" style={{ marginBottom: 10 }}>
          <div>
            <h3 className="m category">
              {item.category}
              {' '}
            </h3>
            <h2 className="title m">
              {item.title}
            </h2>
            <h5 className="m author">{item.author || 'Author'}</h5>
            <div className="group-link">
              <button type="button" className="btn-link">Comments</button>
              <button type="button" className="btn-link blr" onClick={this.remove} id={item.id}>Remove</button>
              <button type="button" className="btn-link">Edit</button>
            </div>
          </div>
          <div className="p grid col-2">
            <AiOutlineLoading3Quarters style={{ fontSize: 100, color: '#0290ff', marginTop: 30 }} />
            <div>
              <h4 className="percent">80%</h4>
              <span className="completed">Completed</span>
            </div>
          </div>
          <div className="">
            <span className="d-b current-chap p">Current Chapter</span>
            <span className="d-b p">Introduction</span>
            <button type="button" className="btn btn-primary m text-upper">Update progress</button>
          </div>

        </div>,
      );
      return item;
    });
    return tmp;
  }

  remove = (e) => {
    const id = parseInt(e.target.id, 10);
    const { dispatch } = this.props;
    dispatch(removeOneBook(`${id}`));
  }

  render() {
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
