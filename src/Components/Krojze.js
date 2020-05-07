import React, {useEffect, useRef} from 'react';
import '../App.scss';
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";

function Krojze() {
  const onLeave = (origin, destination, direction) => {
    console.log("Leaving section " + origin.index);
  }
  const afterLoad = (origin, destination, direction) => {
    console.log("After load: " + destination.index);
  }
 return (
  <ReactFullpage
        scrollOverflow={true}
        sectionsColor={['#fff', '#f1986e', "#fff"]}
        navigation={true}
        verticalCentered={true}

        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <div className="section1__padding-text">
                <h1 className="section1__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. <span className="blue">Ultricies tristique nulla aliquet enim tortor at auctor.</span> Feugiat 
                in fermentum posuere urna ristique nulla aliquet.
                </h1>
                </div>
                <div className="block">
                  <div className="section1__footer">
                    <div className="section1__short-line">
                      <p>Wanda</p>
                      <p>Kino Wanda</p>
                    </div>
                    <div className="section1__short-line">
                      <p>Sukiennice</p>
                      <p>Rynnek Główny</p>
                    </div>
                    <div className="section1__short-line">
                    <p>Recepcja</p>
                    <p>Hotel Forum</p>
                    </div>  
                  </div>
                </div>
              </div>
              <div className="section section2">
                <div className="slide">
                  <h5 className="section2__text">
                    <span className="section2__font1">KROJE</span>
                    <span className="section2__font2"> pisma</span> 
                    <br/>
                    <span className="section2__font3"> ZNALEZIONE</span> 
                    <br/> 
                    <span className="section2__font4">W KRAK</span>
                    <span className="section2__font1">OWIE</span></h5>
                </div>
              </div>
              <div className="section">
              <h1 className="section3__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. 
                <span className="red">Ultricies tristique nulla aliquet enim tortor at auctor.</span> Feugiat 
                in fermentum posuere urna ristique nulla aliquet, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua.
                </h1>
                
                
              </div>
            </div>
          );
        }}
      />
    );
}

export default Krojze;