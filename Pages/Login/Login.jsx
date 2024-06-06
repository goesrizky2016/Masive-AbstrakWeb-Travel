import React from 'react';
import './Login.css';
import LoginForm from '../../Components/LoginForm/LoginForm';
// import SearchForm from '../../Components/SearchForm/SearchForm';
// import LastHolidaysSection from '../../Components/LastHolidaysSection/LastHolidaysSection';
// import RecommendedSection from '../../Components/RecommendedSection/RecommendedSection';
// import HolidayPlanSection from '../../Components/HolidayPlanSection/HolidayPlanSection';
// import FavouritesSection from '../../Components/FavouritesSection/FavouritesSection';
// import RecentHolidays from '../../Components/RecentHolidays/RecentHolidays';
// import NeedInspirationSection from '../../Components/NeedInspiration/NeedInspirationSection';
// import Container from 'react-bootstrap/Container';

function Login() {
    return (
        <div className='login'>
            <LoginForm />
            {/* <SearchForm /> */}
            {/* <LastHolidaysSection /> */}
            {/* <div className="my-4 my-sm-5">
                <RecommendedSection itemRecommendedTitle='Recommended for you' />
            </div> */}
            {/* <HolidayPlanSection itemHolidayPlanTitle='Plan your summer holiday' />
            <FavouritesSection />
            <RecentHolidays />
            <NeedInspirationSection /> */}
        </div>
    )
}

export default Login;