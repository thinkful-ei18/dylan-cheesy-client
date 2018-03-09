import React from 'react';
import { connect } from 'react-redux';
import { fetchCheeses } from '../actions/cheese';
import AddCheese from './add-cheese';

export class CheeseList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCheeses());
  }

  render() {
    const cheeseListItems = this.props.cheeses.map((cheese, index) => {
      return <li key={index}>{cheese.name}</li>;
    });

    return (
      <div className="cheeseListContainer">
        <AddCheese />
        <ul className="cheeseList">{cheeseListItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cheeses: state.cheese.cheeses
  };
};

export default connect(mapStateToProps)(CheeseList);
