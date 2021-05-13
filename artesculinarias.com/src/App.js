import './App.css';
import React from 'react';
import Header from './pages/home/header/header.js'
import Body from './pages/home/body/body.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/home/contact/contact';

function App() {  
  return (
    <div className="App">
      <Header id="headerbm"></Header>
      <Body id="bodybm"></Body>
      <Contact id="contactbm"></Contact>
    </div>
  );
}

export default App;
