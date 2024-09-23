import React from 'react'


const Categorie = ({ categorie }) => {
    return (
        <div className='card col-2 p-3'>
            <div className="row d-flex align-items-center justify-content-between">
                <div className="col-3">
                    <i className={`${categorie.icone}` + " fs-1"} ></i>
                </div>
                <div className="col-9">
                    {categorie.name}
                </div>
            </div>
        </div>
    )
}

export default Categorie
