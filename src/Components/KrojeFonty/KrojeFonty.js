import React, { useState } from "react";
import styles from "./Kroje_fonty.module.scss";
import "./Kroje_fonty.scss";
import { useSpring, animated } from "react-spring";

function KrojeFonty(props) {
  const [toggle, setToggle] = useState(false);
  const fadeout = useSpring({ maxHeight: toggle ? "30em" : "0rem" });
  const growFont = useSpring({ display: toggle ? "block" : "none" });
  const display = useSpring({ display: toggle ? "block" : "none" });
  const displayGrid = useSpring({ display: toggle ? "grid" : "none" });
  const rotate = useSpring({ transform: toggle ? "rotate(90deg)" : "rotate(0deg)" });

  const handleHref = (e) => {
    if (toggle) {
      e.preventDefault();
    }
  };

  setTimeout(function () {
    if (window.location.href === "https://localhost:3000/krojZe/kroje#wanda__link") {
      document.getElementById("wanda").click();
    } else if (window.location.href === "https://localhost:3000/krojZe/kroje#recepcja__link") {
      document.getElementById("recepcja").click();
    } else if (window.location.href === "https://localhost:3000/krojZe/kroje#herby__link") {
      document.getElementById("herby").click();
    }
  }, 200);

  return (
    <>
      <main>
        <p className="font-name">{props.name}</p>
        <p className="font-place">{props.place}</p>

        <div className="container__fonts-plusminus">
          <a href={toggle ? props.anchor : ""} onClick={handleHref}>
            <animated.div
              id={props.id}
              className={toggle ? styles.minus : styles.plusminus}
              style={rotate}
              onClick={() => setToggle(!toggle)}
            ></animated.div>
          </a>
        </div>
      </main>
      <div className="con_row">
        <animated.div className="con__img">
          <animated.img style={fadeout} className="con__img--on" src={props.imgUrl} alt="" />
        </animated.div>
        <animated.p className="con__text" style={growFont}>
          {props.description}
        </animated.p>
      </div>
      <div className="con_row">
        <animated.a className="con__download" style={display} href="#">
          Pobierz plik z krojem pisma
        </animated.a>
      </div>
      <div className="con_row">
        <animated.input
          style={displayGrid}
          type="text"
          placeholder="Wypróbuj krój pisma..."
          className={props.className}
        ></animated.input>
      </div>
    </>
  );
}

export default KrojeFonty;
