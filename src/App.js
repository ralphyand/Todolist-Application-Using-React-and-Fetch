
import './App.css';

import ListaDetareas from './componentes/lista-de-tareas';


function App() {
  return (
    <div className="aplicacion-tareas">
     <div className='tarea-lista-principal'>
        <h1> Mis Tareas</h1>
        
    <ListaDetareas/>
     </div>

    </div>
  
  
  );
}

export default App;
