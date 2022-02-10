import React, {useState} from "react";
import Mensaje from "./Mensaje";
const NuevoPresupuesto = ({presupuesto, setPresupuesto, setPresupuestoValido}) => {

    const [ mensaje, setMensaje ] = useState('');
    const [ error, setError ] = useState(false);
    

    const handlePresupuesto = (e) =>{
        e.preventDefault();
        if(!presupuesto || presupuesto<0){

            setMensaje("No es un presupuesto valido");
            setError(true)
        }else{
            setMensaje("Presupuesto Valido")
            setPresupuestoValido(true)
            setMensaje('')
        }
    }


  return (
    <div className="contenedor-presupuesto contenedor sombra">
        
        <form action="" 
            className="formulario"
            onSubmit={handlePresupuesto}
        >
            <div className="campo">
                <label htmlFor="Definir Presupuesto">Define tu presupuesto</label>
                <input type="number" 
                    className="nuevo-presupuesto"
                    placeholder="Agregar presupuesto"
                    value={presupuesto}
                    onChange={ (e)=> setPresupuesto(Number(e.target.value))}
                
                />
            </div>
            <input type="submit"
                value="Agregar" 
               
            />

           {error && <Mensaje tipo="error"> {mensaje} </Mensaje>}
        </form>


    </div>
  );
};

export default NuevoPresupuesto;
