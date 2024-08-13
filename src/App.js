import { useState } from "react";

export default App;

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItem) => {
    setItems(() => [...items, newItem]);
  };
  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} />
      <Stats />
    </div>
  );
}

const Logo = () => {
  return <h1>🧳 Far Away 🏖️</h1>;
};

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };
    e.preventDefault();
    if (!description) return;
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (current, i) => i + 1).map((elem) => (
          <option value={elem} key={elem}>
            {elem}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="Item..."
        value={description}
      />
      <button>Add</button>
    </form>
  );
};
const PackingList = ({ items, onDeleteItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItems={onDeleteItems} key={item.id} />
        ))}
      </ul>
    </div>
  );
};
const Stats = () => {
  return (
    <footer className="stats">
      <em>🧳 You have X items on your list and you already packed X (X%)</em>
    </footer>
  );
};

const Item = ({ item, onDeleteItems }) => {
  return (
    <li key={item.id}>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>
        {item.packed ? "✅" : "❌"}
      </button>
    </li>
  );
};
