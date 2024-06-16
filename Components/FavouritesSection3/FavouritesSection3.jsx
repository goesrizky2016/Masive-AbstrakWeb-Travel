import React, { useState, useEffect } from 'react';
import './FavouritesSection3.css';
import Button from 'react-bootstrap/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaAngleDown, FaShoppingCart } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function CustomeInput({ value, onClick }) {
    return (
        <div className='input-group custom-date-picker'>
            <input type='text' className='form-control' value={value} onClick={onClick} readOnly />
            <div className='input-group-append'>
                <span className='input-group-text text-light'>
                    <FaAngleDown />
                </span>
            </div>
        </div>
    );
}

function FavouritesSection3({ selectedItems = [] }) {
    const [selectedDate, setDate] = useState(null);
    const [totalHarga, setTotalHarga] = useState(0);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        const totalPrice = selectedItems.reduce((acc, item) => acc + item.price, 0);
        setTotalHarga(totalPrice);
    }, [selectedItems]);

    return (
        <div className='favourites-section3 d-flex justify-content-between align-items-center p-3'>
            <div>
                <label className='d-flex align-items-center'>
                    <DatePicker
                        selected={selectedDate}
                        onChange={date => setDate(date)}
                        customInput={<CustomeInput />}
                        className="form-control text-center label-tanggal"
                        popperPlacement="bottom-end"
                    />
                </label>
            </div>
            <Button className="cart-button" variant="success" onClick={() => setModalShow(true)} style={{ textDecoration: 'none' }}>
                <FaShoppingCart style={{ color: 'white' }} />
            </Button>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                dialogClassName="modal-90w"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Keranjang Belanja</Modal.Title>
                </Modal.Header>
                <Modal.Body className="d-flex flex-column">
                    {selectedItems.length > 0 ? (
                        <div className="cart-content d-flex flex-column flex-grow-1">
                            <ul className="item-list flex-grow-1">
                                {selectedItems.map(item => (
                                    <li key={item.id}>
                                        {item.name} - Rp. {item.price.toLocaleString()}
                                    </li>
                                ))}
                            </ul>
                            <div className="cart-footer">
                                <div className='total-bayar'>Total Bayar: Rp. {totalHarga.toLocaleString()}</div>
                                <Link to='/bayar' className='button-bayar text-center' style={{ textDecoration: 'none', color: 'white' }}>Bayar</Link>
                            </div>
                        </div>
                    ) : (
                        <p>Keranjang belanja kosong.</p>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default FavouritesSection3;
