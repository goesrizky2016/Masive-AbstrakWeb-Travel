import React, { useState } from "react";
import './BayarPage.css';
import GoogleImage from '../../Assets/Images/Frame-112.png'; // Tambahkan import gambar
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown'; // Tambahkan import Dropdown
import Modal from 'react-bootstrap/Modal'; // Tambahkan import Modal
import ListGroup from 'react-bootstrap/ListGroup'; // Tambahkan import ListGroup
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { BsTypeH5 } from "react-icons/bs";

function BayarSection() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleSelect = (option) => {
        setSelectedOption(option);
    };

    const handleInputClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='bayar-form'>
            <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
                
                <div className="wrapper">
                    <div className="wrapper2-bayar">
                        <Link to="/pilihanpaket">
                            <Button className="back-button2">
                                <FontAwesomeIcon icon={faArrowLeft} className='text-color1'/>
                            </Button>
                        </Link>
                        
                        
                        <h4 className="pesan-paket-title">Pesan Paket</h4>
                        <h4 className="pesan-paket-title2">Mu disini!</h4>
                        <h4 className="pesan-paket-title3">pastikan pesan dengan teliti dan hati-hati</h4>
                        <Container className="new-container">
                            <form action="">
                                <p className="has-text-centered"></p>
                                <h4 className="form-title text-dark">Jenis Paket</h4>
                                <div className="input-box-bayar">
                                    <input className='input-with-custom-placeholder mr-3 input-col1' type="text" placeholder="Jenis Paket" />
                                    <Dropdown onSelect={handleSelect}>
                                        <Dropdown.Toggle variant="primary" style={{ backgroundColor: '#166274', border: 'none', marginLeft: '100px' }}>
                                            {selectedOption || 'Code Vocher'}
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="45769812">45769812</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    
                                </div>
                                <div>
                                
                                </div>
                                <p className="has-text-centered"></p>
                                <h4 className="form-title2 text-dark">Jadwal Keberangkatan</h4>
                                <div className="input-box-bayar">
                                    <input className='input-with-custom-placeholder mr-3 input-col2' type="text" placeholder="Jadwal Keberangkatan" />
                                </div>
                                <div className="input-box-bayar">
                                    <input 
                                        className='input-with-custom-placeholder mr-3 input-col5' 
                                        type="text" 
                                        placeholder="Detail Pembelian" 
                                        onClick={handleInputClick} 
                                    />
                                </div>
                                <p className="has-text-centered"></p>
                                <h4 className="form-title3 text-dark">Harga Paket</h4>
                                <div className="input-box-bayar">
                                    <input className='input-with-custom-placeholder mr-3 input-col3' type="text" placeholder="Harga Paket" />
                                </div>
                                <div className="input-box-bayar1">
                                    <input className='text-dark' type="text" disabled />
                                </div>
                                <p className="has-text-centered"></p>
                                <h4 className="form-title4 text-dark">Kode Pembayaran akan dikirim lewat</h4>
                                <div className="input-box-bayar d-flex align-items-center">
                                    <input className='input-with-custom-placeholder mr-3 input-col4' type="text" placeholder="Email" />
                                    <Button variant="primary" style={{ backgroundColor: '#166274', border: 'none', marginLeft: '100px' }}>Setuju</Button>
                                </div>
                            </form>
                        </Container>
                    </div>
                </div>
            </Container>

            <Modal className="modal" show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Tempat Wisata</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item className="modal-group">. </ListGroup.Item>
                        <ListGroup.Item className="modal-group">. </ListGroup.Item>
                        <ListGroup.Item className="modal-group">. </ListGroup.Item>
                        <ListGroup.Item className="modal-group">. </ListGroup.Item>
                        <ListGroup.Item className="modal-group">. </ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default BayarSection;
