import React, { useState } from 'react';
import './FavouritesSection2.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleDown } from 'react-icons/fa';

function CustomeInput({ value, onClick }) {
    return (
        <div className='input-group'>
            <input type='text' className='form-control' value={value} onClick={onClick} readOnly />
            <div className='input-group-append'>
                <span className='input-group-text'>
                    <FaAngleDown />
                </span>
            </div>
        </div>
    )
}

function FavouritesSection2() {
    const [show, setShow] = useState(false);
    const [selectedDate, setDate] = useState(null);

    const handleShow = () => setShow(true);

    const handleDatePickerButtonClick = () => {
        // Lakukan sesuatu saat tombol "Pilih Tanggal" diklik
        handleShow();
    };

    return (
        <div className='favourites-section2 my-4 my-sm-5'>
            <Container>
                <div className='row g-4'>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div1 img-hover d-flex align-items-end justify-content-center rounded position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{marginLeft:'35px', marginTop:'-20px'}}>Braga</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark'style={{marginLeft:'35px', marginTop:'-20px'}}>Rp. 100.000</h5>
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
                                        <h5 className='text-fs2' style={{marginLeft:'35px', marginTop:'-20px'}}>Orchit Fores</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark'style={{marginLeft:'35px', marginTop:'-20px'}}>Rp. 60.000</h5>
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
                                        <h5 className='text-fs2' style={{marginLeft:'35px', marginTop:'-20px'}}>Ranca Upas</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark'style={{marginLeft:'35px', marginTop:'-20px'}}>Rp. 25.000</h5>
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
                                        <h5 className='text-fs2' style={{marginLeft:'35px', marginTop:'-20px'}}>Kawah Putih</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark'style={{marginLeft:'35px', marginTop:'-20px'}}>Rp. 50.000</h5>
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
                                         <h5 className='text-fs2' style={{marginLeft:'35px', marginTop:'-20px'}}>Taruha</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark'style={{marginLeft:'35px', marginTop:'-20px'}}>Rp. 20.000</h5>
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
                                        <h5 className='text-fs2' style={{marginLeft:'35px', marginTop:'-20px'}}>Tebing Kraton</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark'style={{marginLeft:'35px', marginTop:'-20px'}}>Rp. 17.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                </div>
                <div className='row g-4'>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div7 img-hover d-flex align-items-end justify-content-center position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{marginLeft:'35px', marginTop:'-20px'}}>Saung Udjo</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark'style={{marginLeft:'35px', marginTop:'-20px'}}>Rp. 68.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div8 img-hover d-flex align-items-end justify-content-center position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{marginLeft:'35px', marginTop:'-20px'}}>Dago Dream Park</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark'style={{marginLeft:'35px', marginTop:'-20px'}}>Rp. 25.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                    <div className='col-sm-6 col-lg-4 text-blue2'>
                        <div className='spa-div9 img-hover d-flex align-items-end justify-content-center position-relative'>
                            <Container className='button-container-section'>
                                <div className="button-container3 position-absolute">
                                    <form>
                                        <h5 className='text-fs2' style={{marginLeft:'35px', marginTop:'-20px'}}>Bandung Zoo</h5>
                                        <Button className="button-fs2" onClick={handleShow}>
                                            <span className='text-detail fw-semibold'>Pilih</span>
                                        </Button>
                                        <h5 className='harga-fs2 text-dark'style={{marginLeft:'35px', marginTop:'-20px'}}>Rp. 45.000</h5>
                                    </form>
                                </div>
                            </Container>
                        </div>
                        <p className='text-objek2 mb-4 h6 text-left2'></p>
                    </div>
                </div>
            </Container>
            <div>
                <label >
                    <DatePicker
                    selected={selectedDate}
                    onChange={date => setDate(date)}
                    customInput={<CustomeInput />}
                    className="form-control text-center "
                /></label>
            </div>
            
        </div>
    )
}

export default FavouritesSection2;
