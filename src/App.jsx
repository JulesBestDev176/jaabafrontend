import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Container from './components/Container'
import Accueil from './pages/Accueil'
import About from './pages/About'
import Contact from './pages/Contact'
import Produits from './pages/Produits'
import OneProduct from './pages/OneProduct';


function App() {

  const produits = [
    {

      title: "electronique",
      produits: [
        {
          id: 1,
          nom: "Samsung Galaxy",
          description_courte: "Samsung Galaxy S23 Ultra",
          prix: "100 000 CFA",
          photo: "samsung.jpg",
          quantite: 3
        },
        {
          id: 2,
          nom: "IPhone",
          description_courte: "Apple iPhone 15 Pro Max",
          prix: "150 000 CFA",
          photo: "iphone.jpg",
          quantite: 3
        }
      ]
    },
    {
      title: "mode",
      produits: [
        {
          id: 3,
          nom: "Polos",
          description_courte: "Fashion Polos Manches",
          prix: "12 400 CFA",
          photo: "polos.jpg",
          quantite: 3

        },
        {
          id: 4,
          nom: "Adidas",
          description_courte: "Adidas chaussure à lacet",
          prix: "12 900 CFA",
          photo: "adidas.jpg",
          quantite: 3
        }
      ]
    }
  ]


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
            <Route index element={<Accueil />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/produits" element={<Produits produits={produits} />} />
            <Route path="/electronique" element={<Produits produits={produits} categorie={"electronique"} />} />
            <Route path="/mode" element={<Produits produits={produits} categorie={"mode"} />} />
            <Route path="/produit/:id" element={<OneProduct products={produits} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
