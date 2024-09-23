import React from 'react'
import Produit from './Produit'

const ProduitsAccueil = ({ produit }) => {
    return (
        <div className='container p-3'>
            <div className="row p-2">
                <div className="col-3">
                    <div className=' title fs-2'>{produit.title}</div>

                </div>
            </div>
            <div className="row mt-3 p-2 d-flex justify-content-start ">
                {produit.produits.map((item, index) => (
                    <Produit key={index} produit={item} />
                ))}
            </div>
        </div>
    )
}

export default ProduitsAccueil
