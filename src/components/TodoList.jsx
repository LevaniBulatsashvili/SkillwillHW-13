import React, { PureComponent } from "react";
import OngoingTodo from "./OngoingTodo";
import DoneTodos from "./DoneTodos";
import AddTodo from "./AddTodo";

class TodoList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      lastElementId: 3,
      ongoingTodos: [
        { id: 1, description: "Buy Milk" },
        { id: 2, description: "Clean Dishes" },
        { id: 3, description: "Make Dinner" },
      ],
      doneTodos: [],
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.state.ongoingTodos, nextState.ongoingTodos);
  //   console.log(this.state.ongoingTodos  === nextState.ongoingTodos);

  //   return !(
  //     this.state.ongoingTodos === nextState.ongoingTodos &&
  //     this.state.doneTodos === nextState.doneTodos
  //   );
  // }

  addOngoingTodo = (inputValue) => {
    console.log("TodoList task submitted");

    const newTodo = {
      id: this.state.lastElementId + 1,
      description: inputValue,
    };

    this.setState({
      lastElementId: this.state.lastElementId + 1,
      ongoingTodos: [...this.state.ongoingTodos, newTodo],
      doneTodos: [...this.state.doneTodos],
    });
  };

  finishTodo = (id) => {
    console.log("TodoList todo finished");
    const finishedTodo = this.state.ongoingTodos.find((todo) => todo.id === id);

    this.setState({
      ongoingTodos: this.state.ongoingTodos.filter((todo) => todo.id !== id),
      doneTodos: [...this.state.doneTodos, finishedTodo],
    });
  };

  undoTodo = (id) => {
    console.log("TodoList todo unfinished");
    const undoneTodo = this.state.doneTodos.find((todo) => todo.id === id);

    this.setState({
      ongoingTodos: [...this.state.ongoingTodos, undoneTodo],
      doneTodos: this.state.doneTodos.filter((todo) => todo.id !== id),
    });
  };

  deleteTodo = (id) => {
    console.log("TodoList todo deleted");
    this.setState({
      ongoingTodos: [...this.state.ongoingTodos],
      doneTodos: this.state.doneTodos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    console.log("TodoList Render log");

    return (
      <div className="todo-list">
        <AddTodo addOngoingTodo={this.addOngoingTodo} />

        <div className="todos">
          <div>
            <h1>Todos</h1>
            {this.state.ongoingTodos.map((todo) => (
              <OngoingTodo
                key={todo.id}
                id={todo.id}
                todo={todo.description}
                action={this.finishTodo}
              />
            ))}
          </div>
          <div>
            <h1>Todones</h1>
            {this.state.doneTodos.map((todo) => (
              <DoneTodos
                key={todo.id}
                id={todo.id}
                todo={todo.description}
                undoTodo={this.undoTodo}
                deleteTodo={this.deleteTodo}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
