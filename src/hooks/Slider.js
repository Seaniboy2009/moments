import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Slider = () => {
  const [sliderData, setSliderData] = useState([]);
  const [sliderPosition, setSliderPosition] = useState(0);

  useEffect(() => {
    axios.get('/api/slider/').then((response) => {
      setSliderData(response.data);
    });
  }, []);

  const handleSliderChange = (event, value) => {
    setSliderPosition(value);
    axios.post('/api/slider/update/', { position: value });
  };

  return (
    <div>
      <h1>Slider Example</h1>
      <input
        type="range"
        min={0}
        max={5}
        value={sliderPosition}
        onChange={handleSliderChange}
      />
      <div>{sliderData}</div>
    </div>
  );
};

export default Slider;