export function TodoCounter({ todos }) {
  return (
    <div>
      <span>To do: {todos.length}</span>
      <span>
        In progress:{" "}
        {todos.reduce(
          (acc, todo) => (todo.status === "completed" ? acc : acc + 1),
          0
        )}
      </span>
    </div>
  );
}
// export default TodoCounter;
