import logo from './logo.svg';
import Titulo from './components/Titulo/Titulo.js';
import Formulario from './components/Formulario/Formulario.js';
import Cita from './components/Cita/Cita.js'
import './App.css';

function App() {
  
  return (
    <>
      {<Titulo/>}
      <div class="container">
        <div class="row">
        <Formulario></Formulario>
        <Cita></Cita>
        </div>
      </div>
    </>
  );
}

export default App;