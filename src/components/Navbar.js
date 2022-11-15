import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Offcanvas navbar large">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Etusivu</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Kirjamaailma</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tuotteet
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="">Action</Link></li>
                                    <li><Link className="dropdown-item" to="">Another action</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to="">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="">Ostoskori</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="">Kirjaudu</Link>
                            </li>

                        </ul>
                        <form className="d-flex mt-3 mt-lg-0" role="search">
                            <input className="form-control me-2" type="search" placeholder="Hae kaupasta.." aria-label="Search" id="öö" />
                            <button className="btn btn-outline-light" type="submit">Etsi</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}
