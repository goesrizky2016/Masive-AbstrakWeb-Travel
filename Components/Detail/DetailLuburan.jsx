import React, { useState } from 'react';
import './DetailLiburan.css';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function DetailLiburan() {
  const [isOn, setIsOn] = useState(false);

  const handleOnClick = () => {
    setIsOn(true);
  };

  const handleOffClick = () => {
    setIsOn(false);
  };

  return (
    <div className='detail-liburan py-5 position-relative'>
        <div className='bg-shape1 position-absolute'></div>
        <Container>
            <div className="row">
                <div className='col-md-12 z-2'>
                    <div className='d-flex align-items-center'>
                        <h4 className='text-start1 text-dark text-capitalize fw-semibold'>Paket A</h4>
                        <div className="button-group d-flex align-items-center">
                            <Button 
                                className={`button2 ${isOn ? 'active' : ''}`} 
                                onClick={handleOnClick}
                                
                                
                            >
                                3 Hari
                            </Button>
                            <Button 
                                className={`button2 ${!isOn ? 'active' : ''}`}
                                onClick={handleOffClick}
                            >
                                5 Hari
                            </Button>
                        </div>
                    </div>
                    <p className='text-start text-dark fw-semibold'>
                        <span className='circle'></span>
                        Makan
                    </p>
                    <p className='text-start text-dark fw-semibold'>
                        <span className='circle'></span>
                        1 - 5 Tempat Wisata
                    </p>
                    <div className='col-md-6 z-2'>
                        <p className='text-start text-start1 text-dark small-text'>
                        Paket A menawarkan makan, pilihan tempat wisata dengan total maksimal 5 destinasi tempat wisata yang dapat kamu tentukan.
                        </p>
                    </div>
                    <div className='col-md-12 z-2'>
                        <p className='text-start text-start2 text-dark fw-semibold'>
                        <h4>Syarat dan Ketentuan</h4>
                        </p>
                    </div>
                    <p className='text-start text-dark small-text'>
                        <span className='circle '></span>
                        Harga berlaku khusus WNI
                    </p>
                    <p className='text-start text-dark small-text'>
                        <span className='circle'></span>
                        Harga berlaku per orang dengan jumlah wisatawan minimal 1 orang maksimal 5
                    </p>
                    <p className='text-start text-dark small-text'>
                        <span className='circle'></span>
                        Pengunjung hanya dapat sekali masuk untuk tiap destinasi wisata
                    </p>
                    <p className='text-start text-start1 text-dark small-text'>
                        <span className='circle'></span>
                        Wisatawan bisa mengganti / Menambahkan tempat wisata yang di inginkan dengan catatan harus membayar tiket masuk sendiri / menyesuaikan .
                    </p>
                    <div className='col-md-12 z-2'>
                        <p className='text-start text-dark fw-semibold'>
                        <h4>Kebijakan Refund</h4>
                        </p>
                    </div>
                    <p className='text-start text-start2 text-dark small-text'>
                        <span className='circle'></span>
                        Ajukan refund paling lambat 1 day(s) hari sebelum tanggal kunjungan untuk mendapatkan refund hingga 100%.
                    </p>
                    <p className='text-start  text-dark small-text'>
                        <span className='circle'></span>
                        Pesanan Anda sudah tidak dapat di-refund bila Anda mengajukan permintaan kurang dari 1 hari sebelum tanggal kunjungan.
                    </p>
                    <p className='text-start  text-dark small-text'>
                        <span className='circle'></span>
                        Jumlah refund yang Anda dapatkan tidak termasuk biaya layanan, kupon diskon, dan/atau kode unik transfer bank.
                    </p>
                    <p className='text-start text-start1 text-dark small-text'>
                        <span className='circle'></span>
                        Anda dapat membatalkan pesanan dan mengajukan refund di halaman Profil lalu Pesananaku. Pada bagian Pesananku, ketuk Batalkan dan ikuti proses pengajuan refund.
                    </p>
                    <div className='col-md-12 z-2'>
                        <p className='text-start text-dark fw-semibold'>
                        <h4>Jadwal Wisata</h4>
                        </p>
                    </div>
                    <div className='col-md-12 z-2'>
                        <p className='text-start text-start2 text-dark small-text'>
                            <span className='circle'></span>
                            Jadwal wisata menyesuaikan dengan destinasi yang Anda pilih.
                        </p>
                    </div>
                </div>
                <div>
                    <Button className="button">
                        <Link to="/pilihanpaket" className='text-detail fw-semibold'>Pilih Paket</Link>
                    </Button>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default DetailLiburan;
