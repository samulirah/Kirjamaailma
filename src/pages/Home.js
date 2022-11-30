import React from 'react'
import '../components/pages.css'
import books from '../components/books.jpg'
import glass from '../components/glass.jpg'
import shelf from '../components/shelf.jpg'
import reading from '../components/reading.jpg'
import maol from '../components/maol.jpg'
import alias from '../components/alias.jpg'
import auroranS from '../components/auroranS.jpg'

export default function Home() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active2" aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src={books} className="d-block w-100" alt="books" />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Joulu lähestyy!</h5>
                        <p>Hanki nyt joulun toivotuimmat kirjalahjat pukinkonttiin.</p>
                    </div>
                </div>

                <div className="carousel-item active1">
                    <img src={shelf} className="d-block w-100" alt="shelf" />
                    <div className="carousel-caption d-none d-md-block"></div>

                    <h5></h5>
                    <p></p>
                </div>


                <div className="carousel-item active2">
                    <div class="container">
                    <h2></h2>
                        <div class="product1">
                            <div class="bg-white">
                                <img class="img-fluid" src={alias}></img>
                                <h5>Orginal alias</h5>
                                <h6>27,95€</h6>
                               <button class="read_more_mar_top" >Osta nyt</button>

                            </div>
                        </div>
                        <div class="container"></div>
                        <div class="product2">
                            <div class="bg-white">
                                <img class="img-fluid" src={auroranS}></img>
                                <h5>Auroran salaisuus</h5>
                                <h6>27,95€</h6>
                             <button class="read_more_mar_top" >Osta nyt</button>

                            </div>
                        </div>

                        <div class="container"></div>
                        <div class="product1">
                            <div class="bg-white">
                                <img class="img-fluid" src={maol}></img>
                                <h5>MAOL-taulukot</h5>
                                <h6>41,95€</h6>
                             <button class="read_more_mar_top" >Osta nyt</button>
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-caption d-none d-md-block"></div>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hiddenn">Next</span>
            </button>
        </div>





    )

}



/*<div className='container'>
            <div class="row">
                <div class="col-xl-12"></div>*/