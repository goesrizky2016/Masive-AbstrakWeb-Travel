import React from "react";
import './LupaKataSandi.css';
import GoogleImage from '../../Assets/Images/Frame-112.png'; // Tambahkan import gambar
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Lupa () {
    return (
        <div className='login-form'>
        <Button className="back-button" style={{backgroundColor:'#ffff', borderRadius: '50%', }}>
            <Link to="/login">
                <FontAwesomeIcon icon={faArrowLeft} className='text-color' />
            </Link>
        </Button>
        <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
            <div className="wrapper">
                <div className="wrapper2">
                    <form action="">
                         <h4>Lupa Kata Sandi</h4>
                         <div className="input-box" style={{marginLeft: '10px', marginTop: '100px'}}>
                             <input className='text-dark' type="text" placeholder='Masukan Alamat Email' required />
                         </div>
                         {/* <div className="input-box">
                             <input className='text-dark'type="password" placeholder='Kata Sandi' required/> 
                         </div>
                         <div className="input-box">
                             <input className='text-dark' type="password" placeholder='Konfirmasi Kata Sandi' required/> 
                         </div> */}
                         {/* <div className="remember-forgot">
                             <label className="text-dark text-decoration-none" >
                                 <input type="checkbox" style={{ marginLeft: '20px' }} />
                                 <a>Saya menyetujui Ketentuan layanan dan Kebijakan privasi</a>
                            </label>
                        </div> */}
                        <Button  className="button" style={{ marginTop: '30px'}}>
                            <Link to="/masukan-kata-sandi" className="text-light" style={{ textDecoration: 'none' }}>Kirim</Link>
                        </Button>
                        <button type="submit" className="button-1 text-dark">
                            <img src={GoogleImage} className="img-google"/> Masuk Dengan Google
                         </button>
                         <div className="register-link">
                            <p><a href="/" className="text-light">Halaman Awal</a></p>
                         </div>
                     </form>
                 </div>
             </div>
        </Container>
    </div>
    )
}

export default Lupa;
