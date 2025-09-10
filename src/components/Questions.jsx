
import '../styles/QUestions.css'

function PreguntasFrecuentes(){
    
    return (
      <>
        <section className="faq">
          <details>
            <summary>¿Qué es Ñetflix?</summary>
            <p>Este es un trabajo para aprender HTML, CSS y JavaScript.</p>
          </details>

          <details>
            <summary>Por que este sitio existe?</summary>
            <p>Aquí se utiliza React para construir la interfaz de usuario.</p>
          </details>

          <details>
            <summary>Motivos</summary>
            <p>El proyecto es solo para fines educativos y no tiene fines comerciales.</p>
          </details>

          <details>
            <summary>Mas motivos</summary>
            <p>Se practica el desarrollo de componentes y el manejo de estilos en React.</p>
          </details>
        </section>
      </>
    )
}

export default PreguntasFrecuentes