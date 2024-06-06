import React from 'react';
import './PaketLiburan.css';
import PaketLiburan1 from '../../Components/PaketLiburan/PaketLiburan1';
import PaketLiburan2 from '../../Components/PaketLiburan2/PaketLiburan2';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm from '../../Components/SearchForm/SearchForm';
// import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
// import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
// import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import FavouritesSection from '../../Components/FavouritesSection/FavouritesSection';
import PemanduWisata from '../../Components/PemanduWisata/PemanduWisata';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
import NextHoliday from '../../Components/NextHoliday/NextHoliday';

function PaketLiburan() {
    return (
        <div className='paketliburan-page'>
            <PaketLiburan1 />
            <PaketLiburan2 />
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

export default PaketLiburan;