import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={{ margin: 0 }}>Lucas da Silva Raupp - Turma 3B</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
    width: '100%',
  }
};

export default Header;
