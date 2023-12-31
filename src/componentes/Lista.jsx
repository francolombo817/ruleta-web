import { useState } from "react";
import styles from './Lista.module.css'

function generarColorPastel() {
  const r = Math.floor(Math.random() * 128) + 128;
  const g = Math.floor(Math.random() * 128) + 128;
  const b = Math.floor(Math.random() * 128) + 128;
  const colorHex = '#' + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
  return colorHex;
}

const ListaDeItems = ({ items = [], setItems }) => {
  const [inputValue, setInputValue] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAgregarItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: Date.now(),
        text: inputValue,
        style: { backgroundColor: generarColorPastel() },
        option: items.length + 1,
      };

      const newItems = [...items, newItem];
      setItems(newItems);
      setColorIndex((colorIndex + 1) % 10);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
       handleAgregarItem();
    }
   };

  const handleEliminarItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    updatedItems.length === 0 ? setItems(undefined) : setItems(updatedItems);
  };

  const handleLimpiar = () => {
    setItems(undefined);
  };

  return (
    <div>
      <div>
        <div className={styles.limpiar}>
          <button className={styles.butonLimpiar}
            onClick={handleLimpiar}>Limpiar</button>
        </div>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Escribe aquí"
          onKeyPress={handleKeyPress}
        />
        <button
          className={styles.agregar}
          onClick={handleAgregarItem}>+</button>
      </div>
      <ul className={styles.lu} >
        {items.map((item) => (
          <li key={item.id} className={styles.li} style={{ backgroundColor: item.style.backgroundColor }}>
            <div className={styles.tex}>
              {`${item.option} - ${item.text}`}
            </div>
            <button onClick={() => handleEliminarItem(item.id)} className={styles.btnEliminar}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaDeItems;
