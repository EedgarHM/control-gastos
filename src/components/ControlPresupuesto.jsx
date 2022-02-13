import { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import swal from 'sweetalert';


import { formatearCantidad } from '../helpers'

const ControlPresupuesto = ({
    gastos, 
    setGastos,
    presupuesto, 
    setPresupuesto, 
    setPresupuestoValido}) => {

    const [disponible, setDisponible] = useState(0);
    const [gastado, setGastado] = useState(0);
    const [porcentaje, setPorcentaje] = useState(0);

    useEffect(()=>{
        const totalGastado = gastos.reduce((acc, gasto)=>gasto.cantidad + acc,0);
        const totalDisponible = presupuesto-gastado;
        
        // Calcular presupuesto por porcentaje
        const nuevoPorcentaje = (((presupuesto-totalDisponible)/presupuesto) * 100).toFixed(2);
        setPorcentaje(nuevoPorcentaje)
        
        setDisponible(totalDisponible)
        setGastado(totalGastado);
    }, [gastos, gastado]);

 
    const handleResetApp = ()=>{
        swal({
            title: "Estás Seguro?",
            text: "Se reiniciara el presupuesto y los gastos, deseas continuar?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
              swal("Eliminado!", "La aplicación se ha reiniciado", "success");
              setGastos([])
              setPresupuesto(0)
              setPresupuestoValido(false)
            }
          });
    }

  return (
      <div className="contenedor-presupuesto contenedor sombra dos-columnas">
          <div>
              <CircularProgressbar
                value={porcentaje}
                text ={`${[porcentaje]}% Gastado` }
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#e72c2c': '',
                    textColor: porcentaje > 100 ? '#e72c2c': ''
                })}
              >

              </CircularProgressbar>
          </div>

          <div className="contenido-presupuesto">
              <button className='reset-app' type='button' onClick={handleResetApp}>
                  Reiniciar Aplicacion
              </button>
              <p>
                  <span>Presupuesto:</span>  { formatearCantidad(Number(presupuesto))}
              </p>

              <p className={`${disponible < 0 ? 'negativo' :'' }  `}>
                  <span>Disponible:</span>  { formatearCantidad(disponible)}
              </p>

              <p>
                  <span>Gastado:</span>  { formatearCantidad(gastado)}
              </p>
          </div>
      </div>
  );
};

export default ControlPresupuesto;
