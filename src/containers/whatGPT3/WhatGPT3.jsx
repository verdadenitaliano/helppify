import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';
import seated from '../../assets/seatedCard.png';
import greenCheck from '../../assets/greenCheck.png';

const featuresData = [
  {
    title: 'Construye y mejora tu puntaje crediticio.',
    image: greenCheck,
  },
  {
    title: 'Escoge el cupo a tu medida de pago.',
    image: greenCheck,
  },
  {
    title: 'Sin papeleo, filas ni oficinas.',
    image: greenCheck,
  },
  {
    title: 'Te devolvemos parte de los intereses.',
    image: greenCheck,
  },
  // {
  //   title: 'Paga todos tus servicios desde tu cuenta helppify.',
  //   image: greenCheck,
  // },
  // {
  //   title: 'Descuentos y promociones exclusivos',
  //   image: greenCheck,
  // },
];
const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 " id="wgpt3">
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
      <h1 className="gradient__text">Beneficios más allá de tu imaginación</h1>
      <p>Escoge tu plan</p>
    </div>
    <div className="perk-container">
      {featuresData.map((item, index) => (
        <div className="perks" key={index}>
          <img className="perk-icon" src={item.image} />
          <h2 className="perk-text">{item.title}</h2>
        </div>
      ))}
    </div>
  </div>
);

export default WhatGPT3;
