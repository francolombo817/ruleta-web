import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import { Link } from 'react-router-dom';

const data = [
  { text: 'Option 0', option: 0, style: { backgroundColor: 'white' } },
  { text: 'Option 1', option: 1, style: { backgroundColor: 'green' } },
  { text: 'Option 2', option: 2, style: { backgroundColor: 'red' } },
]
const Ruleta = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

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
