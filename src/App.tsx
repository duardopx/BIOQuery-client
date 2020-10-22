import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css'
import WoodDummy from './images/wood-dummy.svg'
import Weed from './images/weed.svg'


function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">

        <main>
          <h2>BIOQuery</h2>
        </main>

        <h2>Search for even the smallest molecules</h2>

        <img src={WoodDummy} alt="Wood dummy figure"/>
        <div className="middle">
          <h2>Lots of data</h2>
          <p>We provide a quick way to search for gene expressions, Phenotypes, Proteins and more amazing things.</p>
        </div>
        <button>View more</button>

        <div id="tasd">
          <img src={Weed} alt="fodac"/>
        </div>

        <div id="footer_">

          FOOTer
       
        </div>

      </div>
    </div>
  );
}

export default App;
