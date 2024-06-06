import React, { useState } from "react";
import axios from "axios";
import './LoginForm.css';
import GoogleImage from '../../Assets/Images/Frame-112.png'; // Tambahkan import gambar
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/login', {
                email: email,
                password: password,
            
            });
            navigate("/dasboard");
        } catch (error) {
           if(error.response){
            setMsg(error.response.data.msg);
           }
        }
    };


    return (
     
        <div className='login-form'>
        <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
            <div className="wrapper">
                <div className="wrapper2">
                    <form onSubmit={Auth} action="">
                         <h4>Masuk Akun</h4>
                         <p className="has-text-centered">{msg}</p>
                         <div className="input-box" style={{marginLeft: '10px'}}>
                             <input className='text-dark' type="text" placeholder='Email' required 
                             value={email} onChange={(e) => setEmail(e.target.value)} /> 
                         </div>
                         <div className="input-box" style={{marginLeft: '10px', marginTop: '40px'}}>
                             <input className='text-dark' type="password" placeholder='Kata Sandi' required
                              value={password} onChange={(e) => setPassword(e.target.value)} /> 
                         </div>
                         <div className="remember-forgot" style={{ marginTop: '10px'}}>
                             <label className="text-dark text-decoration-none">
                                 <input type="checkbox" />
                                 Ingat saya
                            </label>
                             <a href="/lupa" className="text-dark text-decoration-none">Lupa Sandi?</a>
                        </div>
                       <button type="submit" className="button" style={{ marginTop: '30px'}}>Daftar</button>
                        <button type="submit" className="button-1 text-dark">
                            <img src={GoogleImage} className="img-google"/> Masuk Dengan Google
                         </button>
                         <div className="register-link">
                            <p>Belum punya akun? <a href="/register">Daftar Sekarang</a></p>
                         </div>
                     </form>
                 </div>
             </div>
        </Container>
    </div>
    )
}

export default LoginForm;
