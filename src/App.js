import React from "react";
import "./App.css";
import { Header } from "./header/header.js";
import Modal from "./modal/modal.js";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.hideLogin = this.hideLogin.bind(this);

    this.state = {
      logginModalDisplayed: false
    };
  }

  handleLogin(click) {
    this.setState({
      logginModalDisplayed: click
    });
  }

  hideLogin() {
    this.setState({
      logginModalDisplayed: false
    });
  }

  render() {
    return (
      <div>
        {this.state.logginModalDisplayed === true ? <Modal onCancelSelected={this.hideLogin}/> : null}

        <Header onLogginSelected={this.handleLogin} />
      </div>
    );
  }
}

export default App;
