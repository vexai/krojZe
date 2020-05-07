import React, {useState} from 'react';
import '../App.scss';
import styles from './Kroje_fonty.module.scss'
import {useSpring, useSprings, animated} from 'react-spring';

function Kroje_fonty(props) {

    const [toggle, setToggle] = useState(false);
    const fadeout = useSpring({height: toggle ? "30rem" : "0rem"})
    const growFont = useSpring({transform: toggle ? "scaleY(1)" : "scaleY(0)"})
    const display = useSpring({display: toggle ? "block" : "none"})
    const [color, setColor] = useState(false);
    const coloring = useSpring({transform: color ? "rotate(90deg)" : "rotate(0deg)"})
    const[isBlack, setBlack] = useState(false)

    return (  
      <div>


        <div  className="container">

            <div className="container__title">

                <div className="container__fonts-boxes">
                    <p className="font-name">{ props.name }</p>
                </div>
                <div className="container__fonts-boxes">
                    <p className="font-place">{ props.place }</p>
                </div>
                <div className="container__fonts-plusminus">
                    <animated.div className={ isBlack ? styles.minus : styles.plusminus } style={coloring} 
                        onClick={() => {setColor(!color); setBlack(!isBlack); setToggle(!toggle)}}>
                    </animated.div>
                </div>
            </div>
        </div>
        <div  className="container">
            <animated.div style={fadeout} className="container__img-desc">
                <img src={ props.imgUrl } alt=""/>
                <div className="container__desc">
                <animated.p style={growFont}>{ props.description }</animated.p></div>
            </animated.div>   
        </div>  
        <animated.a className="container__download" style={display} href="#">Pobierz plik z krojem pisma</animated.a>
        <animated.form style={display}>
            <input type="text" placeholder="Wypróbuj krój pisma..." className={props.className}/>
        </animated.form>      
      </div>
      
    );
  }
  
  export default Kroje_fonty;
