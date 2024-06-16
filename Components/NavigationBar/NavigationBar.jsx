import React from 'react';
import './NavigationBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import AirplaneLogo from '../../Assets/Images/anterinlogo-01 1.png';
import AccountIcon from '../../Assets/Images/account-icon.jpg';


function NavigationBar() {
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
                        <Nav.Link href='/' className='text-dark'>Ulasan</Nav.Link>
                        <Nav.Link href='/' className='text-dark'>Pesan</Nav.Link>
                    </Nav>
                    <Dropdown alignRight className='mobile-dropdown'>
                        <Dropdown.Toggle variant='light' className='button-border' id='dropdown-basic' style={{backgroundColor: '#166274'}}>
                            <img src={AccountIcon} alt="account" className='account-icon' style={{ width: '20px', height: '20px', marginRight: '8px' }} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{backgroundColor: '#166274'}}>
                            <Dropdown.Item as={Link} to='/profile' style={{backgroundColor: '#166274', display: 'flex', alignItems: 'center', color:'white'}}>Akun
                            </Dropdown.Item>
                            <Dropdown.Item as={Link} to='/' style={{backgroundColor: '#166274', color:'white'}}>Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar;
