import React from "react";
import ListItem from "./ListItem";

const List = () => {
  return (
    <div id="toDoList">
      <label htmlFor="basic-input">
        <span className="text-monospace">Things ToDo List</span>
        <br />
        <span className="text-monospace">Click on item to update:</span>
      </label>
      <div className="list-group">
        <ListItem />
      </div>
    </div>
  );
};

const NoList = () => {
  return (
    <div
      id="toDoList"
      className="d-flex align-items-center justify-content-center"
    >
      <p className="text-muted text-monospace mt-5">Your list is empty</p>
    </div>
  );
};

export { List, NoList };
