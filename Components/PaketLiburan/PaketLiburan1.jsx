import React from 'react';
import './PaketLiburan1.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function PaketLiburan1() {
    return (
        <div className='liburan1-section my-4 my-sm-5'>
            <Container>
                <div className="d-flex align-items-center">
                    <Button className="back-button-liburan" style={{ backgroundColor: '#166274', borderRadius: '50%'}}>
                        <Link to="/dasboard">
                            <FontAwesomeIcon icon={faArrowLeft} className='text-color' />
                        </Link>
                    </Button>
                    <h3 className='liburan1-text mb-0 fw-semibold' style={{ marginLeft: '290px'}}>
                        Pilih Paket Liburanmu
                    </h3>
                </div>
                {/* Konten lainnya */}
            </Container>
        </div>
    )
}

export default PaketLiburan1;
