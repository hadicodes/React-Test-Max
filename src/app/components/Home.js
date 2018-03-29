import React from "react";
import PropTypes from 'prop-types';


export class Home extends React.Component {
  render() {

    return (
      <div>
      <p>This is the Home Component</p>  
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      <button className="btn btn-primary">Make me older!</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}