import React from 'react';
import Navbar from '../../components/layouts/navbar';
import Footer from '../../components/layouts/footer';
import Banner from './components/banner';
import Offer from './components/offer';
import Video from './components/video';
import { withNamespaces } from "react-i18next";
import MetaTags from 'react-meta-tags';
import bannerImg from "../../assets/img/all/banner.jpg"

const Home_V1 = (props) => {
    return (
        <div>
            <MetaTags>
                <meta name="description" content="Villa Meridiana Orebic" />
                <meta property="og:title" content="Villa Meridiana Orebic" />
                <meta property="og:image" content={bannerImg} />
            </MetaTags>
            <Navbar />
            <Banner />
            <Offer />
            <Video />
            <Footer />
        </div>
    )
}

export default withNamespaces()(Home_V1)

