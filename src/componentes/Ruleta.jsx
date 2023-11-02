import { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Link } from 'react-router-dom';

const Ruleta = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [items, setItems] = useState([]);
  const [itemColors, setItemColors] = useState({});

  // mariano -> aca estas guardado por un lado items y por otro lado itemColors
  // mariano -> se puede ver la data en la consola que se guardo en el paso anterior
  console.log(items, itemColors);

  useEffect(() => {
    // mariano -> aca estas guardado por un lado items y por otro lado itemColors
    // mariano -> paro en store items y itemColors tenes la data que te falta mostrar en la ruleta
    // mariano -> al estar por separado tenes un lio al pedo porque tenes por un lado el content y por el otro el color
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
    const storedItemColors = JSON.parse(localStorage.getItem("itemColors")) || {};
    setItemColors(storedItemColors);
  }, []);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };



  // mariano -> fijate primero de arreglar lo que puse en archivo lista.jsx
  // mariano -> de juntar la data, incluso ya dejarla guardad con el formato que te pide el componente wheel
  // mariano -> y despues de eso ver como mostrarla en el componente wheel
  // mariano -> pero si ya guardas la data ya no tenes que hacer nada, solo poner 
  // <Wheel data={items} />

  // como paso a data items y itemcolors para que se muestren en data={} de <Wheel>?
  const data = [
    { text: 'Option 0', option: 0, style: { backgroundColor: 'white' } },
    { text: 'Option 1', option: 1, style: { backgroundColor: 'green' } },
    { text: 'Option 2', option: 2, style: { backgroundColor: 'red' } },
  ]
  

  return (
    <>
      <Link to="/">
      <button>
        Inicio
      </button>
      </Link>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

export default Ruleta;
