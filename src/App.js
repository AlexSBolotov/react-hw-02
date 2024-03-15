import "./App.css";
import Counter from "components/Test/Test";
import Dropdown from "components/Test/Dropdown";
import { TodoList, TodoCounter, TodoEditor, Filter } from "components/TodoList";
import { FormTest } from "components/Form";

import { Component } from "react";
// import TodoCounter from "components/TodoList/TodoCounter";

class App extends Component {
  state = {
    todos: [
      { id: "id-1", label: "Became a star", status: false },
      { id: "id-2", label: "Quit smoking", status: false },
      { id: "id-3", label: "Find a job", status: false },
    ],
    filter: "",
  };
  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };
  onSelectChange = (id) => {
    console.log(id);
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      ),
    }));
  };
  addTodo = (todo) => {
    console.log(todo);
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };
  handleFilter = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.label.toLowerCase().includes(normalizedFilter)
    );
  };

  formDataHandler = (data) => console.log({ ...data });
  render() {
    const { filter } = this.state;
    const visibleTodos = this.getVisibleTodos();
    return (
      <>
        <FormTest onFormSubmit={this.formDataHandler} />
        <p>===================</p>
        <TodoCounter todos={visibleTodos} />
        <p>===================</p>
        <Filter value={filter} onChange={this.handleFilter} />
        <TodoList
          todos={visibleTodos}
          deleteTodo={this.deleteTodo}
          onSelectChange={this.onSelectChange}
        />
        <TodoEditor onAddFormSubmit={this.addTodo} />
        <p>===================</p>
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
