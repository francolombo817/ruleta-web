import { useState } from 'react';
import './App.css'
import ListaDeItems from './componentes/Lista'
import Ruleta from './componentes/Ruleta'
// import AlertaFlotante from './componentes/CartelFlotante'



function App() {
  const [items, setItems] = useState(undefined);

  return (
    <>
      <div>
        {/* <AlertaFlotante/> */}
        <Ruleta items={items} />
        <ListaDeItems items={items} setItems={setItems} />
      </div>
    </>
  )
}

export default App
