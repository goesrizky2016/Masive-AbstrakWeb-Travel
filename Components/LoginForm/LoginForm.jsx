import React, { useState } from "react";
import axios from "axios";
import './LoginForm.css';
import GoogleImage from '../../Assets/Images/Frame-112.png';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        const rememberMeChecked = document.getElementById('rememberMeCheckbox').checked;

        if (!rememberMeChecked) {
            setMsg("Anda harus mencentang 'Ingat Saya' untuk masuk.");
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/login', {
                email:email,
                password: password
            });

            const role = response.data.role;
            localStorage.setItem('accessToken', response.data.accessToken);

            if (role === 'user') {
                navigate("/dasboard");
            } else if (role === 'admin') {
                navigate("/admin");
            }
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    };

    const auth = async () => {
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
                        <form onSubmit={Auth}>
                            <h4>Masuk Akun</h4>
                            <p className="has-text-centered text-dark">{msg}</p>
                            <div className="input-box" style={{ marginLeft: '10px' }}>
                                <input className='text-dark' type="email" placeholder='Email' required
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-box" style={{ marginLeft: '10px', marginTop: '40px' }}>
                                <input className='text-dark' type="password" placeholder='Kata Sandi' required
                                    value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="remember-forgot" style={{ marginTop: '10px' }}>
                                <label className="text-dark text-decoration-none">
                                    <input id="rememberMeCheckbox" type="checkbox" />Ingat saya
                                </label>
                            </div>
                            <button type="submit" className="button" style={{ marginTop: '30px' }}>Masuk</button>
                            <Button type="button" className="button-1 text-dark" onClick={auth}>
                                <img src={GoogleImage} className="img-google" alt="Google Sign-In"/> Masuk Dengan Google
                            </Button>
                            <div className="register-link">
                                <p>Belum punya akun? <a href="/register">Daftar Sekarang</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default LoginForm;
