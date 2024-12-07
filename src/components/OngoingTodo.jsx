import React, { PureComponent } from "react";

class OngoingTodo extends PureComponent {
  render() {
    console.log("OngoingTodo render log");

    return (
      <div className="ongoing-todos">
        <p>{this.props.todo}</p>
        <button onClick={() => this.props.action(this.props.id)}>Done</button>
      </div>
    );
  }
}

export default OngoingTodo;
