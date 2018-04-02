import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homelink: "Home"
    };
  }

  onGreet() {
    alert("Hello");
  }

  onChangeLinkName(newName) {
    this.setState({
      homelink: newName
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homelink={this.state.homelink} />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home
              name={"Hadi"}
              initialAge={27}
              greet={this.onGreet}
              changeLink={this.onChangeLinkName.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
