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
        <div>
          <h3>
            $
            {item.title}
          </h3>
          <button type="button" id={item.id}>Remove</button>
        </div>,
      );
      return item;
    });
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
  books: PropTypes.objectOf(Array).isRequired,
};
const mapStateToProps = (state) => state;
export default connect(mapStateToProps)(BookList);
