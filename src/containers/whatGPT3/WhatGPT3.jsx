import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import seated from '../../assets/seatedCard.png';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="¿Cómo funciona? Fácil!"
        text="Tu tarjeta es crédito garantizada y la puedes usar para comprar en internet o en cualquier datáfono del mundo gracias al respaldo de Visa. Paga tu helppify a tiempo y comienza a construir tu puntaje crediticio."
      />
      <div className="gpt3__whatgpt3-image">
        <img src={seated} />
      </div>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Beneficios van más allá de tu imaginación</h1>
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
