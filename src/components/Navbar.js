import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav class="navbar" aria-label="Light offcanvas navbar">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Hae kaupasta.." aria-label="Search" />
                    <button class="btn btn-outline-dark" type="submit">Etsi</button>
                </form>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasNavbarLightLabel">Kirjamaailma</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Etusivu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Kirjaudu</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Ostoskori</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tuotteet
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Kirjat</a></li>
                                    <li>
                                        <hr class="dropdown-divider" />
                                    </li>
                                    <li><a class="dropdown-item" href="#">Toimistotarvikkeet</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Hae kaupasta.." aria-label="Search" />
                            <button class="btn btn-outline-dark" type="submit">Etsi</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    )
}
