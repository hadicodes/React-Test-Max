import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      name: props.name,
      homeLink: "Changed Link"
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
      name: this.state.name + ` loves learning new stuff`
    })
  }

  onChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }
 
  render() {
    return (
      <div>
        <p>This is the Home Component</p>
        <button onClick={() => this.appendName()}>Name: {this.state.name}</button>
        <p>Age: {this.state.age}</p>
        <button onClick={() => this.onMakeOlder()} className="btn btn-primary">Make me older!</button>
        <hr />
        <button onClick={this.props.greet}>Say Hello</button>
        <hr />
        <input type="text" value={this.props.initialLinkName}/>
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header</button>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  greet: PropTypes.func
};
