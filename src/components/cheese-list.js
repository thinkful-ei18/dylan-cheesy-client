import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const cheeseListItems = this.props.cheeses.map((cheese, index) => {
      return <li key={index}>{cheese}</li>;
    });

    return (
      <div className="cheeseListContainer">
        <ul className="cheeseList">{cheeseListItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cheeses: state.cheeses
  };
};

export default connect(mapStateToProps)(CheeseList);
