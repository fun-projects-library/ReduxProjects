import React from "react";

class ListItem extends React.Component {
  render() {
    return (
      <div className="list-group-item list-group-item-action d-flex justify-content-between">
        <span contentEditable={true}>
          
        </span>
        <div className="btn-group btn-group-sm" role="group">
          <button className="btn btn-primary" type="button">
            Update
          </button>
          <button className="btn btn-primary" type="button">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
