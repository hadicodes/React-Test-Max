import React from "react";
import PropTypes from 'prop-types';


export class Home extends React.Component {
  render() {

    return (
      <div>
        <p>Name: {this.props.user.name}</p>
        <h4>User's Hobbies</h4>
        <ul>{this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}</ul>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
}