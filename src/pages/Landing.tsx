import React from 'react';
import '../styles/pages/landing.css'
import WoodDummy from '../images/wood-dummy.svg'
import PeopleOnTheGrass from '../images/people-on-the-grass.svg'

function Landing() {
    return (
    <div id="page-landing">
      <div className="content-wrapper">

          <div id="header-content-wrapper">
        <main>
          <h2 id="title">BIOQuery</h2>
        </main>

        <h2 id="central-text">Search for even the smallest <br/> molecules</h2>
              <p id="line">-</p>

              <img src={WoodDummy} alt="Wood dummy figure"/>

              <input type="text" placeholder="Type anything..."/>

              <p id="fancy">.</p>

          </div>

          <div id="middle-content-wrapper">
              <h2 id="first-message">Lots of data</h2>

              <p id="second-message">We provide a quick way to search for gene expressions, Phenotypes, Proteins and more amazing things.</p>

              <button id="view-more">View more</button>

              <h2 id="third-message">The union makes the difference</h2>

              <img id="peaple-on-the-grass" src={PeopleOnTheGrass} alt="People on the grass"/>

              <p id="forth-message">
                  You can contribute and help many people who seek your knowledge. Edit the pages, participate in the forum and make it possible to create amazing things.
              </p>

              <button id="participate">PARTICIPATE</button>
          </div>


        <div id="last-content-wrapper">
            <p id="first-message">BIOQuery</p>
        </div>

      </div>
    </div>
    );
}

export default Landing;
