import React from 'react';
import './cta.css';
import handCard from '../../assets/handCard.png';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h1>Construye tu futuro</h1>
      <p>Solicita tu tarjeta ahora, sólo necesitas tu cédula. </p>
      <div className="gpt3__cta-btn">
        <button type="button">Quiero una helppify</button>
      </div>
    </div>
    <img src={handCard} className="img-card" />
  </div>
);

export default CTA;
