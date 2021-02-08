import React from 'react';
import Navbar from '../../components/layouts/navbar';
import PageHeader from '../../components/layouts/page-header';
import Contact from './components/contact';
import Footer from '../../components/layouts/footer';

const ContactPage = () => {
    return (<div>
        <Navbar />
        <PageHeader headertitle="Book Now"  />
        <Contact />
        <Footer />
    </div>)
}

export default ContactPage

