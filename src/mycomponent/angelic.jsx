import React, { useState } from 'react';


const Angelic = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [angelsNumber, setAngelsNumber] = useState(null);

 
  const checkIfThreeDigitNumber = (number) => {
    return (
      number >= 100 && number <= 999 && 
      (number % 10 === Math.floor(number / 10) % 10) && 
      (number % 10 === Math.floor(number / 100)) 
    );
  };

  const generateRandomNumber = () => {
    let randomNum;

    do {
      randomNum = Math.floor(Math.random() * 900) + 100;
    } while (!checkIfThreeDigitNumber(randomNum)); 

    setAngelsNumber(randomNum); 
  };

  const resetCard = () => {
    setAngelsNumber(null);
    setIsFlipped(false)
  }

return (
  <div className="container">
    <div className={`card ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <p className="title"></p>
          <p>Angels Number: {angelsNumber}</p>
        </div>
        <div className='button-container'>
          <button className="button-33" onClick={generateRandomNumber}>Generate Random Angels Number</button>
          <button className="button-33" onClick={resetCard}>Reset Card</button>
        </div>
        <div className="flip-card-back">
          <p className="title"></p>
        </div>
      </div>
    </div>
  </div>
);
}
export default Angelic;


