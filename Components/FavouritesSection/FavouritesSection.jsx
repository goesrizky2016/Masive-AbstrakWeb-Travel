import React from 'react';
import './FavouritesSection.css';
import Container from 'react-bootstrap/Container';

function FavouritesSection() {
  return (
    <div className='favourites-section my-4 my-sm-5'>
        <Container>
            <h2 className='text-dark fw-semibold my-4 my-sm-5 pt-lg-6'>
                Paling Sering Dikunjungi
            </h2>
            <div className='row g-4'>
                <div className='col-sm-6 col-lg-3 text-blue'>
                    <div className='spa-div img-hover d-flex align-items-end justify-content-center rounded'>
                    </div>
                    <h4 className= 'text-objek mb-4 h6 text-left' >Gunung Takuban Perahu</h4>
                    <p className= 'mb-4 h6 text-left' >maskot dan objek wisata kota Bandung yang dahulu dikenal sebagai Parijs van Java.</p>
                </div>
                <div className='col-sm-6 col-lg-3 text-blue'>
                    <div className='pool-div img-hover d-flex align-items-end justify-content-center rounded'>
                    </div>
                    <h4 className= 'text-objek mb-4 h6 text-left' >Saung Angklung Ujdo</h4>
                    <p className= 'mb-4 h6 text-left' >maskot dan objek wisata kota Bandung yang dahulu dikenal sebagai Parijs van Java.</p>
                </div>
                <div className='col-sm-6 col-lg-3 text-blue'>
                    <div className='pet-friendly-div img-hover d-flex align-items-end justify-content-center rounded'>
                    </div>
                    <h4 className= 'text-objek mb-4 h6 text-left' >Tahura</h4>
                    <p className= 'mb-4 h6 text-left' >maskot dan objek wisata kota Bandung yang dahulu dikenal sebagai Parijs van Java.</p>
                </div>
                <div className='col-sm-6 col-lg-3 text-blue'>
                    <div className='all-inclusive-div img-hover d-flex align-items-end justify-content-center'>
                    </div>
                    <h4 className= 'text-objek mb-4 h6 text-left' >Museum Geologi Bandung</h4>
                    <p className= 'mb-4 h6 text-left' >maskot dan objek wisata kota Bandung yang dahulu dikenal sebagai Parijs van Java.</p>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default FavouritesSection;