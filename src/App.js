
import React, { useState } from 'react';
import Style from './App.css';

const ACPHCalculator = () => {
  const [roomVolume, setRoomVolume] = useState('');
  const [airflowRate, setAirflowRate] = useState('');
  const [ach, setACH] = useState('');

  const calculateACH = () => {
    const volume = parseFloat(roomVolume);
    const airflow = parseFloat(airflowRate);
    const ach = (airflow * 60) / volume;
    setACH(ach.toFixed());
  };

  return (
    <div className='Style'>
      <p style={{fontSize:"30px"}}>ACPH : It is basically the ratio of the volume of air that is to be added or removed
         from an area to the volume of the area. If Q amount of air enters into the room
          of volume of V, then Air Changes per Hour = Air quantity / Volume = Q/V </p>
      <h1> <marquee> CALCULATE AIR CHANGES PER HOUR</marquee></h1>
      <h2>ACPH Calculator</h2>
      <span>
      <label>Room Volume (cubic feet):</label>
      <input
        type="number"
        value={roomVolume}
        onChange={(e) => setRoomVolume(e.target.value)}
      />
      <br />
      <label>Airflow Rate (CFM)      :</label>
      <input
        type="number"
        value={airflowRate}
        onChange={(e) => setAirflowRate(e.target.value)}
      />
      <br />
      <button onClick={calculateACH}>Calculate</button>
      <br />
      {ach && <p>ACPH: {ach}</p>}
      </span>
    </div>
  );
};

export default ACPHCalculator;
