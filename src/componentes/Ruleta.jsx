import { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Link } from 'react-router-dom';

const Ruleta = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [items, setItems] = useState([]);
  const [itemColors, setItemColors] = useState({});

  console.log(items, itemColors);

  useEffect(() => {
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
