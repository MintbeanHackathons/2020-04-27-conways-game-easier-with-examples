

import React from 'react';

import { ConwaysGameEngine, defaultRules  } from '@monarchwadia/conways-game-engine';

import './App.css';

/* const renderer = require('./renderer'); */
import renderer from './renderer';





 
/* const config = {
  
  rowSize: 20,
  colSize: 50,
  rules: defaultRules(), 
  allowMultipleRuleMatches: false 
}


function App() {

  const engine = new ConwaysGameEngine(config);

  engine.draw(3, 4);
  engine.draw(4, 5);
  engine.draw(5, 5);
  engine.draw(5, 4);
  engine.draw(5, 3);
  
  renderer(engine);
  
  // CALCULATE
  for (var i = 0; i < 10; i++) {
    engine.step();
    renderer(engine);
  } */

  function App() {
    const rules = defaultRules();

    rules.push({
      name: "Random Dots",
      matcher: () => Math.random() > 0.7,
      result: 1
    })
    
    const engine = new ConwaysGameEngine({
      rules,
      allowMultipleRuleMatches: true
    });
    
    engine.draw(3, 4);
    engine.draw(4, 5);
    engine.draw(5, 5);
    engine.draw(5, 4);
    engine.draw(5, 3);
    
    renderer(engine);
    
    // CALCULATE
    for (var i = 0; i < 50; i++) {
      engine.step();
      renderer(engine);
    }




    return (
      <div className="App">
        {renderer(engine)}
      </div>
    );
}

export default App;