import { useRef  } from 'react';
import '../styles/StartÑetflix.css'

function EmpezarNetflix(){
      const handleAnimationP = useRef(null);
  const handleValueInput = useRef(null);
  const handleFocus = () => {
   
    if(handleAnimationP.current){

      handleAnimationP.current.classList.add("MoveUp")

    }

  };

 const handleBlur = () => {
    if (handleValueInput.current.value === "") {
      // si está vacío, baja
      handleAnimationP.current.classList.remove("MoveUp");
      handleAnimationP.current.classList.add("MoveDown");
      

      // limpiar la clase al terminar animación
      handleAnimationP.current.addEventListener(
        "animationend",
        () => {
          handleAnimationP.current.classList.remove("MoveDown");
        },
        { once: true }
      );
    } else {
      // si tiene texto, queda arriba de forma estática
      handleAnimationP.current.classList.add("MoveUp");
    }
  };
    return (<>
    
    <div className="input__email-container-two">
      <input ref={handleValueInput}  type="text" className='input__email' onFocus={handleFocus} onBlur={handleBlur}/>
      <p className='textPlaceHolderAnimation' ref={handleAnimationP}>Email</p>
      <button className='send-button'>Comenzar</button>
    </div>
 
    </>)
}

export default EmpezarNetflix