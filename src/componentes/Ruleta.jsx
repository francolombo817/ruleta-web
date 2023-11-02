import { useEffect, useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Link } from 'react-router-dom';

const Ruleta = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [items, setItems] = useState([]);

  console.log(items);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items")) || [];
    setItems(storedItems);
  }, []);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * items.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const data = [
    { text: 'Option 0', option: 0, style: { backgroundColor: 'white' } },
    { text: 'Option 1', option: 1, style: { backgroundColor: 'green' } },
    { text: 'Option 2', option: 2, style: { backgroundColor: 'red' } },
  ]

  // const data = items.map((item, index) => ({
  //   text: item.content,
  //   option: index,
  //   style: {backgroundColor: item.color },
  // }));
  

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
