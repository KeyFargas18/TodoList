import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){
    const onClickButton = (msg) => {
        alert(props.txt);
      };
      
      return (
        <div>
          {/* ✅ */}
          <button
              className="CreateTodoButton"
              onClick={() => onClickButton('Aquí se debería abrir el modal')}
            >
              +
            </button>
            {/* ❌ */}
            <button
              className="CreateTodoButton"
              onClick={onClickButton('Esta función se ejecuta al inicio, no al presionar el botón')} 
              /* Para que no se ejecuete al inicio debemos de embolver nuestro onclick () => */
            >
              +
            </button>
        </div>
            
      );
    }

export { CreateTodoButton };