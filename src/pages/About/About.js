import React from 'react';
import Navbar from '../../components/layouts/navbar';
import PageHeader from '../../components/layouts/page-header';
import Intro from './components/intro-v3';
import About from './components/about';
import Video from './components/video-v2';
import Footer from '../../components/layouts/footer';
import { withNamespaces } from "react-i18next";
//import Map from "../../components/layouts/map";
import MetaTags from 'react-meta-tags';
import bannerImg from "../../assets/img/all/banner.jpg"


function AboutPage({t}) {
    const header = t('aboutUs')

return (
    <div>
        <MetaTags>
            <meta name="description" content="Villa Meridiana Orebic" />
            <meta property="og:title" content="Villa Meridiana Orebic" />
            <meta property="og:image" content={bannerImg} />
        </MetaTags>
        <Navbar />
        <PageHeader headertitle={header} />
        <Intro />
        <About />
        <Video />
        {/* <Map/> */}
        <Footer />
    </div>
)
}

export default withNamespaces()(AboutPage);

