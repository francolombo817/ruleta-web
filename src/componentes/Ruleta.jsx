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

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

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

  const data = items.map((item, index) => [({
    text: item.content,
    option: index,
    style: { backgroundColor: item.color },
  })]);
  console.log(data);



  return (
    <>
      <Link to="/">
        <button>
          Inicio
        </button>
      </Link>
      <Wheel
        mustStartSpinning={mustSpin}
        spinDuration={[0.2]}
        prizeNumber={prizeNumber}
        data={data}
        outerBorderColor={["#ccc"]}
        outerBorderWidth={[9]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["tranparent"]}
        radiusLineWidth={[1]}
        textColors={["#f5f5f5"]}
        textDistance={55}
        fontSize={[10]}
        backgroundColors={[
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

        ]}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

export default Ruleta;
