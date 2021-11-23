import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
    };
  }
  handleNoteSubmit = (event) => {
    event.preventDefault();
    this.setState({
      notes: [...this.state.notes, event.target.userInput.value],
    });
    console.log(this.state, event.target.userInput.value);
  };
  render() {
    return (
      <div className="app">
        <NavBar />
        <Notes handleNoteSubmit={this.handleNoteSubmit} />
        <div>
          Notes:{" "}
          <ul>
            {this.state.notes.map((n) => (
              <li>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
