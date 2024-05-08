import React from 'react';
import './Cita.css';
import Card from '../Card/Card';

const Cita = ({ citas, eliminarCita }) => {
  const handleEliminarCita = (index) => {
    const confirmacion = window.confirm('¿Estás seguro de eliminar esta cita?');
    if (confirmacion) {
      eliminarCita(index);
    }
  };

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
            onDelete={() => handleEliminarCita(index)} // Usamos la función de confirmación
          />
        ))
      )}
    </div>
  );
}

export default Cita;
