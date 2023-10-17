import './App.css';
import React from 'react';
import Profile from './Profile';
import SearchSpeaker from './SearchSpeaker/SearchSpeaker';
import BrakeLine from './Utils/utils';
import Counter from './Utils/Counter';
import Dashboard from './LoginLogout/LoginLogout';


const SpreakerProfile = (props) => {
  return(
    <>
      <h3>Staff: {props.name}</h3>
      <p>Position: {props.jobTitle}</p>
      <p>Job role: {props.role}</p>
    </>
  );
}


function App() {
  return (
    <div>
      <h1>Welcome to Dispatcher app!</h1>
        <SpreakerProfile 
          name='Artem Efimov'
          jobTitle='St.Dispatcher'
          role='Main Place'
        />
        <BrakeLine />
      <SearchSpeaker />
      <Profile />
        <BrakeLine />
      <Counter />
        <BrakeLine />
      <Dashboard />
    </div>
  );
}

export default App;
