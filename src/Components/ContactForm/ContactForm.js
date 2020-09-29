import React from "react";
import firebase from "./../../firebase/Firebase";
import { useForm } from "react-hook-form";
import ContactFormStyle from "./ContactFormStyle.scss";
import contactFormImg from "./contactImg.jpg";
import { NavLink } from "react-router-dom";

const ContactForm = ({}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const mailsRef = firebase.database().ref("emails");
    await mailsRef.push().set({
      email: data.email,
      message: data.message,
    });
  };

  const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
      <h2 className="contact-form__header">Napisz do nas</h2>
      <h3 className="contact-form__header-text">
        Podziel się swoją opinią! Czekamy na Twoją wiadomość.
      </h3>
      <div className="contact-form">
        <div className="contact-form__form">
          <h3 className="contact-form__form-header">KONTAKT</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Podaj swój email..."
              className="contact-form__input"
              name="email"
              ref={register({ required: true, pattern })}
            />

            {errors.email && <span className="contact-form__error">Podaj adres email!</span>}

            <textarea
              placeholder="Wpisz treść wiadomości..."
              className="contact-form__input-text"
              name="message"
              ref={register({ required: true })}
            />

            {errors.message && <span className="contact-form__error">Podaj treść wiadomości!</span>}

            <input className="contact-form__submit" type="submit" value="WYŚLIJ" />
          </form>
        </div>
        <img className="contact-form__img" src={contactFormImg} />
      </div>

      <footer>
        <div className="footer__grid1">
          <div className="footer__title">Krój_że</div>
          <div className="footer__short-line"></div>
          <NavLink className="footer__link" exact to="/kontakt">
            Kontakt
          </NavLink>
          <NavLink className="footer__link" exact to="/">
            O projekcie
          </NavLink>
        </div>
        <div className="footer__grid2">
          <div className="footer__title">Kroje</div>
          <div className="footer__short-line"></div>
          <NavLink className="footer__link" exact to="/kroje">
            Pobierz
          </NavLink>
        </div>
        <div className="footer__grid3">
          <div className="footer__title">Mapa</div>
          <div className="footer__short-line"></div>
          <NavLink className="footer__link" exact to="/mapa">
            Archiwum
          </NavLink>
          <NavLink className="footer__link" exact to="/mapa">
            Dodaj zdjęcie
          </NavLink>
        </div>
      </footer>
    </>
  );
};

export default ContactForm;
