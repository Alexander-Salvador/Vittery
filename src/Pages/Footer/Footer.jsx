import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav-servicio-al-cliente">
          <h1 className="footer__nav-servicio-al-cliente-title">About Us</h1>
          <ul className="footer__nav-servicio-al-cliente-list">
            <li className="footer__nav-servicio-al-cliente-list-item">
              <Link>Contactanos</Link>
            </li>
            <li className="footer__nav-servicio-al-cliente-list-item">
              <Link>Horario y tienda</Link>
            </li>
            <li className="footer__nav-servicio-al-cliente-list-item">
              <Link to="/about">Siguenos en redes sociales</Link>
            </li>
            <li className="footer__nav-servicio-al-cliente-list-item">
              <Link to="/about">Tipos de entregas</Link>
            </li>
            <li className="footer__nav-servicio-al-cliente-list-item">
              <Link to="/about">Formas de pago</Link>
            </li>
          </ul>
        </nav>

        <nav className="footer__nav-mi-cuenta">
          <h1 className="footer__nav-mi-cuenta-title">Mi cuenta</h1>
          <ul className="footer__nav-mi-cuenta-list">
            <li className="footer__nav-mi-cuenta-list-item">
              <Link to="/about">Registrate</Link>
            </li>
            <li className="footer__nav-mi-cuenta-list-item">
              <Link to="/about">Cambiar contraseña</Link>
            </li>
            <li className="footer__nav-mi-cuenta-list-item">
              <Link to="/about">Mis compras</Link>
            </li>
            <li className="footer__nav-mi-cuenta-list-item">
              <Link to="/about">Mis datos</Link>
            </li>
          </ul>
        </nav>

        <nav className="footer__nav-nuestras-empresas">
          <h1 className="footer__nav-nuestras-empresas-title">
            Nuestras empresas
          </h1>
          <ul className="footer__nav-nuestras-empresas-list">
            <li className="footer__nav-nuestras-empresas-list-item">
              <Link to="/about">Catalogos</Link>
            </li>
            <li className="footer__nav-nuestras-empresas-list-item">
              <Link to="/about">Concursos</Link>
            </li>
            <li className="footer__nav-nuestras-empresas-list-item">
              <Link to="/about">Promociones</Link>
            </li>
            <li className="footer__nav-nuestras-empresas-list-item">
              <Link to="/about">Descuentos</Link>
            </li>
            <li className="footer__nav-nuestras-empresas-list-item">
              <Link to="/about">Ofertas</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer__copyright">
        <nav className="footer__copyright-nav">
          <li className="footer__copyright-nav-item">
            <Link to="/about">Terminos y condiciones</Link>
          </li>
          <li className="footer__copyright-nav-item">
            <Link to="/about">Politica de privacidad</Link>
          </li>
          <li className="footer__copyright-nav-item">
            <Link to="/about">Cookies</Link>
          </li>
        </nav>
        <p className="footer__copyright-text">
          &copy; 2025 Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
