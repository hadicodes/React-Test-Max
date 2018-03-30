import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      name: props.name
    }
    console.log(this.state.name);
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })
    console.log(this.age);
  }

  appendName() {
    this.setState({
      name: this.state.name + ` Yousufi`
    })
  }

  render() {
    return (
      <div>
        <p>This is the Home Component</p>
        <button onClick={() => this.appendName()}>Name: {this.state.name}</button>
        <p>Age: {this.state.age}</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number
};
