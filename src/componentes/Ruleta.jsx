import { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import styles from './Ruleta.module.css'


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
  console.log(winner);
  
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * items.length);
      setWinner(newPrizeNumber);
      setMustSpin(true);
    }
  };

    
  return (
    <div
    // className={styles.container}
    >
      <Wheel
        mustStartSpinning={mustSpin}
        spinDuration={[0.2]}
        prizeNumber={winner}        
        data={items}
        outerBorderColor={["#707070"]}
        outerBorderWidth={[10]}
        innerBorderColor={["#f2f2f2"]}
        radiusLineColor={["tranparent"]}
        radiusLineWidth={[1]}
        textColors={["#000000"]}
        textDistance={55}
        fontSize={[20]}
        onStopSpinning={
          () => {
          setMustSpin(false);
          alert(
            `Ganador ${items[winner].text}`)
        }}
      />
      <button
      className={styles.button}
       onClick={handleSpinClick}      
      >GIRAR</button>
    </div>
  )
}

export default Ruleta;
