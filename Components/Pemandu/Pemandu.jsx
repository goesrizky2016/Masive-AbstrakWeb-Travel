import React from 'react';
import './Pemandu.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function PemanduSection1 () {
  return (
    <div className='pemandu-section my-4 my-sm-5'>
        <Container>
            <h2 className='text-dark fw-semibold my-4 my-sm-1 pt-lg-6'>
                Pemandu Wisata
            </h2>
            <h5 className='text-pemandu' style={{marginBottom: '100px', fontSize: '15px'}}>
                Berwisata aman, nyaman dan tentram
            </h5>
            <div className='row g-4'>
                <div className='col-sm-6 col-lg-3'>
                    <div className='spa-div img-hover d-flex align-items-end justify-content-center rounded'></div>
                    <Button className='button-pemandu' type='submit'style={{ backgroundColor: '#166274', border:'none' }}>
                        Selengkapnya
                    </Button>   
                </div>
                {/* <div className='col-sm-6 col-lg-3 text-blue'>
                    <div className='pool-div img-hover d-flex align-items-end justify-content-center rounded'>
                    </div>
                    <h4 className= 'mb-4 h6 text-left' >Saung Angklung Ujdo</h4>
                    <p className= 'mb-4 h6 text-left' >maskot dan objek wisata kota Bandung yang dahulu dikenal sebagai Parijs van Java.</p>
                </div>
                <div className='col-sm-6 col-lg-3 text-blue'>
                    <div className='pet-friendly-div img-hover d-flex align-items-end justify-content-center rounded'>
                    </div>
                    <h4 className= 'mb-4 h6 text-left' >Tahura</h4>
                    <p className= 'mb-4 h6 text-left' >maskot dan objek wisata kota Bandung yang dahulu dikenal sebagai Parijs van Java.</p>
                </div>
                <div className='col-sm-6 col-lg-3 text-blue'>
                    <div className='all-inclusive-div img-hover d-flex align-items-end justify-content-center'>
                    </div>
                    <h4 className= 'mb-4 h6 text-left' >Museum Geologi Bandung</h4>
                    <p className= 'mb-4 h6 text-left' >maskot dan objek wisata kota Bandung yang dahulu dikenal sebagai Parijs van Java.</p>
                </div> */}
            </div>
            <div>
                
            </div>
        </Container>
    </div>
  )
}

export default PemanduSection1;