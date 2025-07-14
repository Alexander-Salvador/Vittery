// import { Link } from 'react-router-dom';
import { MdPayment } from 'react-icons/md';
import { GoShieldCheck } from 'react-icons/go';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { SiCoinmarketcap } from 'react-icons/si';
import IconWhatsApp from '../GeneralIcons/IconWhatsApp';
import IconInstagram from '../GeneralIcons/IconInstagram';
import IconTikTok from '../GeneralIcons/IconTikTok';
import IconEmail from '../GeneralIcons/IconEmail';
import IconPhone from '../GeneralIcons/IconPhone';
import IconLocation from '../GeneralIcons/IconLocation';
import IconArrowRight from '../GeneralIcons/IconArrowRight';
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
              <h3 className="footer-calltoaction-title">Envío Gratis</h3>
              <p>Compras superiores a $50.</p>
            </div>
          </div>

          <div className="footer-calltoaction-card-quality">
            <div className="footer-calltoaction-icon-container">
              <GoShieldCheck className="footer-calltoaction-icon" />
            </div>
            <div className="footer-calltoaction-titles-container">
              <h3>Compra Segura</h3>
              <p>Satisfacción 100% garantizada.</p>
            </div>
          </div>

          <div className="footer-calltoaction-card-payment">
            <div className="footer-calltoaction-icon-container">
              <MdPayment className="footer-calltoaction-icon" />
            </div>
            <div className="footer-calltoaction-titles-container">
              <h3>Entrega Rápida</h3>
              <p>¡Compra con total confianza!</p>
            </div>
          </div>
        </div>

        <fragment className="footer-calltoaction-divider" />

        <div className="footer-descriptions">
          <div className="footer-descriptions-basics">
            <h2 className="footer-descriptions-basics-title">
              <SiCoinmarketcap className="footer-icon-logo" />
              Vitterys
            </h2>
            <p className="footer-descriptions-basics-text">
              En{' '}
              <strong className="footer-descriptions-basics-text-strong">
                Vitterys somos un equipo
              </strong>{' '}
              comprometido con brindarte la mejor experiencia de compra online.
              Si tienes preguntas o necesitas ayuda, estamos aquí para ti.
            </p>

            <div className="footer-calltoaction-social">
              <div className="footer-calltoaction-social-icons">
                <IconWhatsApp className="footer-calltoaction-social-icon12" />
                <IconInstagram className="footer-calltoaction-social-icon12" />
                <IconTikTok className="footer-calltoaction-social-icon12" />
              </div>
            </div>
          </div>

          <div className="footer-descriptions-links">
            <h2 className="footer-descriptions-links-title">Enlaces Útiles</h2>
            <ul className="footer-descriptions-links-list">
              <li className="footer-descriptions-links-item">
                <a className="footer-descriptions-links-item-link" href="#">
                  Inicio
                </a>
              </li>
              <li className="footer-descriptions-links-item">
                <a className="footer-descriptions-links-item-link" href="#">
                  Ofertas
                </a>
              </li>
              <li className="footer-descriptions-links-item">
                <a className="footer-descriptions-links-item-link" href="#">
                  Categorías
                </a>
              </li>
              <li className="footer-descriptions-links-item">
                <a className="footer-descriptions-links-item-link" href="#">
                  Productos
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-descriptions-contact">
            <h2 className="footer-descriptions-contact-title">
              Atención al Cliente
            </h2>
            <ul className="footer-descriptions-contact-list">
              <li className="footer-descriptions-contact-item">
                <a
                  className="footer-descriptions-contact-item-link"
                  href="mailto:info@vitterys.com">
                  Centro de Ayuda
                </a>
              </li>
              <li className="footer-descriptions-contact-item">
                <a
                  className="footer-descriptions-contact-item-link"
                  href="mailto:info@vitterys.com">
                  Envíos y Devoluciones
                </a>
              </li>
              <li className="footer-descriptions-contact-item">
                <a
                  className="footer-descriptions-contact-item-link"
                  href="mailto:info@vitterys.com">
                  Términos y Condiciones
                </a>
              </li>
              <li className="footer-descriptions-contact-item">
                <a
                  className="footer-descriptions-contact-item-link"
                  href="mailto:info@vitterys.com">
                  Política y Privacidad
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-descriptions-hours">
            <div className="footer-description-hours-container">
              <h2 className="footer-descriptions-hours-title">Contacto</h2>
              <ul className="footer-descriptions-hours-list">
                <li className="footer-descriptions-hours-svg">
                  <IconEmail className="footer-descriptions-hours-item-icon" />
                  <a
                    className="footer-descriptions-hours-item-link"
                    href="mailto:Soporte.vitterys@gmail.com">
                    Soporte.vitterys@gmail.com
                  </a>
                </li>
                <li className="footer-descriptions-hours-svg">
                  <IconPhone className="footer-descriptions-hours-item-icon" />
                  <a
                    className="footer-descriptions-hours-item-link"
                    href="tel:+15551234567">
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="footer-descriptions-hours-svg">
                  <IconLocation className="footer-descriptions-hours-item-icon" />
                  <a
                    className="footer-descriptions-hours-item-link"
                    href="https://www.google.com/maps/place/123+Main+St,+New+York,+NY+10001">
                    123 Main St, New York, NY 10001
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-description-hours-container-bottom">
              <h2 className="footer-descriptions-hours-titleh2">Promociones</h2>
              <p className="footer-descriptions-hours-text2">
                Suscribete para recibir ofertas especiales.
              </p>

              <div className="footer-form-container">
                <form className="footer-descriptions-hours-form">
                  <input
                    type="email"
                    className="footer-descriptions-hours-input"
                    placeholder="Hola@gmail.com"
                    required
                  />
                  <button
                    type="submit"
                    className="footer-descriptions-hours-button">
                    <IconArrowRight className="footer-descriptions-hours-iconArrow" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <fragment className="footer-calltoaction-divider-copyright" />

        <div className="footer-copyright">
          <div className="footer-copyright-left">
            <p className="footer-copyright-text">
              © 2025 Vitterys. Todos los derechos reservados.
            </p>
          </div>
          <div className="footer-copyright-right">
            <p className="footer-copyright-text">
              Diseñado por{' '}
              <a
                className="footer-copyright-link"
                href="https://www.example.com">
                Alexander Salvador ❤️
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
