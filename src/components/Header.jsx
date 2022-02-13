import React from 'react';
import ControlPresupuesto from './ControlPresupuesto';
import NuevoPresupuesto from './NuevoPresupuesto';


const Header = ({
    presupuesto, 
    setPresupuesto, 
    presupuestoValido, 
    setPresupuestoValido, 
    gastos,
    setGastos
}) => {
  return <header>
      <h1>Administrador de gastos</h1>
        { 
            presupuestoValido ? (
                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  setPresupuestoValido={setPresupuestoValido}
                  setPresupuesto={setPresupuesto}
                  gastos = {gastos}  
                  setGastos ={setGastos}
                />
            ) : (
                <NuevoPresupuesto
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
                setPresupuestoValido = {setPresupuestoValido}
              />
            )
        }
    
  </header>;
};

export default Header;
