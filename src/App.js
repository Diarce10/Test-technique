import React, {useState} from 'react';
import './App.css';
import {Squarts} from './utils'

const App=()=> {
  const [backgroundColor, setbackgroundColor] = useState("#fff")

  return (
    <div className="App">
      <div className="Container">
      <div className="Box-top">
        <button className='Button' style={{background:'red'}} onClick={()=>setbackgroundColor('red')}>clickme</button>
        <button className='Button' style={{background:'blue'}} onClick={()=>setbackgroundColor('blue')}>clickme</button>
      </div>
      <div className="Box-center">
          {
            Squarts.map((squart,index)=>(
              <div key={index} className='Box-squart' style={{background:backgroundColor}}>{squart.number}</div>
            ))
          }
      </div>
      <div className="Box-bottom">
        <button className='Button' style={{background:'yellow'}} onClick={()=>setbackgroundColor('yellow')}>clickme</button>
        <button className='Button' style={{background:'green'}} onClick={()=>setbackgroundColor('green')}>clickme</button>
      </div>
      </div>
    </div>
  );
}

export default App;
