import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.age = props.age;
  }

  onMakeOlder() {
    this.age += 3;
    console.log(this.age);
  }

  render() {
    return (
      <div>
        <p>This is the Home Component</p>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.age}</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};
