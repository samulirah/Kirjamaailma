import React from 'react'
import '../components/pages.css'
import books from '../components/books.jpg'
import glass from '../components/glass.jpg'
import shelf from '../components/shelf.jpg'
import reading from '../components/reading.jpg'
import maol from '../components/maol.jpg'
import alias from '../components/alias.jpg'
import auroranS from '../components/auroranS.jpg'
import CustomCarousel from '../components/carousel'

const images = [books, shelf, reading]

export default function Home() {
    return (
        <CustomCarousel images={images}/>





    )

}



/*<div className='container'>
            <div className="row">
                <div className="col-xl-12"></div>*/