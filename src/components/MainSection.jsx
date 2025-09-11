import { useRef } from 'react'
import '../styles/MainSection.css'

function MainSection() {
  const handleAnimationP = useRef(null);
  const handleValueInput = useRef(null);
  const handleFocus = () => {
   
    if(handleAnimationP.current){

      handleAnimationP.current.classList.add("moveUp")

    }

  };

 const handleBlur = () => {
    if (handleValueInput.current.value === "") {
      // si está vacío, baja
      handleAnimationP.current.classList.remove("moveUp");
      handleAnimationP.current.classList.add("toMoveDown");
      

      // limpiar la clase al terminar animación
      handleAnimationP.current.addEventListener(
        "animationend",
        () => {
          handleAnimationP.current.classList.remove("toMoveDown");
        },
        { once: true }
      );
    } else {
      // si tiene texto, queda arriba de forma estática
      handleAnimationP.current.classList.add("moveUp");
    }
  };

  return (
    <main className="Main-section">
      <section className="first-section">
        <h1>Clon de stream pagina famosa (con fines educativos)</h1>
        <h2>Este sitio no recopila información.</h2>
        
        <p>
          ¿Quieres ver mediaWeb ahora mismo? Todo el contenido que imagines al alcance de un click! Aqui mismo y ahora ("Esta web no contiene videos, ten encuenta eso.").
        </p>

        <div className="email-input__container">
          <input
            ref={handleValueInput}
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="email-input"
          />
          <p ref={handleAnimationP} className="animation__email">
            Email
          </p>
          <button className="send__email-button">Comenzar</button>
        </div>
      </section>
    </main>
  );
}

export default MainSection;
