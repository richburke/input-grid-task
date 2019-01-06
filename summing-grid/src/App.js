import React from 'react';
import SumGrid from './components/sumGrid';
import './App.css';

const INPUT_CELLS_PER_ROW = 3;

const App = () => (
  <div className="App">
    <SumGrid
      inputCellsPerRow={INPUT_CELLS_PER_ROW}
    />
  </div>
)

export default App;
