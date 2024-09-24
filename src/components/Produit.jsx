import React from 'react'

const Produit = ({ produit }) => {
    const bouton = {
        background: 'white',
        color: '#1B1B1B',
        fontWeight: 'bold',
    }
    return (
        <div className='card col-3 p-2 ms-3 mb-3'>
            <div className="col">
                <div className='row'>
                    <img src={"../../public/images/produits/" + `${produit.photo}`} />
                </div>
                <div className="row">
                    <p>{produit.nom}</p>
                </div>
                <div className="row">
                    <h6>{produit.description_courte}</h6>
                </div>
                <div className="row">
                    <h3 className='txt-red'>{produit.prix}</h3>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center ">
                        <button className='btn mb-2 border-primary w-100' style={bouton}>AJOUTER AU PANIER  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Produit
