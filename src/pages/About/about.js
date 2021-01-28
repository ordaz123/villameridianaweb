import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import Intro from './components/intro-v3';
import About from './components/about';
import Video from './components/video-v2';
import Footer from '../../components/global-components/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About Us"  />
        <Intro />
        <About />
        <Video />
        <Footer />
    </div>
}

export default AboutPage

