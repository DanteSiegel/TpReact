import React, { useState } from 'react';
import Titulo from './components/Titulo/Titulo';
import Formulario from './components/Formulario/Formulario';
import Cita from './components/Cita/Cita';
import './App.css';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (index) => {
    const citasActualizadas = citas.filter((_, i) => i !== index);
    setCitas(citasActualizadas);
  };

  return (
    <>
      <Titulo />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario agregarCita={agregarCita} />
          </div>
          <div className="one-half column">
            <Cita citas={citas} eliminarCita={eliminarCita} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
