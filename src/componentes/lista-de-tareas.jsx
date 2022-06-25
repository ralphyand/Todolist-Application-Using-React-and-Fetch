import React, {useState,useEffect} from "react";
import Tarea from "./tarea";
import TareaFormulario from "./tareaformulario"
import '../hojas-de-estilo/listadetareas.css';



function ListaDeTareas() {

    const [tareas, setTareas] = useState([]);
      //aqui llamamos a la api
    useEffect (()=>{
      fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr')
      .then(response => response.json())
      .then(response => setTareas(response))


    }, [])

  
    const agregarTarea = tarea => {
      if (tarea.texto.trim()) {
        tarea.texto = tarea.texto.trim();
        const tareasActualizadas = [tarea, ...tareas];
        setTareas(tareasActualizadas);
      }
    }
  
    const eliminarTarea = id => {
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    }
  
    const completarTarea = id => {
      const tareasActualizadas = tareas.map(tarea => {
        if (tarea.id === id) {
          tarea.completada = !tarea.completada;
        }
        return tarea;
      });
      setTareas(tareasActualizadas);
    }
    
    return (
      <>


      
        <TareaFormulario onSubmit={agregarTarea} />
        <div className='tareas-lista-contenedor'>
          {
            tareas.map((value, index , tarea) =>
              <Tarea
                key={tarea.id, index}
              
                id={tarea.id} 
                texto={tarea.texto, value.label}
                completada={tarea.completada}
                completarTarea={completarTarea}
                eliminarTarea={eliminarTarea} />
   
            
            ) 
          }
        </div>
<div className="footer">
<h1> Tienes {tareas.length} Tareas Pendientes</h1>


</div>



      </>
    );    
  }
  
  export default ListaDeTareas;