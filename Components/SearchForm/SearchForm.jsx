import React from 'react';
import './SearchForm.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import SearchIcon from '../../Assets/Images/Search.png';

function SearchForm() {
  return (
    <div className='position-relative'>
      <Container>
        <Form className='search-form align-items-center'>
          <p className='text-dark fw-semibold fs-2 text-search-form'>Liburanmu dimulai dari sini</p>
          <Button className='col-lg-6 d-flex align-items-center justify-content-center button-search' type='submit' style={{ backgroundColor: '#166274', border: 'none', borderRadius: '10px' }}>
            <Link to="/login" className="text-light button-3 d-flex align-items-center">
              Pilih Paket
              <img src={SearchIcon} alt="Pencarian" className=" gambar" />
            </Link>
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SearchForm;
