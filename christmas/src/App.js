
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { DayPage } from './components/DayTemplate/DayTemplate';

const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/first' element={<DayPage/>}></Route>
      </Routes>
    </main>
  );
};

export default App;