import React, {useState} from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Meu nome")
  return (
    <div>
      <h1>Teste de React com Vite</h1>

      <h2>Contador de clique</h2>
      <button onClick={()=>setCount(count+1)}>Soma clique +</button>
      <h3>Cliques: {count}</h3>
      <br/>
      <h2>Texto alterado imediatamente</h2>
      <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name} id='texto'/>
        <h3>Texto atual: {name}</h3>
        <br />
      <div id='texts'>
      </div>
      <button onClick={()=>{let tex = document.createElement('h3'); tex.textContent = `${name}`; document.getElementById('texts').append(tex)}}>Criar texto</button>
    </div>
  );
}

export default App;