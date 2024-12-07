import React, { PureComponent } from "react";

class DoneTodos extends PureComponent {
  render() {
    console.log("DoneTodo render log");

    return (
      <div className="done-todos">
        <p>{this.props.todo}</p>
        <div>
          <button onClick={() => this.props.undoTodo(this.props.id)}>
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button onClick={() => this.props.deleteTodo(this.props.id)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      </div>
    );
  }
}

export default DoneTodos;
