import React from 'react';
import logo from './logo.svg';
import icon from './icon.svg';
import mark from './question-mark.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-left">
          <img src={logo} />
          <div className='name'>Luv4xx</div>
        </div>
        <div className='header-right'>2022</div>
      </div>
      <div className='center'>
        <div className='left'>
        Luv For
        </div>
        <div className="right">
         <div className="top swing">
           <img src={mark} />
         </div>
         <div className='block'></div>
         <div className='bottom'>
           <div className="bottom-first">...so much</div>
           <div className="bottom-second">COMING SOON</div>
         </div>
        </div>
      </div>
      <div className='footer'>
        <div className='icon'>
          <img src={icon} />
        </div>
        I kinda dislike <span>
          <a href={"https://open.spotify.com/track/2nBPqKLFQUeBQhs03cKGU3?si=9612a22b69f648bb"} target={"_blank"} rel="noreferrer">
          monday mornings
          </a>
          </span> ...
      </div>
    </div>
  );
}

export default App;
