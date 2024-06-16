import React, { useState } from 'react';
import './PemanduWisata.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import UdinImage from '../../Assets/Images/image-50.png';






function PemanduWisataSection2() {
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
        <div className='pemandu-section2 my-4 my-sm-5'>
            <Container>
                <div className='row g-4'>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div1 img-hover d-flex align-items-end justify-content-center rounded position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Udin</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 200.000</h5>
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
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Hery Hary</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 150.000</h5>
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
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Euis Salima</h5>
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
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Keinara</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 230.000</h5>
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
                                         <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Dirga</h5>
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
                                        <h5 className='text-fs2' style={{ marginLeft: '35px', marginTop: '-20px' }}>Leeeeee</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='button-pilih text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark' style={{ marginLeft: '35px', marginTop: '-20px' }}>Rp. 50.000</h5>
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
                                    <img src={UdinImage} style={{height: '450px', width: '300px', marginLeft: '300px', marginBottom:'50px'}}/>
                                </div>
                                <p className='text-start text-dark fw-semibold'>
                                    
                                    <h2>Udin</h2>
                                </p>
                                <p className='text-start text-dark fw-semibold'>
                                    
                                    Pemandu Wisata
                                </p>
                                <div className='col-md-12 z-2'>
                                    <p className='text-start text-start1 text-dark small-text2'>
                                    Hii saya adalah seorang pemandu wisata asal Bandung, saya sudah berpengalaman selama 5 tahun dan sudah banyak wisatawan yang saya pandu. berikut keahlian saya.
                                    </p>
                                </div>
                                <div className='col-md-12 z-2'>
                                    <p className='text-start text-start1 text-dark small-text2'>· Keterampilan komunikasi</p>
                                    <p className='text-start text-start1 text-dark small-text2'>· Kemampuan story telling</p>
                                    <p className='text-start text-start1 text-dark small-text2'>· Kemampuan manajerial</p>
                                    <p className='text-start text-start1 text-dark small-text2'>· Penguasaan bahasa asing</p>
                                    <p className='text-start text-start1 text-dark small-text2'>· Pemahaman sejarah</p>
                                    <p className='text-start text-start1 text-dark small-text2'>· Pemahaman budaya</p>
                                </div>

                                {/* <div className='col-md-12 z-2'>
                                    <p className='text-start text-start1 text-dark small-text2'>
                                        Sementara asal-usul nama Braga ketiga berasal dari bahasa Sunda. Ahli sastra Sunda mengatakan bahwa Braga berasal dari kata “Baraga” yang merujuk pada jalan di tepi sungai.
                                    </p>
                                </div>
                                <div className='col-md-12 z-2'>
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

export default PemanduWisataSection2;
