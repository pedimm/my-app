import React from 'react';
import { useState } from 'react';
import './App.css';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      <form id="form" onSubmit={submit}>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          E-mail</label>
          
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>

        <label>Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <button id="loginButton"
        className="-m-2.5 rounded-md p-2.5 text-gray-700">Logar</button>
      </form>
      <p></p>
    </div>
  );
}