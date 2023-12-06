
import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { DayPage } from './components/DayTemplate/DayTemplate';

const App = () => {
  const dynamicParams = {
    firstPage: {
      dayNumber: 1,
      germanWord: "Das Kletzenbrot - Плодов Хляб",
      facts: "Das Kletzenbrot ist ein saftiges, dunkelbraunes, würzig-süßes"+
      "Brot, bei dem Kletzen oder Hutzeln, und gewürz mit dem Brotteig vermischt werden",
      audioUrl: "/first-page.mp3",
      imageUrl: "https://www.salzburgerland.com/de/magazin/wp-content/uploads/2012/11/sm-klezenbrot-3.jpg"
    }
  }
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/first' element={<DayPage params={dynamicParams.firstPage}/>}></Route>
      </Routes>
    </main>
  );
};

export default App;