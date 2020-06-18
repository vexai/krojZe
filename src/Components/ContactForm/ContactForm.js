import React from 'react';
import firebase from './../../firebase/Firebase'
import {useForm} from "react-hook-form";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>Podaj email</div>
        <input name="email" ref={register({required: true, pattern})}/>
        {errors.email && <span>Podaj adres email</span>}
        <div>Wpisz treść wiadomości</div>
        <input name="message" ref={register({required: true})}/>
        {errors.message && <span>Podaj treść wiadomości</span>}
        <input type="submit"/>
      </form>
  );
}

export default ContactForm;
