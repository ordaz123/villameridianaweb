import React from 'react';
import Navbar from '../../components/layouts/navbar';
import TourDetails from './components';
import Footer from '../../components/layouts/footer';

const TourDetailsPage = () => {
    return <div>
        <Navbar />
        {/*<PageHeader headertitle="Tour Details"  />*/}
        <TourDetails />
        <Footer />
    </div>
}

export default TourDetailsPage

