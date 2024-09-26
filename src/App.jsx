import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Container from './components/Container'
import Accueil from './pages/Accueil'
import About from './pages/About'
import Contact from './pages/Contact'
import Produits from './pages/Produits'
import OneProduct from './pages/OneProduct';
import Compte from './pages/Compte'
import Commande from './pages/Commande'
import Profile from './pages/Profile'
import { useUser } from './services/UserContext';
import data from './assets/data.json'

function App() {

  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [utilisateurs, setUtilisateurs] = useState([]);
  const [roles, setRoles] = useState([]);
  const [commandes, setCommandes] = useState([]);
  const [adresses, setAdresses] = useState([]);
  const [paniers, setPaniers] = useState([]);
  const [boutiques, setBoutiques] = useState([]);
  const { user } = useUser()

  console.log(data);

  useEffect(() => {
    setCategories(data.categorie);
    setProduits(data.produit);
    setUtilisateurs(data.utilisateur);
    setRoles(data.role);
    setCommandes(data.commande);
    setAdresses(data.adresse);
    setPaniers(data.panier);
    setBoutiques(data.boutique);
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container categories={categories} utilisateurs={utilisateurs} roles={roles} paniers={paniers} produits={produits} />}>
            <Route index element={<Accueil categories={categories} produits={produits} boutiques={boutiques} />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/produits" element={<Produits produits={produits} />} />
            <Route path="/produits/:categorieId" element={<Produits produits={produits} categories={categories} />} />
            <Route path="/produit/:id" element={<OneProduct produits={produits} categories={categories} />} />
            <Route path='/compte' element={<Compte utilisateur={user} />}>
              <Route path="profile/" element={<Profile utilisateur={user} adresses={adresses} />} />
              <Route path="commande/" element={<Commande utilisateur={user} commandes={commandes} />} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
