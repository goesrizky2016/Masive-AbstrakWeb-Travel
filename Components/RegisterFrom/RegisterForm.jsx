import React, { useState } from "react";
import axios from "axios";
import './RegisterForm.css';
import GoogleImage from '../../Assets/Images/Frame-112.png';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        console.log("Register button clicked");

        // Periksa apakah checkbox "Ingat Saya" telah dicentang
        const rememberMeChecked = document.getElementById('rememberMeCheckbox').checked;

        if (!rememberMeChecked) {
            // Jika checkbox tidak dicentang, tampilkan pesan dan hentikan proses pendaftaran
            setMsg("Anda harus mencentang 'Ingat Saya' untuk mendaftar.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/users', {
                email: email,
                password: password,
                confPassword: confPassword
            }, {
                withCredentials: true
            });

            console.log('Register response:', response.data); // Debug respons

            navigate('/login');
        } catch (error) {
            console.error('Register error:', error); // Debug error
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    const auth = async () => {
        console.log("Google auth button clicked");

        try {
            const response = await axios.get('http://localhost:5000/auth/google');
            window.location.href = response.data.authUrl; // Arahkan pengguna ke URL otorisasi Google
        } catch (error) {
            console.error('Error in auth:', error);
            setMsg('Error logging in with Google. Please try again.');
        }
    };

    return (
        <div className='login-form'>
            <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
                <div className="wrapper">
                    <div className="wrapper2">
                        <form onSubmit={register}>
                            <h4>Daftar Akun</h4>
                            <p className="has-text-centered text-dark">{msg}</p>
                            <div className="input-box" style={{ marginLeft: '10px', marginTop: '30px' }}>
                                <input className='text-dark' type="text" placeholder='Email' required
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-box" style={{ marginLeft: '10px', marginTop: '10px' }}>
                                <input className='text-dark' type="password" placeholder='Kata Sandi' required
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="input-box" style={{ marginLeft: '10px', marginTop: '10px' }}>
                                <input className='text-dark' type="password" placeholder='Konfirmasi Kata Sandi' required
                                    value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                            </div>
                            <div className="remember-forgot" style={{ marginTop: '20px' }}>
                                <label className="text-dark text-decoration-none">
                                    <input id="rememberMeCheckbox" type="checkbox" style={{ marginLeft: '20px' }} /> Saya menyetujui Ketentuan layanan dan Kebijakan privasi
                                </label>
                            </div>
                            <button type="submit" className="button" style={{ marginTop: '30px' }}>Daftar</button>
                            <button type="button" className="button-1 text-dark" onClick={auth} style={{ marginTop: '10px' }}>
                                <img src={GoogleImage} className="img-google" alt="Google Logo" /> Masuk Dengan Google
                            </button>
                            <div className="register-link">
                                <p>Sudah punya akun! <a href="/login">Masuk</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Register;
