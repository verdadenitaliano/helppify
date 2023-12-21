import React from 'react';
import './cardFeatures.css';
import '../../containers/features/features.css';
import affordable from '../../assets/affordable.png';
import simple from '../../assets/approvedCheck.png';
import secure from '../../assets/secure.png';
import forYou from '../../assets/bike.png';

const featuresData = [
  {
    title: 'POSIBLE',
    text: 'Con tasas de interés justas y precios transparentes, nuestra plataforma te ofrece el control total.',
    image: affordable,
  },
  {
    title: 'SIMPLE',
    text: 'Y sin rechazos. Nuestros asesores te acompañan para asegurar un proceso fácil.',
    image: simple,
  },
  {
    title: 'SEGURO',
    text: 'Con un robusto sistema de procesamiento de datos encriptados y pagos en línea seguros.',
    image: secure,
  },
  {
    title: 'PARA TODO',
    text: 'Disfruta de la conveniencia y la facilidad de hacer tus pagos donde quieras, cuando quieras.',
    image: forYou,
  },
];

function CardFeatures() {
  return (
    <div className="card-features" id="cardFeatures">
      <div className="card-title">
        <h1>Tu Tarjeta Crédito helppify!</h1>
        <p>Pensada para mejorar tu salud financiera</p>
      </div>
      <div className="card-container">
        {featuresData.map((item, index) => (
          <div className="card" key={index}>
            <img className="card-image" src={item.image} />
            <h2 className="card-title">{item.title}</h2>
            <p className="card-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardFeatures;
