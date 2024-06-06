import React from 'react';
import Card from 'react-bootstrap/Card';
import './CityBreaksSection.css';  // Pastikan Anda mengimpor file CSS yang benar

function CityBreakCard1(props) {
  return (
    <div className='col-md-6 col-lg-4'>
        <Card>
            <Card.Img className='img-hover' src={props.itemImage} />
            <Card.Body>
            </Card.Body>
        </Card>
    </div>
  )
}

export default CityBreakCard1;
