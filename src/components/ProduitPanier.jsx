import React from 'react'

const ProduitPanier = ({ produit }) => {

    return (
        <div className='col-12 d-flex mt-3 mb-3 border-bottom'>
            <div className="col-3">
                <img src={"../../public/images/produits/" + `${produit.photo}`} style={{ width: '70px', height: '70px' }} />
            </div>
            <div className="col-9">
                <div className="col-12">
                    <p className='txt-gray'>{produit.nom}</p>
                </div>
                <div className="col-12">
                    <div className="col-6"></div>
                    <div className="col-6 txt-blue">{produit.prix} CFA</div>
                </div>
            </div>
        </div>
    )
}

export default ProduitPanier
