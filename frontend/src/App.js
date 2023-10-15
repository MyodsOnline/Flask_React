import './App.css';
import React from 'react';
import Profile from './Profile';
import SearchSpeaker from './SearchSpeaker/SearchSpeaker';


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
      <SearchSpeaker />
      <Profile />
    </div>
  );
}

export default App;
