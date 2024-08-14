import { useState } from "react";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackagingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (newItem) => {
    setItems(() => [...items, newItem]);
  };
  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleIsPacked = (id, sortOption) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    if (sortOption === "packed") {
      setItems((items) =>
        [...items].sort((a, b) => {
          return b.packed - a.packed;
        })
      );
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        setItems={setItems}
        items={items}
        onDeleteItems={handleDeleteItems}
        onIsPacked={handleIsPacked}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
