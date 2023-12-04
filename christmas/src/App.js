
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';



const App = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
};

export default App;