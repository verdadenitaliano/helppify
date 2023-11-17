import React from 'react';
// import people from '../../assets/people.png';
// import ai from '../../assets/ai.png';
import score from '../../assets/original.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Empieza a construir tu historial crediticio hoy mismo</h1>
      <p>Con Helpify, confía en una experiencia financiera innovadora, segura y diseñada para tu éxito.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Ingresa tu correo" />
        <button type="button">Empecemos</button>
      </div>

      <div className="gpt3__header-content__people">
        {/* <img src={people} /> */}
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={score} />
    </div>
  </div>
);

export default Header;
