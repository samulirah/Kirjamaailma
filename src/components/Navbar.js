import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar" aria-label="Light offcanvas navbar">
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Hae kaupasta.." aria-label="Search" />
                    <button className="btn btn-outline-dark" type="submit">Etsi</button>
                </form>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLightLabel">Kirjamaailma</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Etusivu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Kirjaudu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Ostoskori</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tuotteet
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Kirjat</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Toimistotarvikkeet</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Hae kaupasta.." aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Etsi</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}
