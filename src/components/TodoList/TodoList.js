export function TodoList({ todos, deleteTodo }) {
  return (
    <ul>
      {todos.map(({ id, label, status }) => (
        <li key={id}>
          <p>{label}</p>
          <button type="button" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// export default TodoList;
