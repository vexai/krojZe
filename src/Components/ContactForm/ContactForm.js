import React from 'react';
import firebase from './../../firebase/Firebase'
import {useForm} from "react-hook-form";
import ContactFormStyle from "./ContactFormStyle.scss";
import contactFormImg from "./ms.jpg";

const ContactForm = ({}) => {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = async data => {
    const mailsRef = firebase.database().ref('emails');
      await  mailsRef.push().set(
        {
          email: data.email,
          message: data.message
        }
    );
  };

  const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
    <h2 className="contact-form__header">Krój_że</h2>
      <h3 className="contact-form__header-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </h3>
    <div className="contact-form">
      <div className="contact-form__form">
        
    <h3 className="contact-form__form-header">KONTAKT</h3>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input placeholder="Podaj swój email..." className="contact-form__input" name="email" 
        ref={register({required: true, pattern})}/>

        {errors.email && <span style={{position:"absolute", zIndex:"99"}}>Podaj adres email!</span>}

        <textarea placeholder="Wpisz treść wiadomości..." className="contact-form__input-text" name="message" 
        ref={register({required: true})}/>

        {errors.message && <span style={{position:"absolute", zIndex:"99"}}>Podaj treść wiadomości!</span>}

        <input className="contact-form__submit" type="submit" value="WYŚLIJ"/>

      </form>
      </div>
      <img className="contact-form__img" src={contactFormImg} />
      </div>
      </>
  );
}

export default ContactForm;
