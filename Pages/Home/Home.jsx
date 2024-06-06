import React from 'react';
import './Home.css';
import HeroSection from '../../Components/HeroSection/HeroSection';
import SearchForm2 from '../../Components/SearchForm2/SearchForm2';
// import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
// import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
// import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
import FavouritesSection from '../../Components/FavouritesSection/FavouritesSection';
import PemanduWisata from '../../Components/PemanduWisata/PemanduWisata';
import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';

function Home() {
    return (
        <div className='home-page'>
            <HeroSection />
            <SearchForm2 />
            {/* <LastHolidaysSection /> */}
            {/* <div className="my-4 my-sm-5">
                <RecommendedSection itemRecommendedTitle='Recommended for you' />
            </div> */}
            {/* <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holiday' /> */}
            <FavouritesSection />
            <PemanduWisata />
            <NeedInspirationSection />
        </div>
    )
}

export default Home;