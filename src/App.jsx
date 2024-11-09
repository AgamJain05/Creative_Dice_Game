import { useState } from 'react';
import Dice from 'react-dice-roll';
import './App.css';

function App() {
  const [points, setPoints] = useState(0);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleRoll = (value) => {
    if (selectedValue === null) {
      alert("Please select a number first!");
      return;
    }
    if (value === selectedValue) {
      setPoints((prevPoints) => prevPoints + 5);
    } else {
      setPoints((prevPoints) => prevPoints - 1);
    }
    setSelectedValue(null); // Reset the selected value
  }


  return (
    <>
      <h1 className="text-3xl font-bold underline text-center mb-5">
        Dice Game
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <button
            key={num}
            className={`w-12 h-12 flex justify-center items-center border border-black rounded-md text-lg ${
              selectedValue === num ? 'bg-purple-500 text-white' : ''
            }`}
            onClick={() => setSelectedValue(num)}
          >
            {num}
          </button>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Dice defaultValue = {1} onRoll={handleRoll} />
      </div>

      <div className="mt-5 text-center">
        <h2 className="text-2xl">Points Earned: {points}</h2>
      </div>
    </>
  );
}

export default App;
