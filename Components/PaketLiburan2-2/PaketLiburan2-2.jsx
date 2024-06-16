import React, { useState } from 'react';
import './PaketLiburan2-2.css';
import { Modal, Button, Container, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PaketLiburanSection4() {
  const [isOn, setIsOn] = useState(false);
  const [show, setShow] = useState(false);

  const handleOnClick = () => {
    setIsOn(true);
  };

  const handleOffClick = () => {
    setIsOn(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='need-inspiration-section2 py-5 position-relative'>
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className="row">
                <div className='col-md-12 z-2'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className='text-start text-light text-capitalize fw-semibold'>Paket C</h5>
                        <div className="button-group">
                            <Button 
                                className={`button2 ${isOn ? 'active' : ''}`} 
                                onClick={handleOnClick}>
                                3 Hari
                            </Button>
                            <Button 
                                className={`button2 ${!isOn ? 'active' : ''}`}
                                onClick={handleOffClick}>
                                5 Hari
                            </Button>
                        </div>
                    </div>
                    <p className='text-start text-light'>
                        <span className='circle'></span>
                        Makan
                    </p>
                    <p className='text-start text-light'>
                        <span className='circle'></span>
                        1 - 5 Tempat Wisata
                    </p>
                    <div className='col-md-12 z-2'>
                        <p className='text-start text-light small-text'>
                            Paket A menawarkan makan, pilihan tempat wisata dengan total maksimal 5 destinasi tempat wisata yang dapat kamu tentukan.
                        </p>
                    </div>
                </div>
                <div>
                    <Button className="button" onClick={handleShow}>
                        <span className='text-detail fw-semibold'>Detail</span>
                    </Button>
                </div>
            </div>
        </Container>

        <Modal className="custom-modal" show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Detail Paket C</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='detail-liburan py-5 position-relative'>
                    <div className='bg-shape1 position-absolute'></div>
                    <Container>
                        <div className="row">
                            <div className='col-md-12 z-2'>
                                <div className='d-flex align-items-center'>
                                    <h4 className='text-center text-dark text-capitalize fw-semibold'>Paket A</h4>
                                    <div className="button-group2 d-flex align-items-center">
                                        <Button 
                                            className={`button3 ${isOn ? 'active' : ''}`} 
                                            onClick={handleOnClick}>
                                            3 Hari
                                        </Button>
                                        <Button 
                                            className={`button3 ${!isOn ? 'active' : ''}`}
                                            onClick={handleOffClick}>
                                            5 Hari
                                        </Button>
                                    </div>
                                </div>
                                <p className=' text-dark fw-semibold'>
                                    <span className='circle1'></span>
                                    Makan
                                </p>
                                <p className=' text-dark fw-semibold'>
                                    <span className='circle1'></span>
                                    Penginapan
                                </p>
                                <p className='text-dark fw-semibold'>
                                    <span className='circle1'></span>
                                    1 - 5 Tempat Wisata
                                </p>
                                <div className='col-md-12 z-2'>
                                    <p className=' text-dark small-text2'>
                                    Paket C menawarkan pemandu wisata untuk perjalanan liburanmu,  tersedia makan dan penginapan beserta pilihan tempat wisata dengan total maksimal 5 destinasi tempat wisata yang dapat kamu tentukan.
                                    </p>
                                </div>
                                <div className='col-md-12 z-2'>
                                    <p className='text-dark fw-semibold'>
                                    <h4>Syarat dan Ketentuan</h4>
                                    </p>
                                </div>
                                <p className=' text-dark small-text2'>
                                    <span className='circle1 '></span>
                                    Harga berlaku khusus WNI
                                </p>
                                <p className=' text-dark small-text2'>
                                    <span className='circle1'></span>
                                    Harga berlaku per orang dengan jumlah wisatawan minimal 1 orang maksimal 5
                                </p>
                                <p className=' text-dark small-text2'>
                                    <span className='circle1'></span>
                                    Pengunjung hanya dapat sekali masuk untuk tiap destinasi wisata
                                </p>
                                <p className='text-dark small-text2'>
                                    <span className='circle1'></span>
                                    Wisatawan bisa mengganti / Menambahkan tempat wisata yang di inginkan dengan catatan harus membayar tiket masuk sendiri / menyesuaikan .
                                </p>
                                <div className='col-md-12 z-2'>
                                    <p className=' text-dark fw-semibold'>
                                    <h4>Kebijakan Refund</h4>
                                    </p>
                                </div>
                                <p className='  text-dark small-text2'>
                                    <span className='circle1'></span>
                                    Ajukan refund paling lambat 1 day(s) hari sebelum tanggal kunjungan untuk mendapatkan refund hingga 100%.
                                </p>
                                <p className='text-dark small-text2'>
                                    <span className='circle1'></span>
                                    Pesanan Anda sudah tidak dapat di-refund bila Anda mengajukan permintaan kurang dari 1 hari sebelum tanggal kunjungan.
                                </p>
                                <p className='text-dark small-text2'>
                                    <span className='circle1'></span>
                                    Jumlah refund yang Anda dapatkan tidak termasuk biaya layanan, kupon diskon, dan/atau kode unik transfer bank.
                                </p>
                                <p className='text-dark small-text2'>
                                    <span className='circle1'></span>
                                    Anda dapat membatalkan pesanan dan mengajukan refund di halaman Profil lalu Pesananaku. Pada bagian Pesananku, ketuk Batalkan dan ikuti proses pengajuan refund.
                                </p>
                                <div className='col-md-12 z-2'>
                                    <p className='text-dark fw-semibold'>
                                    <h4>Jadwal Wisata</h4>
                                    </p>
                                </div>
                                <div className='col-md-12 z-2'>
                                    <p className='text-dark small-text2'>
                                        <span className='circle'></span>
                                        Jadwal wisata menyesuaikan dengan destinasi yang Anda pilih.
                                    </p>
                                </div>
                                <div className='col-md-12 z-2'>
                                    <p className='text-dark fw-semibold'>
                                    <h4>Penginapan</h4>
                                    </p>
                                </div>
                                <div className='col-md-12 z-2'>
                                    <p className='text-dark small-text2'>
                                        <span className='circle'></span>
                                        Jumlah Tamu
                                    </p>
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Pilih jumlah tamu
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{backgroundColor:'white'}}>
                                        <Dropdown.Item href="#/action-1">1 Tamu</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">2 Tamu</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">3 Tamu</Dropdown.Item>
                               
                                    </Dropdown.Menu>
                                </Dropdown>
                                
                            </div>
                            <div>
                                <Button className="button-modal" style={{ outline: 'none' }}>
                                    <Link to="/pilihanpaket" className='text-detail2 fw-semibold 'style={{ textDecoration: 'none' }}>Pilih Paket</Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </Modal.Body>
        </Modal>
    </div>
  );
}

export default PaketLiburanSection4;
