export function TodoCounter({ todos }) {
  return (
    <div>
      <span>To do: {todos.length}</span>
      <span>
        In progress:{" "}
        {todos.reduce((acc, todo) => (todo.status ? acc : acc + 1), 0)}
      </span>
    </div>
  );
}
