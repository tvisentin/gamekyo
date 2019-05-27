import React from "react";
import "./header.css";
import logo from "./assets/gamekyo-logo.png";
import login from "./assets/header-user.png";
import search from "./assets/header-search.png";
import Modal from "../modal/modal.js";

export class Header extends React.Component {
  render() {
    return (
      <div className="header-global">
        <div className="header-main">
          <img className="header-logo" src={logo} alt="Logo" />
          <img className="header-login" src={login} alt="Login" />
        </div>
        <div className="header-subbar" >
          <text>Accueil</text>
          <text>News</text>
          <text>Blogs</text>
          <text>Vidéos</text>
          <text>Tests</text>
          <text>Previews</text>
          <text>Dossiers</text>
          <img className="header-search" src={search} alt="Search"/>
          <input placeholder="Un jeu, une actu, un test ?"></input>
        </div>
      </div>
    );
  }
}
