import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  // Devido a necessidade de utilizar os items tanto no Form quanto no PackingList (componentes irmãos), precisamos usar a técnica de lift state (subitr o estado), que basicamente consiste em transferir o estado inteiro (criação do estado + função de trigger) para o componente pai mais próximo (no caso, App). A partir disso, conseguimos passar tanto a função quanto os items via props.
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // Devido a imutabilidade do React, NÃO poderíamos mutar os items diretamente (Ex: setItems((items) => items.push(item)))
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    // Para deletar um item, usaremos a função que organiza os items (setItems) chamando uma callback function onde filtraremos a lista de itens, retornando uma nova lista com os itens com o id diferente do que deve ser deletado.
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
