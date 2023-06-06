import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
//import swapi;;

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //   fetch('https://swapi.dev/api/people/1')
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));
  // });

  if (email === "admin@gmail.com" && password === "admin") {

  }

  const submit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    console.log(data);
    e.target.reset();
    if (email === "admin@gmail.com" && password === "admin") {
      fetch('https://swapi.dev/api/people/1')
      .then((response) => response.json())
      .then((data) => document.querySelector("p").insertAdjacentHTML("afterbegin", data.name));
    }
  };

  return (
    <div id="root">
      <form onSubmit={submit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button id="loginButton">Logar</button>
      </form>
      <p></p>
    </div>
  );
}