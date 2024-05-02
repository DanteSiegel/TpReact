import './Cita.css';
import Card from '../Card/Card';

const Cita = (
) => {
    return (
       <div class="one-half column">
       <h2>Administra tus citas </h2>
       <form>
        <Card Mascota='Nina' Dueño='Martin' Fecha='2021-08-05' Hora='08:20' Sintomas='Le duele la pierna'></Card>
        <Card Mascota='Sifon' Dueño='Flecha' Fecha='2023-08-05' Hora='09:24' Sintomas='Duerme mucho'></Card>
        <Card Mascota='Floki' Dueño='Ari' Fecha='2023-08-05' Hora='16:15' Sintomas='No esta comiendo'></Card>
       </form>
       </div>
    );
}

export default Cita;