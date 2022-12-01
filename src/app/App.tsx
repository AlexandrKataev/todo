import React from 'react';
import logo from './logo.svg';
import s from './App.module.scss';
import { Header } from 'layouts/Header';
import { Routing } from './routing';

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Routing />
    </div>
  );
}

export default App;
