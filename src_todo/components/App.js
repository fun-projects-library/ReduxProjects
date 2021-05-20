import React from "react";
import { List, NoList } from "./List";

// React:
class App extends React.Component {
  render() {
    return (
      <div id="toDoApp">
        <label id="toDoTitle" htmlFor="basic-input">
          <h2 className="text-monospace">Add new things To Do:</h2>
        </label>
        <div id="toDoAdd" className="input-group">
          <input
            id="basic-input"
            className="form-control"
            type="text"
            placeholder="Thing to do"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-primary">Add</button>
          </div>
        </div>
        <List />
        <NoList />
      </div>
    );
  }
}

export default App;
