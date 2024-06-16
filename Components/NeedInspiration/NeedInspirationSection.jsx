import React from 'react';
import './NeedInspirationSection.css';
import Container from 'react-bootstrap/Container';
import MitraImage1 from '../../Assets/Images/image-5.png';
import MitraImage2 from '../../Assets/Images/image-9.png';
import MitraImage3 from '../../Assets/Images/image-25.png';
import MitraImage4 from '../../Assets/Images/image-56.png';

function NeedInspirationSection() {
  return (
    <div className='need-inspiration-section py-5 position-relative'>
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className="row">
                <div className='col-md-3 z-2'>
                    <h2 className='text-start text-light text-capitalize fw-semibold'>Anterin</h2>
                    <p className='text-start text-light'>mengantarkan kamu melihat luasnya langit, tinggi nya gunung yang penuh dengan hamparan keindahan di wilayah ini</p>
                    
                </div>
                <div className='col-md-3'>
                    <h4 className='text-light text-capitalize fw-semibold mt-3'>Layanan</h4>
                    <ul className="list-unstyled">
                        <li className="mt-5"><a href="/" className='text-light text-decoration-none'>Bantuan</a></li>
                        <li className="mt-4"><a href="/" className='text-light text-decoration-none'>FAQ</a></li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <h4 className='text-light text-capitalize fw-semibold mt-3'>Terhubung</h4>
                    <ul className="list-unstyled">
                        <li className="mt-5"><a href="/" className='text-light text-decoration-none'>Tentang</a></li>
                        <li className="mt-3"><a href="/" className='text-light text-decoration-none'>Kontak</a></li>
                        <li className="mt-3"><a href="/" className='text-light text-decoration-none'>Media</a></li>
                    </ul>
                </div>
                <div className='col-md-3'>
                    <h4 className='text-light text-capitalize fw-semibold mt-3'>Mitra</h4>
                    <ul className="list-unstyled">
                        <li className="mt-5">
                            <a>
                                <img src={MitraImage1} alt="Mitra" className="mitra-image" />
                                <img src={MitraImage2} alt="Mitra" className="mitra-image" />
                                <img src={MitraImage3} alt="Mitra" className="mitra-image" />
                                <img src={MitraImage4} alt="Mitra" className="mitra-image" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default NeedInspirationSection;
