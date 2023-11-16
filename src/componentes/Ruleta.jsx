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
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [ocultar, setOcultar] = useState(true);

  console.log(items)
  console.log(winner);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * items.length);
      setWinner(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleMensaje = () => {
    setMostrarMensaje(true);
    setOcultar(false);
  }

  const handleSeguir = () => {
    setMostrarMensaje(false);
    setOcultar(true);
  }

  return (
    <div
      className={styles.container}
    >
      {ocultar && (
        <>
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
                handleMensaje(true)
              }}
          />
          <button
            className={styles.button}
            onClick={handleSpinClick}
          >GIRAR</button>
        </>
      )}
      {/* <br /> */}
      {mostrarMensaje && (
        <div className={styles.containerFlotante}>
          <div className={styles.boxFlotante}>
            <h3>GANO</h3>
            <h1 className={styles.textFlotante}>{items[winner].text}!!!</h1>
          </div>
          <div>
            <button className={styles.segirFlotante} onClick={handleSeguir}>SEGUIR</button>
          </div>
        </div>
      )}

    </div>
  )
}

export default Ruleta;
