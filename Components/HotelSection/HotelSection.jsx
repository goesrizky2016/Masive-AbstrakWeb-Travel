import React, { useState } from 'react';
import './HotelSection.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import JayaImage from '../../Assets/Images/Rectangle-350.png';






function HotelSection2() {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const [selectedItem, setSelectedItem] = useState(null);


    const [show, setShow] = useState(false);
    const [selectedDate, setDate] = useState(null);

    const handleShow = () => {
        setShow(true);
        handleShowModal();
    };
    const handleAddToCart = () => {
        setSelectedItem(selectedItem); // Set item yang dipilih ke state
        setShowModal(false); 
    };

    return (
        <div className='hotel-section2 my-4 my-sm-5'>
            <Container>
                <div className='row g-4'>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div1 img-hover d-flex align-items-end justify-content-center rounded position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-30px' }}>The Jayakarta</h5>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-10px' }}>Bandung</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 500.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div2 img-hover d-flex align-items-end justify-content-center rounded position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Hotel Santika</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 300.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div3 img-hover d-flex align-items-end justify-content-center rounded position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Vue Palace</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 250.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                </div>
                <div className='row g-4'>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div4 img-hover d-flex align-items-end justify-content-center position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Hotel Wood</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 100.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div5 img-hover d-flex align-items-end justify-content-center position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                         <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>RedDoorz</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 100.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div6 img-hover d-flex align-items-end justify-content-center position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Dago Dream</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 30.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                </div>
                <div className='row g-4'>
                    {/* <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div7 img-hover d-flex align-items-end justify-content-center position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Saung Udjo</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 68.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div> */}
                    {/* <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div8 img-hover d-flex align-items-end justify-content-center position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Dago Dream Park</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 25.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div> */}
                    {/* <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div9 img-hover d-flex align-items-end justify-content-center position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Bandung Zoo</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 45.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div> */}
                </div>
            </Container>
            <Modal className='custom-modal2' show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    
                </Modal.Header>
                <Modal.Body>
                <div className='detail-liburan py-5 position-relative'>
                    <div className='bg-shape1 position-absolute'></div>
                    <Container>
                        <div className="row">
                            <div className='col-md-12 z-2 '>
                                <div>
                                    <img src={JayaImage} style={{height: '450px', width: '550px', marginLeft: '200px', marginBottom:'50px'}}/>
                                </div>
                                <p className='text-start text-dark fw-semibold'>
                                    
                                    <h2>The Jayakarta Bandung</h2>
                                </p>
                                <p className='text-start text-dark fw-semibold'>
                                    
                                    Bandung, Indonesia
                                </p>
                                <div className='col-md-12 z-2'>
                                    <p className='text-start text-start1 text-dark small-text2'>
                                    Jayakarta Suites Bandung adalah hotel dan resor yang berlokasi megah. Letaknya di atas dataran tinggi kota Bandung, memberikan pemandangan seluruh kota dan pegunungan sekitarnya. Kamar dan suite dengan pemandangan indah tersedia untuk akomodasi Anda di Bandung, dengan semua fasilitas hotel bintang empat. Para tamu The Jayakarta Suites Bandung akan menikmati keramahan Indonesia yang terkenal dan layanan yang luar biasa. Nikmati udara segar dan atraksi lokal, kemudian bersantai di penghujung hari di bar atau restoran hotel kami untuk menikmati malam romantis di Bandung.
                                    </p>
                                </div>
                                <div className='col-md-12 z-2'>
                                    <p className='text-start text-start1 text-dark small-text2'>
                                    Hotel Jayakarta Bandung adalah hotel Bintang 4 di Bandung yang menampilkan 210 kamar tamu termasuk 1 Penthouse (3 kamar tidur), 1 Presidential Suite (1 kamar tidur), 54 Junior Suites City and Mountain View, yang memiliki balkon pribadi, ruang tamu dan dapur kecil.
                                    </p>
                                </div>
                                <div className='col-md-12 z-2'>
                                    <p className='text-start text-start1 text-dark small-text2'>
                                    <p className=' text-start1 text-dark small-text2'>· Jl IR. H. Juanda No.381 A</p>
                                    <p className=' text-start1 text-dark small-text2'>· 022 2505888 / Fax. 022 2505388</p>
                                    <p className=' text-start1 text-dark small-text2'>· Prsvobandung@jayakartahotelsresorts.com</p>
                                    </p>
                                </div>
                                {/* <div className='col-md-12 z-2'>
                                    <p className='text-start text-start1 text-dark small-text2'>
                                        Jalan Braga ini terletak di tepi Sungai Cikapundung. Keempat, sejarah lain menyebut Braga dulunya adalah jalan pedati yang berlumpur. Braga dikenal dengan nama Karrenweg atau Pedatiweg
                                    </p>
                                </div> */}
                            </div>
                            <div>
                                <Button  className="button-modal" style={{ outline: 'none' }} onClick={handleAddToCart}>
                                    Pilih
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </Modal.Body>
            </Modal>
          
            
            
        </div>
    )
}

export default HotelSection2;
