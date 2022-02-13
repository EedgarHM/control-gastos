import React, { useState, useEffect } from "react";

import Mensaje from "./Mensaje";
import CerrarModal from "../img/cerrar.svg";

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar }) => {

  const [id, setId] = useState('');
  const [fecha, setFecha] = useState('');
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    if( Object.keys(gastoEditar).length>0){
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria)
    }
  }, [])
  

  const ocultarModal = () => {
    setGastoEditar('')
    setModal(false);
    setAnimarModal(false);
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje('Todos los campos son obligatorios')
     setTimeout(()=>{
         setMensaje('');
     },2000)

      return;
    }

    guardarGasto({nombre, cantidad, categoria, id, fecha})
  };

  return (
    <div className="modal">

      <div className="cerrar-modal">
        <img src={CerrarModal} alt="boton cerrar" onClick={ocultarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : ""}`}
      >
        <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

        { mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Agregar Nombre del gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Agregar cantidad del gasto"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">--- Seleccionar Categoria ---</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>

        <input 
          type="submit" 
          value={gastoEditar.nombre ? 'Guardar Cambios' : 'Agregar Nuevo Gasto'}  
        />
      </form>
    </div>
  );
};

export default Modal;
