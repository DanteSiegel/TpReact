import React, { useState } from 'react';
import './Formulario.css';

const Formulario = ({ agregarCita }) => {
    const [mascota, setMascota] = useState('');
    const [dueno, setDueno] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [sintomas, setSintomas] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!mascota || !dueno || !fecha || !hora || !sintomas) {
            alert('Todos los campos son requeridos');
            return;
        }
        const nuevaCita = {
            mascota,
            dueno,
            fecha,
            hora,
            sintomas
        };
        agregarCita(nuevaCita);
        // Limpiar campos después de agregar la cita
        setMascota('');
        setDueno('');
        setFecha('');
        setHora('');
        setSintomas('');
    };

    return (
        <div className="formulario-container">
            <h2>Crear cita</h2>
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label>Nombre Mascota:</label>
                    <input
                        type="text"
                        value={mascota}
                        onChange={(e) => setMascota(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label>Nombre Dueño:</label>
                    <input
                        type="text"
                        value={dueno}
                        onChange={(e) => setDueno(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label>Fecha:</label>
                    <input
                        type="date"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label>Hora:</label>
                    <input
                        type="time"
                        value={hora}
                        onChange={(e) => setHora(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label>Síntomas:</label>
                    <textarea
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <button type="submit">Agregar Cita</button>
            </form>
        </div>
    );
}

export default Formulario;
