export default function Options({ sortBy, setSortBy, onClearItems }) {
  return (
    <div>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
      <button onClick={onClearItems}>Clear List</button>
    </div>
  );
}
