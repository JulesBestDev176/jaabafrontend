import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Container from './components/Container'
import Accueil from './pages/Accueil'
import About from './pages/About'
import Contact from './pages/Contact'
import Produits from './pages/Produits'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Accueil />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/produits" element={<Produits />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
