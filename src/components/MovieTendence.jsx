import { useRef } from "react";
import "../styles/Tendences.css";

function Tendences() {
  const scrollRef = useRef(null);

  // mover scroll con botones
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (<>
  <h2 style={{
    paddingTop:"30px",
     marginLeft:"120px",
     marginBottom:"20px"
  }}>Tendencias</h2>
    <div className="tendence__wrapper">
      
      {/* Botón izquierda */}
      <button className="arrow left" onClick={scrollLeft}>
        &#8249;
      </button>

      {/* /* Contenedor scrolleable */ }
        <div className="tendence__contain" ref={scrollRef}>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 1" />
            <h1 className="list">1</h1>
          </div>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 2" />
            <h1 className="list">2</h1>
          </div>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 3" />
            <h1 className="list">3</h1>
          </div>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 4" />
            <h1 className="list">4</h1>
          </div>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 5" />
            <h1 className="list">5</h1>
          </div>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 6" />
            <h1 className="list">6</h1>
          </div>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 7" />
            <h1 className="list">7</h1>
          </div>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 8" />
            <h1 className="list">8</h1>
          </div>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 9" />
            <h1 className="list">9</h1>
          </div>
          <div className="portadas__peliculas">
            <img src={`${import.meta.env.BASE_URL}/images/caratula.jpg`} alt="pelicula 10" />
            <h1 className="list">10</h1>
          </div>
        </div>
      <button className="arrow right" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
    <div className="presentation">
      <h2 className="moreMotivesTitle">Mas motivos para unirte</h2>
      <div className="card__presentation-container">
        <div className="card__presentation">
          <h2>Hellou</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor possimus in suscipit, minus ipsam, iste harum eius expedita distinctio numquam dolores! Veritatis consequuntur iste recusandae quis, accusantium officia impedit!</p>
        </div>

          <div className="card__presentation">
          <h2>Hellou</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor possimus in suscipit, minus ipsam, iste harum eius expedita distinctio numquam dolores! Veritatis consequuntur iste recusandae quis, accusantium officia impedit!</p>
        </div>

          <div className="card__presentation">
          <h2>Hellou</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor possimus in suscipit, minus ipsam, iste harum eius expedita distinctio numquam dolores! Veritatis consequuntur iste recusandae quis, accusantium officia impedit!</p>
        </div>

          <div className="card__presentation">
          <h2>Hellou</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor possimus in suscipit, minus ipsam, iste harum eius expedita distinctio numquam dolores! Veritatis consequuntur iste recusandae quis, accusantium officia impedit!</p>
        </div>
      </div>
    </div>
</>  );
}

export default Tendences;
