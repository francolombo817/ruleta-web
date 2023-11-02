import { useEffect, useState } from "react";
import styles from './Lista.module.css'
import { Link } from "react-router-dom";

const ListaDeItems = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  useEffect(() => {
    console.log(items)
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAgregarItem = () => {
  if (inputValue.trim() !== "") {
    const newItem = {
      id: Date.now(),
      option: items.length,
      color: getRandomPastelColor(colorIndex),
      content: inputValue
    };

    const newItems =[...items, newItem];
    setItems(newItems);
    setColorIndex((colorIndex +1) %10);
    
      // mariano -> aca estas guardado por un lado items y por otro lado itemColors
      // no seria mejor guardar todo junto?
      // por ejemplo:
      // const newItem = { id: Date.now(), content: inputValue, color: getRandomPastelColor(colorIndex) };
      // y despues guardar todo junto en un solo objeto
      // const newItems = [...items, newItem];
      // setItems(newItems);
      // y solo dejas este en el useEffect localStorage.setItem("items", JSON.stringify(newItems));
      // si haces esto creo que tenes que modificar cosas mas abajo
      // setItems([...items, newItem]);
      // const color = getRandomPastelColor(colorIndex);
      // setItemColors({ ...items, [newItem.id]: color });
      // setColorIndex((newItem + 1) % 10);

      // mariano -> ya podes aprobechar a guardar la data como la necesita wheel
      // el option nose que es, pero el text y el style ya los tenes
      // si option tiene que ser un numero incremental osea desde 0 en adelante
      // podes ayudarte con el lengh de la lista de items
      // option: items.length + 1
      //      const data = [
      //   { text: inputValue, option: 0, style: { backgroundColor: color } },
      // ]

      setItems(newItems);
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
          <li key={item.id} className={styles.li} style={{ backgroundColor: item.color}}>
            <div className={styles.tex}>
              {item.content}
            </div>
            <button onClick={() => handleEliminarItem(item.id)} className={styles.btnEliminar}>X</button>
          </li>
        ))}
      </ul>
      <Link to="/ruleta">
        <button>
          Empezar
        </button>
      </Link>
    </div>
  );
};

export default ListaDeItems;
