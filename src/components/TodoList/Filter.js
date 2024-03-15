export function Filter({ value, onChange }) {
  return (
    <>
      <label>Find task</label>
      <input type="text" name="filter" value={value} onChange={onChange} />
    </>
  );
}
