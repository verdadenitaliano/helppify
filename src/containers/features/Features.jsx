import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'ASEQUIBLE',
    text: 'Con tasas de interés justas y cuentas claras, nuestra plataforma te ofrece el control total. Accede a tu información en todo momento.',
  },
  {
    title: 'SIMPLE',
    text: 'Y sin rechazos. Nuestros asesores te acompañan para asegurar un proceso fácil que te lleva hacia tu historial crediticio sin obstáculos',
  },
  {
    title: 'SEGURO',
    text: 'Tu seguridad es nuestra prioridad. Con un robusto sistema de procesamiento de datos encriptados y pagos en línea seguros, te ofrecemos la tranquilidad que mereces.',
  },
  {
    title: 'PARA LO QUE QUIERAS',
    text: 'Paga sin complicaciones en cualquier lugar que acepte Visa: desde el mercado de la esquina hasta tus compras favoritas en línea. Disfruta de la conveniencia y la facilidad de hacer tus pagos donde quieras, cuando quieras.',
  },
];

const Features = () => (
  <div className="card">
    <div className="card-title">
      <h1 className="gradient__text">El futuro es ahora y sólo tienes que darte cuenta. Empieza hoy y hazlo realidad.</h1>
      <p>Abre tu cuenta Helpify para empezar</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
