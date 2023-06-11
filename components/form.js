"use client";
import { useState } from 'react'
import Divider from './divider';
import {Submit} from '../app/server'
import Alert from './alert';


function Form() {

  const [email, setEmail] = useState('')
  const [object, setObject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState('')
  const [error, setError] = useState('');
  let data = {
    email,
    object,
    message
  }
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function handleSubmit(e) {
    e.preventDefault()
    setError('');

    if (!validateEmail(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    if (message.length < 5) {
      setError('Veuillez entrer un message d\'au moins 5 caractères');
      return;
    }
    console.log('Sending')
    setSubmitted(true);
    Submit( data )
      .then((response) => {
        if (response === "200") {
          console.log("success");
        }
      }).catch((err) => {
        console.error(err);
        setError('An error occurred while sending the email');
      });
    setSubmitted('');
  }
  //JSX FORm using daisyUI with a field for email,  object and message
  return (
    <div className=" rounded-lg w-full p-5">
      <div className="form-control ">
        <label className="input-group justify-end">
          <span className="label-text bg-primary text-white">Email</span>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="info@message.fr"
            className="input input-primary input-bordered w-full"
          />
        </label>
        <label className="input-group justify-end pt-5">
          <span className="label-text bg-primary text-white">Objet</span>
          <input
            type="text"
            onChange={(e) => setObject(e.target.value)}
            placeholder="Objet"
            className="input input-primary input-bordered w-full"
          />
        </label>

        <div className="form-control">
          <label className="label flex justify-center">
            <span className="label-text">Votre message</span>
          </label>
          <textarea
            className="textarea textarea-primary textarea-bordered h-24 w-full"
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Bio"
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary mt-5"
          onClick={(e) => { handleSubmit(e) }}
        >
          Envoyer
        </button>
      </div>
      { error && (
        <div className="text-red-500 mt-2">
          {error}
        </div>
      )}
    </div>
    
  )

}

export default Form;