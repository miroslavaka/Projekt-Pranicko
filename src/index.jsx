import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Introduction from './components/Introduction';
import Create from './components/Create';
import Get from './components/Get';
import Created from './components/Created';
import Card from './components/Card';

import './style.css';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Introduction />} />
          <Route path="/vytvorit" element={<Create />} />
          <Route path="/vyzdvihnut" element={<Get />} />
          <Route path="/vytvorene" element={<Created />} /> 
          <Route path="/pranicko" element={<Card />} />*/}
        <Route path="/" element={<Card />} />
      </Routes>
    </BrowserRouter>
    {/*
      Tady bude tvůj Vánoční přáníčko :)

      - HTML/CSS podklady máš ve složce /html-vzor
      - vyzobej si ze souborů HTML a CSS pro svoje komponenty
      - aplikace 5 stránek (úvod, vyzvednutí přáníčka, vytvoření přáníčko, zobrazení kódu vytvořeného přáníčka, samotné přáníčko)
      - použij router (musíš si ho nainstalovat)
    */}
  </>
);

render(<App />, document.querySelector('#app'));
