import React from 'react';
function sortPeopleByName(people) {
    return people.sort((a, b) => a.name.localeCompare(b.name));
  }
const VeriListesi = ({ title, data, text, number }) => {
    const sortedData = sortPeopleByName(data);
    const ages = data.map(person => person.age);
    const totalAge = ages.reduce((total, age) => total + age, 0);

  
  const names = data.map(person => <li key={person.name}>{person.name}</li>);

  return (
    <div>
      <h1>{title}</h1>
      <ul>{names}</ul>
      <p>{text}</p>
      <p>Toplam Yaş: {totalAge}</p>
      <p>Ortalama Yaş: {totalAge / data.length}</p>
    </div>
  );
};

export default VeriListesi;


