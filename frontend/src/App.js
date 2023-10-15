import './App.css';
import React from 'react';
import SpreakerProfile from './SpeakerProfile';

const spekerName = 'Artem Efimov'

function App() {
  return (
    <div>
      <h1>Welcome to Dispatcher app, {spekerName}!</h1>
      <h3>
        <SpreakerProfile />
      </h3>
    </div>
  );
}

export default App;
