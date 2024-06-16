import React, { useState } from 'react';
import './PaketLiburan3.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function PaketLiburan3() {
    const [selectedButton, setSelectedButton] = useState('');

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className='liburan3-section my-4 my-sm-5'>
            <Container>
                <div className="d-flex align-items-center">
                    <Button className="back-button-liburan3" style={{ backgroundColor: '#166274', borderRadius: '50%', marginRight: '20px' }}>
                        <Link to="/paket">
                            <FontAwesomeIcon icon={faArrowLeft} className='text-color3' />
                        </Link>
                    </Button>
                    <div className="button-container">
                        <div className="button-grup d-flex">
                            <Link to="/pilihanpaket" className='text-decoration-none'>
                                <Button
                                    className={`button-paket ${selectedButton === 'Tempat Wisata' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('Tempat Wisata')}
                                >
                                    Tempat Wisata
                                </Button>
                            </Link>
                            <Link to="/pemandu" className='text-decoration-none'>
                                <Button
                                    className={`button-paket ${selectedButton === 'Pemandu' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('Pemandu')}
                                >
                                    Pemandu
                                </Button>
                            </Link>
                            <Link to="/hotel" className='text-decoration-none '>
                                <Button
                                    className={`button-paket ${selectedButton === 'Penginapan' ? 'active' : ''}`}
                                    onClick={() => handleButtonClick('Penginapan')}
                                >
                                    Penginapan
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default PaketLiburan3;
