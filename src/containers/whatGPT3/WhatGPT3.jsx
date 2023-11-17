import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="¿Qué es Helpify?" text="Somos una cooperativa financiera comprometida con el futuro financiero de personas como tú. Nuestro enfoque está en hacer accesible el crédito de manera responsable y transparente. Ofrecemos una oportunidad única, segura y confiable al proporcionarte una tarjeta de crédito prefondeada. Esta tarjeta te permite realizar pagos y establecer un historial crediticio sólido y confiable para comenzar tu historia crediticia fácil y con beneficios exclusivos." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Las posibilidades van más allá de tu imaginación</h1>
      <p>Escoge tu plan</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Cupo personalizado" text="Ajustado a tu capacidad." />
      <Feature title="Sin papeleo" text="Simplifica el proceso." />
      <Feature title="Devolución de intereses" text="¡Sí, te devolvemos una parte de los intereses!" />
    </div>
  </div>
);

export default WhatGPT3;
