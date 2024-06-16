import React from 'react';
import './NavigationPage.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import AirplaneLogo from '../../Assets/Images/anterinlogo-01 1.png';

function NavigationPage() {
    return (
        <Navbar expand='lg' className='position-absolute w-100 z-2'>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={AirplaneLogo} alt="logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-light' />
                <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
                    <Nav className='me-auto w-100 justify-content-center text-dark'>
                        <Nav.Link href='/dasboard' className='text-dark'>Ulasan</Nav.Link>
                        <Nav.Link href='/holidays' className='text-dark'>Pesan</Nav.Link>
                    </Nav>
                    <Button variant='light' className='button-border'>
                        <Link to='/login' className='text-decoration-none text-capitalize text-dark texpt-nowra '>Masuk</Link>
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationPage;