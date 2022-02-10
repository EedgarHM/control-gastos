import { useState } from "react";
import Header from "./components/Header";
import IconoAdd from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {

  const [modal, setModal] = useState(false);
  const [presupuesto, setPresupuesto] = useState(0);
  const [animarModal, setAnimarModal]= useState(false);
  const [presupuestoValido, setPresupuestoValido] = useState(false);
  const [gastos, setGastos] = useState([]);


  const handleNuevoGasto = ( ) => {
    setModal(true);

    setTimeout(()=>{
      setAnimarModal(true);
    },500)
  }

  const guardarGasto = (gasto) => {
    console.log(gasto)
  }

  return (
    <div className="App">
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        presupuestoValido={presupuestoValido}
        setPresupuestoValido={setPresupuestoValido}
      />

      {
      presupuestoValido && (
        <div className="nuevo-gasto">
          <img src={IconoAdd} 
            alt="Icono nuevo Gasto" 
            onClick={handleNuevoGasto}
          />
        </div>
      )}

        { modal && <Modal 
                      setModal={setModal} 
                      animarModal={animarModal}
                      setAnimarModal={setAnimarModal}
                      guardarGasto = { guardarGasto }
                      
                      />
        }

    </div>
  );
}

export default App;
