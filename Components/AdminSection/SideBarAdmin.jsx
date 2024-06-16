import React from "react";
import './SideBarAdmin.css'
import logo from '../../Assets/Images/anterinlogo-01 1.png'; // Ganti dengan path logo sesuai dengan struktur proyek Anda

function SideBar() {
    return(
        <div className="bg-white sidebar p-2">
            <div className="m-2 d-flex align-items-center">
                <img src={logo} alt="Logo" className="me-2" style={{ width: '140px', height: '50px', marginLeft:'10px' }} />
                
            </div>
            <hr className="text-dark"/>
            <div className="list-group list-group-flush">
                <a className="list-group-item py-">
                    <i className="fs-5 me-2"></i>
                    <span className="fs-5">Catatan Pesanan</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span className="fs-5">Dasboard</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-house fs-4 me-3"></i>
                    <span className="fs-5">Home</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-table fs-4 me-3"></i>
                    <span className="fs-5">Pesanan</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-power fs-4 me-3"></i>
                    <span className="fs-5">Log Out</span>
                </a>
            </div>
        </div>
    )
}

export default SideBar;
