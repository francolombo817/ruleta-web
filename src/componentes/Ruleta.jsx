import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'

const DEFAULT_ITEMS = [
  {
    text: "Item default",
    content: 0,
    style: { backgroundColor: "#fff" },
  }
];

const Ruleta = ({ items = DEFAULT_ITEMS }) => {
  const [mustSpin, setMustSpin] = useState(false);
  const [winner, setWinner] = useState(0);

  console.log(items)
  
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * items.length);
      setWinner(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <Wheel
        mustStartSpinning={mustSpin}
        spinDuration={[0.2]}
        prizeNumber={winner}        
        data={items}
        outerBorderColor={["#ccc"]}
        outerBorderWidth={[9]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["tranparent"]}
        radiusLineWidth={[1]}
        textColors={["#fff"]}
        textDistance={55}
        fontSize={[10]}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <button onClick={handleSpinClick}>SPIN</button>
    </>
  )
}

export default Ruleta;
