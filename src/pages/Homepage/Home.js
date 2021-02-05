import React from 'react';
import Navbar from '../../components/layouts/navbar';
import Footer from '../../components/layouts/footer';
import Banner from './components/banner';
import Search from './components/search';
import Intro from './components/intro';
import Offer from './components/offer';
import Video from './components/video';
import Client from './components/client';
import Counter from './components/counter';
import {withTranslation} from "react-i18next";

const Home_V1 = (props) => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Search/>
            <Intro/>
            <Offer/>
            <Video/>
            <Counter/>
            <Client/>
            <Footer/>
        </div>
    )
}

export default withTranslation()(Home_V1)

