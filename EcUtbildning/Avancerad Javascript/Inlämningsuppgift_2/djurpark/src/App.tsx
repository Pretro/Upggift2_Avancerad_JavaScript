import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Animal } from './components/Animal';
import { Animals } from './components/Animals';
import { Layout } from './components/Layout';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="animals" element={<Animals />}/>
        <Route path="animal/:id" element={<Animal />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
