import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import GalleryDetails from './components/gallery-details';
import Footer from '../../components/global-components/footer';

const GalleryDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Gallery"  />
        <GalleryDetails />
        <Footer />
    </div>
}

export default GalleryDetailsPage

