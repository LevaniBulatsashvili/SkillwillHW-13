import React, { PureComponent } from "react";

class AddTodo extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };
  }

  onInputChange = (event) => {
    const inputValue = event.target.value;

    this.setState({
      inputValue,
    });
  };

  onTodoSubmit = (e) => {
    e.preventDefault();

    this.props.addOngoingTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  };

  render() {
    console.log("AddTodo render log");

    return (
      <form onSubmit={this.onTodoSubmit} className="add-todo">
        <h1>Add Todo</h1>
        <input onChange={this.onInputChange} value={this.state.inputValue} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default AddTodo;
