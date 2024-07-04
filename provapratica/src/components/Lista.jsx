import React, { useEffect, useState } from 'react';
import Item from './Item';
import './Lista.css';

const Lista = () => {
  const [clubs, setClubs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://api.cartola.globo.com/clubes')
      .then(response => response.json())
      .then(data => {
        const clubsArray = Object.values(data);
        setClubs(clubsArray);
      })
      .catch(error => console.error('Erro ao buscar clubes:', error));
  }, []);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredClubs = clubs.filter(club =>
    club.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lista-container">
      <input
        type="text"
        placeholder="Buscar por clube..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="club-list">
        {filteredClubs.map(club => (
          <Item key={club.id} club={{ nome: club.nome, apelido: club.apelido, escudo_url: club.escudos['60x60'] }} />
        ))}
      </div>
    </div>
  );
};

export default Lista;
