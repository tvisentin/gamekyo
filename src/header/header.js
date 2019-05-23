import React from "react";
import "./header.css";
import logo from "./gamekyo-logo.png";

export class Header extends React.Component {
    render() {
        return (
          <div className="header">
            <img className="header-logo" src={logo} alt="Logo" />
          </div>
        );
      }
}