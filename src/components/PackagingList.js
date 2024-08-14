import { useState } from "react";
import Item from "./Item";

const PackingList = ({
  items,
  setItems,
  onDeleteItems,
  onAddItems,
  onIsPacked,
}) => {
  const [sortOption, setSortOption] = useState("sort by input");

  const handleSort = (e, sortOption, setSortOption) => {
    const selectedSortedOption = e.target.value;
    setSortOption(selectedSortedOption);
    setItems((items) =>
      [...items].sort((a, b) => {
        return selectedSortedOption === "input"
          ? a.id - b.id
          : selectedSortedOption === "description"
          ? a.description.localeCompare(b.description) // Ordenar alfabéticamente por descripción
          : b.packed - a.packed; // Ordenar por estado de empaquetado (packed)
      })
    );
  };

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onAddItems={onAddItems}
            onIsPacked={onIsPacked}
            onDeleteItems={onDeleteItems}
            key={item.id}
            sortOption={sortOption}
          />
        ))}
      </ul>
      <div>
        <select
          value={sortOption}
          onChange={(e) => handleSort(e, sortOption, setSortOption)}
        >
          <option value="input">sort by input</option>
          <option value="description">sort by description</option>
          <option value="packed">sort by packed</option>
        </select>
      </div>
    </div>
  );
};

export default PackingList;
