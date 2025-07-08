// import { Link } from 'react-router-dom';
import { MdPayment, MdAccessTime } from 'react-icons/md';
import { GoShieldCheck } from 'react-icons/go';
import { LiaShippingFastSolid } from 'react-icons/lia';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer-calltoaction">
          <div className="footer-calltoaction-card-shipping">
            <div className="footer-calltoaction-icon-container">
              <LiaShippingFastSolid className="footer-calltoaction-icon" />
            </div>

            <div className="footer-calltoaction-titles-container">
              <h3 className="footer-calltoaction-title">Envío Exprés Gratis</h3>
              <p>Compras superiores a $50.</p>
            </div>
          </div>

          <div className="footer-calltoaction-card-quality">
            <div className="footer-calltoaction-icon-container">
              <GoShieldCheck className="footer-calltoaction-icon" />
            </div>
            <div className="footer-calltoaction-titles-container">
              <h3>Garantía de Satisfacción</h3>
              <p>Satisfacción 100% garantizada.</p>
            </div>
          </div>

          <div className="footer-calltoaction-card-payment">
            <div className="footer-calltoaction-icon-container">
              <MdPayment className="footer-calltoaction-icon" />
            </div>
            <div className="footer-calltoaction-titles-container">
              <h3>Pago Seguro</h3>
              <p>¡Compra con total confianza!</p>
            </div>
          </div>
        </div>

        <div className="footer-descriptions">
          <div className="footer-descriptions-basics">
            <h2>Vitterys</h2>
            <p>
              En <strong>Tu Tienda</strong>, nos esforzamos por ofrecerte la
              mejor experiencia de compra en línea. Si tienes alguna pregunta o
              necesitas ayuda, no dudes en contactarnos.
            </p>
          </div>

          <div className="footer-descriptions-links">
            <h2>Enlaces Útiles</h2>
            <ul>
              <li>
                <a href="#">Política de Privacidad</a>
              </li>
              <li>
                <a href="#">Términos y Condiciones</a>
              </li>
              <li>
                <a href="#">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>

          <div className="footer-descriptions-contact">
            <h2>Contacto</h2>
            <ul>
              <li>
                <a href="mailto:info@vitterys.com">info@vitterys.com</a>
              </li>
            </ul>
          </div>

          <div className="footer-descriptions-hours">
            <h2>Horario de Atención</h2>
            <ul>
              <li>
                <MdAccessTime className="footer-calltoaction-icon" />
                Lunes a Viernes: 9:00 AM - 6:00 PM
              </li>
              <li>
                <MdAccessTime className="footer-calltoaction-icon" />
                Sábado: 10:00 AM - 4:00 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
