import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        let user = {
            name: "Alex",
            hobbies: ["coding", "travel", "tech gadgets"]
        }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Hadi"} age={27} user={user} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App />, window.document.getElementById("app"));
