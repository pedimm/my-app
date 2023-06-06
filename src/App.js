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
    </div>
  );
}

