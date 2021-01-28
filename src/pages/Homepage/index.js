import React from 'react';
import Navbar from '../../components/global-components/navbar';
import Footer from '../../components/global-components/footer';
import Banner from './components/banner';
import Search from './components/search';
import Intro from './components/intro';
import Offer from './components/offer';
import Video from './components/video';
import Client from './components/client';
import Counter from './components/counter';

const Home_V1 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Search />
        <Intro />
        <Offer />
        <Video />
        <Counter />
        <Client />
        <Footer />
    </div>
}

export default Home_V1

