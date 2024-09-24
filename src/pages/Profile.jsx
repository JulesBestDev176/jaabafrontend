import React from 'react'
import { CiCamera } from "react-icons/ci";

const Profile = () => {
    return (
        <div>
            <div className="container w-50 card p-3">
                <div className="d-flex justify-content-center">
                    <div className="position-relative">
                        <img
                            src="../../public/images/profil/jules.jpg"
                            className="rounded-circle border border-success"
                            style={{ width: "150px", height: "150px", objectFit: "cover" }}
                            alt="User avatar"
                        />
                        <div className="position-absolute" style={{ bottom: "5px", right: "5px" }}>
                            <input type="file" id="image" className="d-none" />
                            <label htmlFor="image" className="bg-light rounded-circle d-flex justify-content-center align-items-center" style={{ width: "30px", height: "30px", cursor: "pointer" }}>
                                <CiCamera />
                            </label>
                        </div>
                    </div>
                </div>

                <br />
                <br />

                <div className="w-100 px-3">
                    <form>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="prenom" className="form-label">Prenom</label>
                                <input type="text" id="prenom" className="form-control" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="nom" className="form-label">Nom</label>
                                <input type="text" id="nom" className="form-control" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-control" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="tel" className="form-label">Telephone</label>
                                <input type="tel" id="tel" className="form-control" required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="pays" className="form-label">Pays</label>
                                <input type="text" id="pays" className="form-control" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="region" className="form-label">Region</label>
                                <input type="text" id="region" className="form-control" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="ville" className="form-label">Ville</label>
                                <input type="text" id="ville" className="form-control" required />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="codePostal" className="form-label">Code postal</label>
                                <input type="number" id="codePostal" className="form-control" required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label htmlFor="password" className="form-label">Mot de passe</label>
                                <input type="password" id="password" className="form-control" required />
                            </div>
                        </div>

                        <button type="submit" className="btn btn-outline-primary w-100 mt-4">Modifier</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Profile
