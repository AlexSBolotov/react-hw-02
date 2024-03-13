import "./App.css";
import Counter from "components/Test/Test";
import Dropdown from "components/Test/Dropdown";
import { TodoList, TodoCounter } from "components/TodoList";
import { FormTest } from "components/Form";

import { Component } from "react";
// import TodoCounter from "components/TodoList/TodoCounter";

class App extends Component {
  state = {
    todos: [
      { id: "id-1", label: "Became a star", status: "completed" },
      { id: "id-2", label: "Quit smoking", status: "in progress" },
      { id: "id-3", label: "Find a job", status: "in progress" },
    ],
  };
  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <FormTest onSubmit={(values) => console.log(values)} />
        <TodoCounter todos={todos} />
        <TodoList todos={todos} deleteTodo={this.deleteTodo} />
        <Counter step={5} initialValue={10} />
        <Dropdown />
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <TodoList />
//       <Counter step={5} initialValue={10} />
//       <Dropdown />
//     </>
//   );
// }

export default App;
