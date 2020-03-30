import React, {useState} from 'react';
import Routes from './routes';
import './global.css';

//JSX


function App() {
  // const [counter,setCounter] = useState(0);

  // //Array [valor, funcaoDeAtualizacaodoValor]

  // function increment(){
  //   setCounter(counter + 1);
  // }
  
  return (
    <Routes/>
  //   <div>
  //  <Header>Contador: {counter}</Header>
  //  <button onClick={increment}>Incrementar</button>
  //  </div>
  );
}

export default App;
