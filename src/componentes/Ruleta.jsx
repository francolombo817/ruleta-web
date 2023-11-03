import { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Link } from 'react-router-dom';

const Ruleta = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [items, setItems] = useState([]);

  console.log(items);
  // mariano -> aca estas guardado por un lado items y por otro lado itemColors
  // mariano -> se puede ver la data en la consola que se guardo en el paso anterior
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);
 // mariano -> aca estas guardado por un lado items y por otro lado itemColors
    // mariano -> paro en store items y itemColors tenes la data que te falta mostrar en la ruleta
    // mariano -> al estar por separado tenes un lio al pedo porque tenes por un lado el content y por el otro el color
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * items.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  // const data = [
  //   { text: 'Option 0', option: 0, style: { backgroundColor: 'white' } },
  //   { text: 'Option 1', option: 1, style: { backgroundColor: 'green' } },
  //   { text: 'Option 2', option: 2, style: { backgroundColor: 'red' } },
  // ]

  const data =[items.map((item, index) => ({
    text: item.content,
    option: index,
    style: {backgroundColor: item.color },
  }))];
  

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
