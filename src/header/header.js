import React from "react";
import "./header.css";
import logo from "./assets/gamekyo-logo.png";
import login from "./assets/header-user.png";
import search from "./assets/header-search.png";

export class Header extends React.Component {

  constructor(props) {
    super(props);

    this.loginSelected = this.loginSelected.bind(this);

    this.state = {
      isOn: new Array(7).fill(false)
    };
  }

  menuSelected(e, index) {
    const isOn = this.state.isOn.fill(false);
    isOn[index] = true;

    this.setState({
      isOn
    });
  }

  loginSelected() {
    this.props.onLogginSelected(true);
  }

  render() {
    const menuArray = [
      "Accueil",
      "News",
      "Blogs",
      "Vidéos",
      "Tests",
      "Previews",
      "Dossiers"
    ];

    return (
      <div className="header-global">
        <div className="header-main">
          <img className="header-logo" src={logo} alt="Logo" />
          <img
            className="header-login"
            src={login}
            alt="Login"
            onClick={this.loginSelected}
          />
        </div>
        <div className="header-subbar">
          {menuArray.map((elem, index) => (
            <a
              key={"menu-"+index}
              className={"menu" + (this.state.isOn[index] ? " isOn" : "")}
              onClick={e => this.menuSelected(e, index)}
            >
              {elem}
            </a>
          ))}

          <img className="header-search" src={search} alt="Search" />
          <input placeholder="Un jeu, une actu, un test ?" />
        </div>
      </div>
    );
  }
}
