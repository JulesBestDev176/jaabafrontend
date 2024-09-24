import React, { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import ProduitPanier from './ProduitPanier';


const Header = () => {

    const [panier, setPanier] = useState([
        {
            nom: "Samsung Galaxy S23 Ultra",
            prix: 100000,
            photo: "samsung.jpg",
            quantite: 2
        },
        {
            nom: "Apple iPhone 15 Pro Max",
            prix: 150000,
            photo: "iphone.jpg",
            quantite: 1
        }
    ]);

    const navigate = useNavigate();

    const verif = true;

    const handleConnexion = (e) => {
        e.preventDefault();
        if (verif) {
            navigate('/compte/profile');

        } else {
            const modalTrigger = document.getElementById('connexionTrigger');
            modalTrigger.click();

        }
    };

    const updateProduitQuantite = (produitId, nouvelleQuantite) => {
        // setPanier((prevProduits) =>
        //     prevProduits.map((prod) =>
        //         prod.id === produitId ? { ...prod, quantite: nouvelleQuantite } : prod
        //     )
        // );
    };



    return (
        <>
            <div className='fixed-top' >
                <header className='header-top py-2'>
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-9">
                                <p className='m-0 fs-6'>Livraison partout à Dakar.</p>
                            </div>
                            <div className="col-3 text-end d-flex justify-content-around">
                                <Link to="/" className='txt-jaune fs-6 m-0'><IoIosFlash /> Vente rapide</Link>
                                <Link to="/about" className='fs-6 m-0 text-white'>A propos</Link>
                                <Link to="/contact" className='fs-6 m-0 text-white'>Contact</Link>
                            </div>
                        </div>
                    </div>
                </header>
                <header className="header-main py-4">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-2 d-flex align-items-center justify-content-center">
                                <h2>
                                    <Link to="/" className='txt-blue'>Jaaba</Link>
                                </h2>
                            </div>
                            <div className="col-5 d-flex align-items-center">
                                <form className="input-group ">
                                    <input type="text" className="form-control" placeholder="Chercher un produit" aria-label="Chercher un produit" aria-describedby="basic-addon2" />
                                    <span className="input-group-text color-blue text-white border-0 txt-gray" id="basic-addon2"><FaSearch /></span>
                                </form>
                            </div>
                            <div className="col-5 d-flex justify-content-center">

                                <div className="col-6 d-flex justify-content-between">
                                    <div className="col-2 d-flex align-items-center">
                                        <CiUser className='fs-2 txt-gray' />
                                    </div>
                                    <div className="col-10 text-start ps-2">
                                        <div className="col txt-gray">
                                            Mon Compte
                                        </div>
                                        <div className="col">
                                            <button type="button" data-bs-toggle="modal" data-bs-target="#connexion" className='txt-noire no-button'>Connexion</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 d-flex justify-content-between">
                                    <div className="col-2 d-flex align-items-center">
                                        <AiOutlineShoppingCart className='fs-2 txt-gray' />
                                    </div>
                                    <div className="col-10 text-start ps-2">
                                        <div className="col txt-gray">
                                            Mon Panier
                                        </div>
                                        <div className="col">
                                            <button type="button" data-bs-toggle="offcanvas" data-bs-target="#panier" className='txt-noire no-button'>
                                                0 CFA
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>
                <header className="header-bottom py-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="dropdown col-2 d-flex justify-content-start border-end align-items-center">
                                <div className="dropdown-toggle row d-flex justify-content-center align-items-center" data-bs-toggle="dropdown" aria-expanded="false" >
                                    <RiMenu2Fill className='col-3 fs-3' />
                                    <div className='col-6 fs-5'>Categories</div>
                                    <MdOutlineKeyboardArrowDown className='col-3 fs-3' />
                                </div>
                                <ul className="dropdown-menu dropdown-menu-start mt-2 p-0">

                                    <li className='border-top'><Link to='/produits' className="dropdown-item">Tous</Link></li>
                                    <li className='border-top'><Link to='/produits/electronique' className="dropdown-item">Electronique</Link></li>
                                    <li className='border-top'><Link to='/produits/mode' className="dropdown-item">Mode</Link></li>
                                </ul>
                            </div>
                            <div className="col-8 d-flex justify-content-around align-items-center border-end">
                                <Link to='/' className='txt-noire'>Accueil</Link>
                                <Link to='/produits' className='txt-noire'>Produits</Link>
                            </div>
                            <div className="col-2 d-flex justify-content-center align-items-center">
                                <CiHeart className='fs-2 txt-gray' />
                            </div>
                        </div>
                    </div>
                </header>
            </div>


            {/* modal connexion */}
            <div className="modal fade" id="connexion" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Connexion</h1>
                            <button id="connexionTrigger" type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                                <div className="col-12 d-flex ">
                                    <div className="col-8">
                                        <button
                                            className="btn btn-primary"
                                            onClick={handleConnexion}
                                        >
                                            Se connecter
                                        </button>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end">
                                        <button type="button" className="btn btn-link link-underline link-underline-opacity-0" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#inscription">S'inscrire</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal inscription */}
            <div className="modal fade" id="inscription" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Inscription</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Prenom" aria-label="Prenom" />
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Nom" aria-label="Nom" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <select className="form-select" aria-label="Type de compte">
                                        <option value="" disabled>Type de compte</option>
                                        <option value="client">Client</option>
                                        <option value="vendeur">Vendeur</option>
                                        <option value="livreur">Livreur</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Email" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="Password" aria-label="Password" />
                                </div>

                                <div className="col-12 d-flex">
                                    <div className="col-8">
                                        <button type="button" className="btn btn-primary">S'inscrire</button>
                                    </div>
                                    <div className="col-4 d-flex justify-content-end">
                                        <button type="button" className="btn btn-link link-underline link-underline-opacity-0" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#connexion">Se connecter</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Offcanvas Panier */}
            <div className="offcanvas offcanvas-end bg-white" tabIndex="-1" id="panier" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header border-bottom">
                    <h5 id="offcanvasRightLabel">Panier  {/*({panier.reduce((total, produit) => total + produit.quantite, 0)}) */} ({panier.length})</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div className="row">
                        {panier.map((produit, index) => {
                            return <ProduitPanier updateProduitQuantite={updateProduitQuantite} key={index} produit={produit} />
                        })}
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>Sous-total: </p>
                        </div>
                        <div className="col-6 text-end">
                            <p className='txt-blue'>
                                {
                                    panier.reduce((total, produit) => total + produit.prix, 0)
                                }
                                &nbsp;CFA
                            </p>
                        </div>
                    </div>
                    <div className="position-absolute bottom-0 start-0 end-0 p-3">
                        <div className="col-12">
                            <button className='btn btn-primary w-100'>Commander</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header
