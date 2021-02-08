import React from 'react';
import Navbar from '../../components/layouts/navbar';
import PageHeader from '../../components/layouts/page-header';
import Intro from './components/intro-v3';
import About from './components/about';
import Video from './components/video-v2';
import Footer from '../../components/layouts/footer';
import {withTranslation} from "react-i18next";
import Map from "../../components/layouts/map";

const AboutPage = (props) => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us"  />
        <Intro />
        <About />
        <Video />
        <Map/>
        <Footer />
    </div>
}

export default withTranslation()(AboutPage);

