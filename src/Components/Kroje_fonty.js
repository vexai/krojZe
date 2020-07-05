import React, { useState, useRef } from "react";
import "../App.scss";
import styles from "./Kroje_fonty.module.scss";
import { useSpring, animated } from "react-spring";

function Kroje_fonty(props) {
  const [toggle, setToggle] = useState(false);
  const fadeout = useSpring({ height: toggle ? "30em" : "0rem" });
  const growFont = useSpring({ display: toggle ? "block" : "none" });
  const display = useSpring({ display: toggle ? "block" : "none" });
  const rotate = useSpring({ transform: toggle ? "rotate(90deg)" : "rotate(0deg)" });

  return (
    <div>
      <main>
        <p className="font-name">{props.name}</p>
        <p className="font-place">{props.place}</p>
        <div className="container__fonts-plusminus">
          <animated.div
            className={toggle ? styles.minus : styles.plusminus}
            style={rotate}
            onClick={() => setToggle(!toggle)}
          ></animated.div>
        </div>
      </main>
      <div className="body-margin container__input">
        <animated.div style={fadeout} className="container__img-desc">
          <img src={props.imgUrl} alt="" />
          <div className="container__desc">
            <animated.p style={growFont}>{props.description}</animated.p>
          </div>
        </animated.div>
        <animated.a className="container__download" style={display} href="#">
          Pobierz plik z krojem pisma
        </animated.a>
        <animated.form style={display}>
          <input type="text" placeholder="Wypróbuj krój pisma..." className={props.className} />
        </animated.form>
      </div>
    </div>
  );
}

export default Kroje_fonty;
