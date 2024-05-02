import './Formulario.css';
import ItemFormulario from '../ItemFormulario/ItemFormulario';

const Formulario = () => {
    return (
        <div class="one-half column">
        <h2>Crear mi cita </h2>
       <form>
        <ItemFormulario texto='Nombre Mascota' placeHolder='Nombre Mascota' type='text' ></ItemFormulario>
        <ItemFormulario texto='Nombre Dueño' placeHolder='Nombre dueño de la mascota' type='text' ></ItemFormulario>
        <ItemFormulario texto='Fecha' type='date'></ItemFormulario>
        <ItemFormulario texto='Hora' type='time' ></ItemFormulario>
        <label>Sintomas</label>
        <textarea class='u-full-width' name='sintomas'></textarea>
        <input type='submit' value='Agregar Cita' class='u-full-width button-primary'></input>
       </form>
       </div>
    );
}

export default Formulario;