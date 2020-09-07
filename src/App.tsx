import 'react-calendar-heatmap/dist/styles.css';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles'

import Header from './components/Header';
import Profile from './pages/Profile';
import Repo from './pages/Repo';

function App() {
  return(
    <BrowserRouter>
      < Header />

      <Routes>
        <Route path="/" element= {<Profile />} /> {/* Routas recebem o caminho e o elemento que vai ser redenrizado na tela */}
        <Route path="/:username" element= {<Profile />} /> {/* O ":" é pq é um parametro */}
        <Route path="/:username/:reponame" element= {<Repo />} />
      </Routes>

      {/* <Footer /> */}

      <GlobalStyles />

    </BrowserRouter>

    
  );
}

export default App;
