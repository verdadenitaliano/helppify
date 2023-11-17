import React from 'react';
import './cardFeatures.css';
import affordable from '../../assets/affordable.png';

// const CardFeatures = () => (
//   <div className="feature-card">
//     <div className="gradient-bg">
//       <div className="feature-down">
//         <img src={affordable} alt="" />
//         <div className="fature-title">ASEQUIBLE</div>
//         <div className="feature-description">
//           Con tasas de interes justas y los precios que te mereces siempre, te cuidamos la espalda
//           asrjgajbg;rejbeb;veb;rvhbe;rv hv fdjhbvhabeifhbwh ewbfihbwhbwg
//         </div>
//         <div className="feature-button"><a href="mail">here goes the link</a></div>
//       </div>
//     </div>
//   </div>
//
// );

function CardFeatures() {
  return (
    <div className="card">
      <img className="card-image" src={affordable} alt="affordable" />
      <h2 className="card-title">ASEQUIBLE</h2>
      <p className="card-text">Con tasas de interés justas y precios transparentes, nuestra plataforma te ofrece el control total.</p>
    </div>
  );
}

export default CardFeatures;
