import { useState } from "react"
import '../index.css'
import '../styles/Header.css'
function Header(){



    return(<>
    
    <header className="header">
        {/* image container */}
        <div className="logo__container">
        <img src={`${import.meta.env.BASE_URL}logos/mediaWebLogo.png`} alt="Logo"   className="mediaWeb__logo"/>
        </div>

        {/* options container lenguaje and start sesion */}

        <div className="lenguaje-and-section">
            
          <select name="change-lenguaje" id="" className="idiom-select">
            
            <option value="spanish">Español</option>
            <option value="english">Ingles</option>
          </select>
          <button className="start-sesion">iniciar sesión</button>

        </div>
    </header>
        
    </>)
}
export default Header