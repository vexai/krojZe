import React from 'react';
import '../App.scss';
import Kroje_fonty from './Kroje_fonty';
import lato from '../Imgs/lato.jpg'

function Kroje() {
  return (
    <div>
        <div  className="container">
      <div className="container__title">
        <div className="container__fonts-boxes">
            <p>Nazwa kroju</p>
        </div>
        <div className="container__fonts-boxes">
            <p>Miejsce</p>
        </div>
        <div className="container__fonts-plusminus">
            <p>Opis</p>
        </div>
        </div>
        </div>

        <div className="container__line"></div>
        
        <Kroje_fonty  name="Nazwa" place="Rynek Główny" className="input__font1" imgUrl={lato}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor. Feugiat 
        in fermentum posuere urna. Odio ut sem nulla pharetra diam sit amet nisl. Nascetur ridiculus mus m
        auris vitae ultricies. Cursus mattis molestie a iaculis at erat. Donec pretium vulputate sapien nec. 
        Non sodales neque sodales ut etiam sit. Tristique risus nec feugiat in fermentum posuere urna nec. At
         volutpat diam ut venenatis. Eget nulla facilisi etiam dignissim. Sed viverra tellus in hac habitasse 
         platea. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet."/>
         
        <div className="container__line"></div>
        <Kroje_fonty  name="Recepcja" place="Hotel Forum" className="input__font2" imgUrl={lato}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor. Feugiat 
        in fermentum posuere urna. Odio ut sem nulla pharetra diam sit amet nisl. Nascetur ridiculus mus m
        auris vitae ultricies. Cursus mattis molestie a iaculis at erat. Donec pretium vulputate sapien nec. 
        Non sodales neque sodales ut etiam sit. Tristique risus nec feugiat in fermentum posuere urna nec. At
         volutpat diam ut venenatis. Eget nulla facilisi etiam dignissim. Sed viverra tellus in hac habitasse 
         platea. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet."/>

        <div className="container__line"></div>
        <Kroje_fonty  name="Wanda" place="Kino Wanda" className="input__font3" imgUrl={lato}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ultricies tristique nulla aliquet enim tortor at auctor. Feugiat 
        in fermentum posuere urna. Odio ut sem nulla pharetra diam sit amet nisl. Nascetur ridiculus mus m
        auris vitae ultricies. Cursus mattis molestie a iaculis at erat. Donec pretium vulputate sapien nec. 
        Non sodales neque sodales ut etiam sit. Tristique risus nec feugiat in fermentum posuere urna nec. At
         volutpat diam ut venenatis. Eget nulla facilisi etiam dignissim. Sed viverra tellus in hac habitasse 
         platea. Vestibulum morbi blandit cursus risus at ultrices mi tempus imperdiet."/>
        <div className="container__line"></div>

        
    </div>
  );
}

export default Kroje;
