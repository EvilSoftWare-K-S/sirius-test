import { Chip } from '@shared/chip';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className='app'>
      <section style={{ marginTop: '100px' }}>
        <h2>Отдельный чипс (модульное использование)</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <Chip
            label='Отдельный чипс'
            value='standalone'
            selected={false}
            // eslint-disable-next-line no-console
            onClick={(value) => console.log('Клик по отдельному чипсу:', value)}
          />
          <Chip label='Выбранный чипс' value='selected' selected={true} />
        </div>
      </section>
    </div>
  );
};

export default App;
