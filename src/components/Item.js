const Item = ({ item, onDeleteItems, onAddItems, onIsPacked, sortOption }) => {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onIsPacked(item.id, sortOption)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>
        {item.packed ? "✅" : "❌"}
      </button>
    </li>
  );
};

export default Item;
