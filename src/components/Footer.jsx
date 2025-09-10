import "../styles/Footer.css";

export default function Footer() {
  return (
   <>
    <footer className="footer">
      {/* Teléfono */}
      <p className="footer__phone">
        ¿Preguntas? Llama al{" "}
        <a href="#">01 800 917 1564</a>
      </p>

      {/* Links */}
      <div className="footer__links">
        <a href="#">Preguntas frecuentes</a>
        <a href="#">Centro de ayuda</a>
        <a href="#">Cuenta</a>
        <a href="#">Prensa</a>

        <a href="#">Relaciones con inversionistas</a>
        <a href="#">Empleo</a>
        <a href="#">Canjear tarjetas de regalo</a>
        <a href="#">Comprar tarjetas de regalo</a>

        <a href="#">Formas de ver</a>
        <a href="#">Términos de uso</a>
        <a href="#">Privacidad</a>
        <a href="#">Preferencias de cookies</a>

        <a href="#">Información corporativa</a>
        <a href="#">Contáctanos</a>
        <a href="#">Prueba de velocidad</a>
        <a href="#">Avisos legales</a>

        <a href="#">Solo en Netflix</a>
      </div>

      {/* Selector de idioma */}
      <div className="footer__lang">
        <select>
          <option>Español</option>
          <option>English</option>
        </select>
      </div>

      {/* Footer final */}
      <p className="footer__country">Netflix Colombia</p>
      <p className="footer__captcha">
        Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot.{" "}
        <a href="#">Más info</a>.
      </p>
    </footer></>
  );
}
