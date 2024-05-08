import React from 'react';
import './Cita.css';
import Card from '../Card/Card';

const Cita = ({ citas, eliminarCita }) => {
  return (
    <div className="citas-container">
      <h2>Administrar tus citas</h2>
      {citas.length === 0 ? (
        <p>No hay citas registradas</p>
      ) : (
        citas.map((cita, index) => (
          <Card
            key={index}
            Mascota={cita.mascota}
            Dueño={cita.dueno}
            Fecha={cita.fecha}
            Hora={cita.hora}
            Sintomas={cita.sintomas}
            onDelete={() => eliminarCita(index)}
          />
        ))
      )}
    </div>
  );
}

export default Cita;
