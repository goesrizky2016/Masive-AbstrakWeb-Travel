import React from 'react';
import './SearchForm2.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import SearchIcon from '../../Assets/Images/Search.png';

function SearchForm() {
  return (
    <div className='position-relative'>
      <Container>
        <Form className='search-form2 align-items-center'>
          <p className='text-dark fw-semibold fs-2 text-search-form2'>Liburanmu dimulai dari sini</p>
          <Button className='col-lg-6 d-flex align-items-center justify-content-center button-search2' type='submit' style={{ backgroundColor: '#166274', border: 'none', borderRadius: '10px' }}>
            <Link to="/paket" className="text-light button-2 d-flex align-items-center">
              Pilih Paket
              <img src={SearchIcon} alt="Pencarian" className=" gambar2" />
            </Link>
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SearchForm;
