export function TodoList({ todos, deleteTodo, onSelectChange }) {
  return (
    <ul>
      {todos.map(({ id, label, status }) => (
        <li key={id}>
          <p>{label}</p>
          <label>{status ? "Completed" : "In progress"}</label>
          <input
            type="checkbox"
            // name="status"
            checked={status}
            onChange={() => onSelectChange(id)}
          />
          <button type="button" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// export default TodoList;
