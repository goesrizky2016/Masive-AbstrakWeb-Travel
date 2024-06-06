import React from "react";
import './MasukanKataSandi.css';
import GoogleImage from '../../Assets/Images/Frame-112.png'; // Tambahkan import gambar
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function LoginForm () {
    return (
        // <div className="container">
        //     <div className="wrapper">
        //         <div className="wrapper2">
        //             <form action="">
        //                 <h4>Masuk Akun</h4>
        //                 <div className="input-box">
        //                     <input type="text" placeholder='Email' required /> 
        //                 </div>
        //                 <div className="input-box">
        //                     <input type="password" placeholder='Kata Sandi' required/> 
        //                 </div>
        //                 <div className="remember-forgot">
        //                     <label>
        //                         <input type="checkbox" className="text-decoration-none" />
        //                         Ingat saya
        //                     </label>
        //                     <a href="/" className="text-dark text-decoration-none">Lupa Sandi?</a>
        //                 </div>
        //                 <button type="submit" className="text-light">Masuk</button>
        //                 <button type="submit" className="button-1">
        //                     <img src={GoogleImage} className="img-google"/> Masuk Dengan Google
        //                 </button>
        //                 <div className="register-link">
        //                     <p>Belum punya akun? <a href="/">Daftar Sekarang</a></p>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        <div className='login-form'>
        <Button className="back-button" style={{backgroundColor:'#ffff', borderRadius: '50%', }}>
            <Link to="/lupa">
                <FontAwesomeIcon icon={faArrowLeft} className='text-color' />
            </Link>
        </Button>
        <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
            <div className="wrapper">
                <div className="wrapper2">
                    <form action="">
                         <h4>Masuk Akun</h4>
                         <div className="input-box" style={{marginLeft: '10px', marginTop: '40px'}}>
                             <input className='text-dark' type="text" placeholder='Kata Sandi Baru' required /> 
                         </div>
                         <div className="input-box" style={{marginLeft: '10px', marginTop: '10px'}}>
                             <input className='text-dark' type="password" placeholder='Konfimasi Kata Sandi Baru' required/> 
                         </div>
                         {/* <div className="remember-forgot" style={{ marginTop: '50px'}}>
                            <label className="text-dark text-decoration-none">
                                <input type="checkbox" />
                                Ingat saya
                            </label>
                        </div> */}
                        <button type="submit" className="button text-light" style={{ marginTop: '40px'}}>Atur Ulang</button>  
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

export default LoginForm;
