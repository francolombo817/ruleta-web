import { useEffect, useState } from "react";

const ListaDeItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAgregarItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: Date.now(),
        content: inputValue
      };

      setItems([...items, newItem]);
      setInputValue("");
    }
  };

  const handleEliminarItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe aquí"
        />
        <button onClick={handleAgregarItem}>Agregar</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.content}
            <button onClick={() => handleEliminarItem(item.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeItems;
