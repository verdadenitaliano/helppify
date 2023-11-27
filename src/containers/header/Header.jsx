import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import unlockCard from '../../assets/unlockCard.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Empieza a construir tu historial crediticio hoy mismo</h1>
      <p>Con helppify, confía en una experiencia financiera innovadora, segura y diseñada para tu éxito.
        <br />
        La tarjeta de crédito que te aprobamos sin condiciones.
      </p>

      <div className="gpt3__know-more">
        <p>Saber más</p>
        <button type="button">Crear mi helppify</button>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={unlockCard} />
    </div>
  </div>
);

export default Header;
