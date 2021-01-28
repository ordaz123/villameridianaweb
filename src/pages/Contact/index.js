import React from 'react';
import Navbar from '../../components/global-components/navbar';
import PageHeader from '../../components/global-components/page-header';
import Contact from './components/contact';
import Footer from '../../components/global-components/footer';

const ContactPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact Us"  />
        <Contact />
        <Footer />
    </div>
}

export default ContactPage

