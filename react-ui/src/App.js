import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

const sendEmail = (email, userName = "Anakin Skywalker") => {
  return fetch("/api/send_email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, userName })
  }).then(response => response.json());
};

class App extends Component {
  state = { email: "" };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <input
            onChange={ev => {
              this.setState({ email: ev.target.value });
            }}
            style={{ padding: "10px", fontSize: "1em" }}
          />
          <button
            onClick={() => {
              const { email } = this.state;
              if (email) {
                sendEmail(email).then(({ message }) => {
                  alert(message);
                });
              } else {
                alert("Please add an email");
              }
            }}
          >
            Send Email
          </button>
        </p>
      </div>
    );
  }
}

export default App;
