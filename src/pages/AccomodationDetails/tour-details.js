import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import TourDetails from './components';
import Footer from '../../components/global-components/footer';

const TourDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tour Details"  />
        <TourDetails />
        <Footer />
    </div>
}

export default TourDetailsPage

