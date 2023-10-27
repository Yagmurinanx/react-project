
// import React from 'react';
// import VeriListesi from './mycomponent/VeriListesi';

// function App() {
//   const data = [
//     { name: 'Mark', age: 25 },
//     { name: 'Blake', age: 30 },
//     { name: 'Ed', age: 35 },
//     { name: 'Penn', age: 25 },
//     { name: 'Chance', age: 30 },
//     { name: 'Taylor', age: 35 },
//   ];

//   return (
//     <div className="App">
//       <VeriListesi
//         title="Random İnsanlar"
//         data={data}
//         text="Merhaba, React!"
//       />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css';
import Angelic from './mycomponent/angelic';

function App() {
  return (
    <div className="App">
      <h1>Angels Number for The New Day</h1>
      <Angelic />
    </div>
  );
}

export default App;

