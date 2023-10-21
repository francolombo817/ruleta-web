import { useEffect, useState } from "react";
import styles from './Lista.module.css'

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

  const handleLimpiar = () => {
    setItems([]);
  };


  return (
    <div>
      <div>
        <div className={styles.limpiar}>
          <button onClick={handleLimpiar}>Limpiar</button>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe aquí"
        />
        <button onClick={handleAgregarItem}>+</button>
      </div>
      <ul className={styles.lu} >
        {items.map((item) => (
          <li key={item.id} className={styles.li}>
            <div className={styles.tex}>
              {item.content}
            </div>
            <button onClick={() => handleEliminarItem(item.id)} className={styles.btnEliminar}>X</button>
          </li>
        ))}
      </ul>
      <button>
        Elegir
      </button>
    </div>
  );
};

export default ListaDeItems;
