import React, { useState } from "react";
import './Verifikasi.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Verifikasi() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='verifikasi-form'>
            <Button className="back-button" style={{backgroundColor:'#ffff', borderRadius: '50%', }}>
                <Link to="/register">
                    <FontAwesomeIcon icon={faArrowLeft} className='text-color' />
                </Link>
            </Button>
            <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
                <div className="verifikasi-wrapper">
                    <div className="verifikasi-wrapper2">
                        <form action="">
                            
                            <h3>Lupa Kata Sandi</h3>
                            <h6>Masukan kode verifikasi</h6>
                            <div className="verifikasi-input-container">
                                <div className="verifikasi-input-box">
                                    <input className='text-dark text-center' type="text" required />
                                </div>
                                <div className="verifikasi-input-box">
                                    <input className='text-dark text-center' type="text" required />
                                </div>
                                <div className="verifikasi-input-box">
                                    <input className='text-dark text-center' type="text" required />
                                </div>
                                <div className="verifikasi-input-box">
                                    <input className='text-dark text-center' type="text" required />
                                </div>
                                <div className="verifikasi-input-box">
                                    <input className='text-dark text-center' type="text" required />
                                </div>
                                <div className="verifikasi-input-box">
                                    <input className='text-dark text-center' type="text" required />
                                </div>
                            </div>
                            <Button className="verifikasi-button" style={{ marginTop: '30px' }}>
                                <Link to="/dasboard" className="text-light" style={{ textDecoration: 'none' }}>Kirim</Link>
                            </Button>
                            <div className="verifikasi-register-link">
                                <p>Jika Anda tidak menerima kode, <a href="#" onClick={handleShow}>Kirim Ulang</a></p>
                            </div>
                            <div className="verifikasi-register-link">
                                <p>Sudah punya akun! <a href="/login">Masuk</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Verifikasi Ulang</Modal.Title>
                </Modal.Header>
                <Modal.Body>Kode untuk verifikasi ulang telah dikirim ke email Anda.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Tutup
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Verifikasi;
