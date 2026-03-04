import { ChipList } from '@features/chip-List';
import { Chip } from '@shared/chip';
import React, { useState } from 'react';

const App: React.FC = () => {
  const [selectedChips, setSelectedChips] = useState<(string | number)[]>([]);

  const chipsData = [
    { label: 'React', value: 'react' },
    { label: 'TypeScript', value: 'typescript' },
    { label: 'JavaScript', value: 'javascript' },
    { label: 'Node.js', value: 'nodejs' },
    { label: 'Python', value: 'python' },
    { label: 'Java', value: 'java' },
    { label: 'C++', value: 'cpp' },
    { label: 'Ruby', value: 'ruby' },
    { label: 'Go', value: 'go' },
    { label: 'Rust', value: 'rust' },
  ];

  return (
    <div className='app'>
      <h1>Пример использования ChipList</h1>

      <section>
        <h2>Список чипсов</h2>
        <ChipList
          chips={chipsData}
          selectedValues={selectedChips}
          onSelectionChange={setSelectedChips}
          multiple={true}
        />
      </section>

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
