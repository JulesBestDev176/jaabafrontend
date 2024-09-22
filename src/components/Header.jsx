import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import { IoIosFlash } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiUser } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiMenu2Fill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";



const Header = () => {
    return (
        <div>
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
                                        <a href="" className='txt-noire'> Connexion</a>
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
                                        <a href="" className='txt-noire'>O CFA</a>
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
                        <div className="col-4 d-flex justify-content-center border-end align-items-center">
                            <div className="row d-flex justify-content-center align-items-center">
                                <RiMenu2Fill className='col-3 fs-3' />
                                <div className='col-6 fs-5'>Categories</div>
                                <MdOutlineKeyboardArrowDown className='col-3 fs-3' />
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-around align-items-center border-end">
                            <Link to='/' className='txt-noire'>Accueil</Link>
                            <Link to='/produits' className='txt-noire'>Produits</Link>
                        </div>
                        <div className="col-2 d-flex justify-content-end align-items-center">
                            <CiHeart className='fs-2 txt-gray' />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
