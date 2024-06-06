import React from 'react';
import './Paket.css';
import PaketLiburan1 from '../../Components/PaketLiburan/PaketLiburan1';
import PaketLiburan2 from '../../Components/PaketLiburan2/PaketLiburan2';
import PaketLiburan3 from '../../Components/PaketLiburan3/PaketLiburan3';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
// import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
// import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
// import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import FavouritesSection2 from '../../Components/FavouritesSection2/FavouritesSection2';
import PemanduWisata from '../../Components/PemanduWisata/PemanduWisata';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
import NextHoliday from '../../Components/NextHoliday/NextHoliday';
import TravelDestinationsSection from '../../Components/DestinationsSection/TravelDestinationSection';

function Paket() {
    return (
        <div className='paketliburan3-page'>

            <PaketLiburan3 />
            <FavouritesSection2 />
            {/* <PaketLiburan2 /> */}
            {/* <HeroSection />
            <SearchForm /> */}
            {/* <LastHolidaysSection /> */}
            {/* <div className="my-4 my-sm-5">
                <RecommendedSection itemRecommendedTitle='Recommended for you' />
            </div> */}
            {/* <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holiday' /> */}
            {/* <FavouritesSection />
            <PemanduWisata />
            <NeedInspirationSection /> */}
        </div>
    )
}

export default Paket;