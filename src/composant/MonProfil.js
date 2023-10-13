import { buildQueries } from '@testing-library/react';
import React from 'react';

const MonProfil= () => {
  const name = 'Soumaïla Cissé';
  const age = 22;

  const styles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px'
  };

  return (
    <div style = {styles}>
      <h1>Salut, je suis {name}!</h1>
      <p>J'ai {age} ans.</p>
      <p>L'année prochaine , j\' aurai {age + 1} ans.</p>
      {age >= 18 && <p>Je suis majeure</p>}
    </div>
  );
};
export default MonProfil;