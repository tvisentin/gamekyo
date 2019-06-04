import React from "react";
import "./modal.css";
import close from "./assets/close.png";

export class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.hideLogin = this.hideLogin.bind(this);

  }

  hideLogin() {
    this.props.onCancelSelected();
  }

  render() {
    return (
      <div className="modal-outer">
        <div className="modal-middle">
          <div className="modal-inner">
            <div className="modal-title">CONNEXION</div>
            <div className="modal-input-button">
              <div className="modal-input-div">
                <input placeholder="Login" />
                <br />
                <input placeholder="Password" />
              </div>
              <div className="modal-button">
                <button onClick={this.hideLogin}>Cancel</button>
                <button>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
