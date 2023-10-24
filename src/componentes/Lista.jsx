import { useEffect, useState } from "react";
import styles from './Lista.module.css'

const ListaDeItems = () => {
  const [items, setItems] = useState([]);
  const [itemColors, setItemColors] = useState({});
  const [inputValue, setInputValue] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);

    const storedItemColors = JSON.parse(localStorage.getItem("itemColors")) || {};
    setItemColors(storedItemColors);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem("itemColors", JSON.stringify(itemColors));
  }, [itemColors]);

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

      const color = getRandomPastelColor(colorIndex);
      setItemColors({ ...itemColors, [newItem.id]: color }); 
      setColorIndex((colorIndex + 1) % 10);

      setInputValue("");
    }
  };



  const handleEliminarItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const handleLimpiar = () => {
    setItems([]);
    setItemColors([]);
    setColorIndex(0);
  };

  const getRandomPastelColor = (index) => {
    const colors = [
      '#B39DDB',
      '#90CAF9',
      '#81C784',
      '#FFCC80',
      '#FFAB91',
      '#FFD180',
      '#A5D6A7',
      '#FFB74D',
      '#C5E1A5',
      '#FF8A65'
    ];
    return colors[index];
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
          <li key={item.id} className={styles.li} style={{ backgroundColor: itemColors[item.id] }}>
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
