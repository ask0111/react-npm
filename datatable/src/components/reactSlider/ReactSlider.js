import React, { useState } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';


function YearRangeSlider() {
  const [yearRange, setYearRange] = useState([2000, 2022]);

  // const handleYearChange = (value) => {
  //   setYearRange(value);
  // };
  const handleYearChange = (value) => {
    setYearRange(value);
  };

  return (
    <div className="container mt-4">
      <h1>Year Range Slider</h1>
      <div className="row mt-4">
        <div className="col-md-8">
          <Slider
            min={2000}
            max={2022}
            range
            value={yearRange}
            onChange={handleYearChange}
            trackStyle={[{ backgroundColor: '#007BFF', height: 5 }]}
            handleStyle={[
              { borderColor: '#007BFF', height: 20, width: 20 },
              { borderColor: '#007BFF', height: 20, width: 20 },
            ]}
            railStyle={{ backgroundColor: '#D3D3D3', height: 5 }}
          />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-12">
          <p>
            Selected Range: {yearRange[0]} - {yearRange[1]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default YearRangeSlider;
