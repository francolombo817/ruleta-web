import { useState } from 'react';
import './App.css'
import ListaDeItems from './componentes/Lista'
import Ruleta from './componentes/Ruleta'

function App() {
  const [items, setItems] = useState(undefined);

  return (
    <>
      <div>
        <Ruleta items={items} />
        <ListaDeItems items={items} setItems={setItems} />
      </div>
    </>
  )
}

export default App
