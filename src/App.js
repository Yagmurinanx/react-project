
import React from 'react';
import VeriListesi from './mycomponent/VeriListesi';

function App() {
  const data = [
    { name: 'Mark', age: 25 },
    { name: 'Blake', age: 30 },
    { name: 'Ed', age: 35 },
    { name: 'Penn', age: 25 },
    { name: 'Chance', age: 30 },
    { name: 'Taylor', age: 35 },
  ];

  return (
    <div className="App">
      <VeriListesi
        title="Random İnsanlar"
        data={data}
        text="Merhaba, React!"
      />
    </div>
  );
}

export default App;

