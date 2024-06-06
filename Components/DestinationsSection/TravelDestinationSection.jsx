import React from 'react';
import '../CityBreaksSection/CityBreaksSection.css';
import Container from 'react-bootstrap/Container';
import TravelDestinationsItems from '../../Assets/TravelDestinationItem';
import CityBreakCard from '../CityBreaksSection/CityBreakCard1';

function TravelDestinationsSection() {
  return (
    <div className='city-break-section'>
        <Container>
            <div className='row g-4'>
                {
                TravelDestinationsItems.map((item) => <CityBreakCard key={item.id} itemImage={item.itemImage} />)
                }
            </div>
        </Container>
    </div>
  )
}

export default TravelDestinationsSection;