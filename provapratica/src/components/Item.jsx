import React from 'react';
import './Item.css'; // Importando o arquivo de estilos CSS

const Item = ({ club }) => {
  return (
    <div className="club-item">
      <img src={club.escudo_url} alt={club.nome} className="club-image" />
      <div>
        <h2>{club.nome}</h2>
        <p>{club.apelido}</p>
      </div>
    </div>
  );
};

export default Item;
