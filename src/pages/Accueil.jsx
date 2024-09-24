import React from 'react'
import Categorie from '../components/categorie'
import Boutique from '../components/Boutique'
import Pub from '../components/Pub'
import ProduitsAccueil from '../components/ProduitsAccueil';

const Accueil = () => {
    const categories = [
        {
            name: 'Électronique',
            icone: 'fa-solid fa-microchip'
        },
        {
            name: 'Mode',
            icone: 'fa-solid fa-person-dress'
        },
        {
            name: 'Alimentaire',
            icone: 'fa-solid fa-bowl-food'
        },
        {
            name: 'Électronique',
            icone: 'fa-solid fa-microchip'
        },
        {
            name: 'Mode',
            icone: 'fa-solid fa-person-dress'
        }

    ];

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

    const boutiques = [
        {
            nom: 'boutique 1',
            photo: 'jules.jpg',
            note: 1
        },
        {
            nom: 'boutique 2',
            photo: 'jules.jpg',
            note: 0.4
        },
        {
            nom: 'boutique 3',
            photo: 'jules.jpg',
            note: 0.2
        },
        {
            nom: 'boutique 4',
            photo: 'jules.jpg',
            note: 0.7
        },
        {
            nom: 'boutique 5',
            photo: 'jules.jpg',
            note: 0.5
        }

    ]

    return (
        <>
            <div className='container mt-3 d-flex justify-content-around'>
                {categories.map((categorie, index) => (
                    <Categorie key={index} categorie={categorie} />
                ))}
            </div>
            <div className='container mt-3' style={{ height: '300px' }}>

                <Pub />
            </div>
            <div className="container-fluid mt-3 p-3 bg-white">
                {produits.map((produit, index) => (
                    <ProduitsAccueil key={index} produit={produit} />
                ))}
            </div>
            <div className="container-fluid  d-flex justify-content-center align-items-center mt-3 p-3 h-75" style={{ overflow: 'hidden' }} >
                <div className="col-12 d-flex justify-content-center align-items-center h-full w-full  container p-0" style={{ height: '300px' }}>
                    <div className="col-6 d-flex h-full" >
                        <Pub />
                    </div>
                    <div className="col-6 d-flex flex-column  h-100 m-0 p-0" >
                        <div className="col-12 p-0 mb-1 d-flex justify-content-center align-items-center" style={{ height: '148px' }}>
                            <Pub />
                        </div>
                        <div className="col-12 p-0 d-flex justify-content-center align-items-center flex-end" style={{ height: '148px' }}>
                            <Pub />
                        </div>

                    </div>
                </div>
            </div>
            <div className='container mt-3 d-flex justify-content-center'>
                {boutiques.map((boutique, index) => (
                    <Boutique key={index} boutique={boutique} />
                ))}
            </div>

        </>
    )
}

export default Accueil
