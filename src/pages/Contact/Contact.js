import React from 'react';
import Navbar from '../../components/layouts/navbar';
import PageHeader from '../../components/layouts/page-header';
import Contact from './components/contact';
import Footer from '../../components/layouts/footer';
import MetaTags from 'react-meta-tags';
import bannerImg from "../../assets/img/all/banner.jpg"
import { withNamespaces } from 'react-i18next';

const ContactPage = ({t}) => {
    return (
        <div>
            <MetaTags>
                <meta name="description" content="Villa Meridiana Orebic" />
                <meta property="og:title" content="Villa Meridiana Orebic" />
                <meta property="og:image" content={bannerImg} />
            </MetaTags>
            <Navbar />
            <PageHeader headertitle={t('sliderButton')} />
            <Contact />
            <Footer />
        </div>
    )
}

export default withNamespaces()(ContactPage)

