import { useState } from "react";
import Item from "./Item";
import Options from "./Options";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  // Ao invés de criar um novo estado para cada filtro, podemos usar o estado derivado, utilizando uma cópia da lista de itens já existente.
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div>
        <Options
          sortBy={sortBy}
          setSortBy={setSortBy}
          onClearItems={onClearItems}
        />
      </div>
    </div>
  );
}
