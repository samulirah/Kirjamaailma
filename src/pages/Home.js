import React from 'react'
import '../components/pages.css'
import books from '../components/books.jpg'
import glass from '../components/glass.jpg'
import shelf from '../components/shelf.jpg'

export default function Home() {
    return (

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className="active1"aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className="active2"aria-label="Slide 3"></button>
            </div>

            <div className="carousel-inner">

                <div className="carousel-item active">
                    <img src={books} className="d-block w-100" alt="books"/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Joulu lähestyy!</h5>
                        <p>Hanki nyt joulun toivotuimmat kirjalahjat pukinkonttiin.</p>
                    </div>
                </div>

                <div className="carousel-item active1">
                    <img src={shelf} className="d-block w-100" alt="shelf"/>
                    <div className="carousel-caption d-none d-md-block"></div>
                   
                        <h5></h5>
                        <p></p>
                    </div>
            
            
              <div className="carousel-item active2">
                    <img src={glass} className="d-block w-100" alt="glass"/>
                    <div className="carousel-caption d-none d-md-block"></div>
                    
              </div>
                
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        
 

    )
}

