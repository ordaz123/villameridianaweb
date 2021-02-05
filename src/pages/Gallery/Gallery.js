import React from 'react';
import Navbar from '../../components/layouts/navbar';
import PageHeader from '../../components/layouts/page-header';
import GalleryDetails from './components/gallery-details';
import Footer from '../../components/layouts/footer';

const GalleryDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Gallery"  />
        <GalleryDetails />
        <Footer />
    </div>
}

export default GalleryDetailsPage

