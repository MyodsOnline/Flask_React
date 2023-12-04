import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index from './MyIndex';
/* Chapter 5 */
import Manatee from './Components/Chapter5/part_1';
import SpeakersPage from './Components/Chapter5/SpeakersPage';


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="/chapter5">Manatee</a></li>
          <li><a href="/chapter6">Narwhal</a></li>
          <li><a href="/speakers">Whale</a></li>
        </ul>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/chapter5' element={ <Index /> } />
          <Route path='/chapter6' element={ <Manatee /> } />
          <Route path='/speakers' element={ <SpeakersPage /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
