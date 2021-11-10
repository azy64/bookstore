import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayBOOKS = () => {
    const tmp = [];
    console.log(this.props);
    const { books } = this.props;
    books.map((item) => {
      tmp.push(
        <div key={item.id}>
          <span>
            {item.title}
          </span>
          <button type="button" id={item.id}>Remove</button>
          <br />
        </div>,
      );
      return item;
    });
    return tmp;
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
  books: PropTypes.instanceOf(Array).isRequired,
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(BookList);
