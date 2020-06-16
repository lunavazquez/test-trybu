import React from 'react';
import './card.css';

export default function Card(props) {
  const { type, img, id, name } = props;
  return (
    <div className="pokemon" style={{ backgroundColor: `var(--${type})` }}>
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="info">
        <span className="number">#{id}</span>
        <h3 className="name">{name}</h3>
        <small className="type">
          Tipo:
          <span>{type}</span>
        </small>
      </div>
    </div>
  );
}
