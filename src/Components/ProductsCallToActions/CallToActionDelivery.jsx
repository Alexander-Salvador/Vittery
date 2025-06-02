import { MdPayment, MdAccessTime } from 'react-icons/md';
import { GoShieldCheck } from 'react-icons/go';
import { LiaShippingFastSolid } from 'react-icons/lia';
import './CallToActionDelivery.css';

const CallToActionDelivery = () => {
  return (
    <div className="calltoaction__container">
      <div className="calltoaction-card shipping">
        <div className="calltoaction-shipping__icon">
          <LiaShippingFastSolid className="calltoaction-icon" />
        </div>
        <h3>Envío Exprés Gratis</h3>
        <p>
          Recibe tu pedido sin costo en compras superiores a $50. ¡Lo llevamos
          hasta tu puerta!
        </p>
      </div>

      <div className="calltoaction-card delivery">
        <div className="calltoaction-delivery__icon">
          <MdAccessTime className="calltoaction-icon" />
        </div>
        <h3>Entrega el Mismo Día</h3>
        <p>
          Haz tu pedido antes de las 2 PM y recíbelo hoy mismo en tu ubicación.
        </p>
      </div>

      <div className="calltoaction-card quality">
        <div className="calltoaction-quality__icon">
          <GoShieldCheck className="calltoaction-icon" />
        </div>
        <h3>Garantía de Satisfacción</h3>
        <p>
          Satisfacción 100% garantizada o te devolvemos tu dinero en 30 días.
        </p>
      </div>

      <div className="calltoaction-card payment">
        <div className="calltoaction-payment__icon">
          <MdPayment className="calltoaction-icon" />
        </div>
        <h3>Pago Seguro</h3>
        <p>
          Elige entre múltiples métodos de pago protegidos. ¡Compra con total
          confianza!
        </p>
      </div>
    </div>
  );
};

export default CallToActionDelivery;
