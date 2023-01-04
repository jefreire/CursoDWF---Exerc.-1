import { useState } from "react";
import './App.css';

function App() {

  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState(0);

  const calcularSoma = () => {
    let operando1 = 0;
    let operando2 = 0;
    operando1 = parseInt(numero1);
    operando2 = parseInt(numero2);
    setResultado(operando1 + operando2);
    
 };

  return (
    <div className="App">
      <section>
        <div className="Soma">
          <div className="titulo">{process.env.REACT_APP_TITULO}</div>
          <input className="Campo-numero"
            type="number"
            placeholder="Número 1"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
          />
          <p>+</p>
          <input className="Campo-numero"
            type="number"
            placeholder="Número 2"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
          />
          <button className="Operacao" onClick={calcularSoma}>=</button>
          <div className="Resultado">{resultado}</div>
        </div>
      </section>
    </div>
  );
}

export default App;
