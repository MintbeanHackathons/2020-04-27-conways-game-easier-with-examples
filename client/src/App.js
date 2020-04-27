import React from 'react';
import { ConwaysGameEngine } from '@monarchwadia/conways-game-engine';
import './App.css';



function App() {



const grid = new ConwaysGameEngine();
const random = (Math.random()*10);

let randomspot = grid.draw(Math.round(random), Math.round(random))


const world = grid.world.map((row, rowI) => (
  <div className="cell" key={rowI}>
  {
    row.map((cell, cellI) => (
          <span className="cell" key={`${rowI}-${cellI}-${cell}`}> { cell ? "*" : "." } </span>
        ))
      }
    </div>
  ))
  
    return (
      <div>
        {world}
      </div>
    )
  }

  export default App;


