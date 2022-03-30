import React from 'react';
import Navbar from '../../components/layouts/navbar';
import TourDetails from './components';
import Footer from '../../components/layouts/footer';
import MetaTags from 'react-meta-tags';
import bannerImg from "../../assets/img/all/banner.jpg"

const TourDetailsPage = () => {
    return <div>
                    <MetaTags>
            <meta name="description" content="Villa Meridiana Orebic" />
            <meta property="og:title" content="Villa Meridiana Orebic" />
            <meta property="og:image" content={bannerImg} />
          </MetaTags>
        <Navbar />
        <TourDetails />
        <Footer />
    </div>
}

export default TourDetailsPage

