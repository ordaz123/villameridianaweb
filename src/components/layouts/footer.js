import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import {withNamespaces} from "react-i18next";
//import { useEffect } from 'react';

function Footer({t}){

/* 	constructor(props) {
		super(props);
	} */
/*     componentDidMount() {

    } */

	useEffect(()=>{
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
	})


        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
  				<footer className="footer-area" >
				  <div className="container">
				    <div className="row">
				      <div className="col-lg-4 col-md-6">
				        <div className="footer-widget widget">
{/* 				          <div className="about_us_widget">
				            {/* <Link to="/" className="footer-logo"> 
				              <img src={publicUrl+"assets/img/logo.png"} alt="footer logo" />
				            </Link> */}
{/* 				            <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
 				            <ul className="social-icon">
				              <li>
				                <a className="facebook" href="https://www.facebook.com/codingeek.net/" target="_blank"><i className="fa fa-facebook  " /></a>
				              </li>
				              <li>
				                <a className="twitter" href="https://twitter.com/codingeeknet" target="_blank"><i className="fa fa-twitter  " /></a>
				              </li>
				              <li>
				                <a className="pinterest" href="https://www.instagram.com/codingeeknet/" target="_blank"><i className="fa fa-instagram" /></a>
				              </li>
				            </ul>
				          </div> */}
				        </div>
				      </div>
				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget ">
				          <div className="widget-contact">
				            <h4 className="widget-title">{t('contactUs')}</h4>
				            <p>
				              <i className="fa fa-map-marker" /> 
				              <span>Put Podvlaštice 43, 20250, Orebić</span>
				            </p>
{/* 				            <p className="location"> 
				              <i className="fa fa-envelope-o" />
				              <span>travelpoint@gmail.com</span>
				            </p> */}
				            <p className="telephone">
				              <i className="fa fa-phone base-color" /> 
				              <span>
				                +385 21 542 233
				              </span>
				            </p>
				          </div>
				        </div>
				      </div>
				      <div className="col-lg-4 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">{t('quickLink')}</h4>
				          <ul className="widget_nav_menu  viaje-go-top">
				            <li><Link to="/">{t('navHome')}</Link></li>
				            <li><Link to="/about">{t('navAbout')}</Link></li>
				            {/* <li><Link to="/destination-list">Destination</Link></li> */}
				            <li><Link to="/gallery-details">{t('navGallery')}</Link></li>
				            {/* <li><Link to="/blog">Blog</Link></li> */}
				            <li><Link to="/contact">{t('navBooking')}</Link></li>
				          </ul>
				        </div>
				      </div>
{/* 				      <div className="col-lg-3 col-md-6">
				        <div className="footer-widget widget">
				          <h4 className="widget-title">Instagram Gallery</h4>
				          <ul className="widget-instagram-feed">
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/1.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/2.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/3.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/4.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/5.png"} alt="img" /></a></li>
				            <li><a href="#"><img src={publicUrl+"assets/img/instagram/6.png"} alt="img" /></a></li>
				          </ul>
				        </div>
				      </div> */}
				    </div>
				  </div>
				  <div className="copyright-inner">
				    <div className="copyright-text">
				      © KorculaStay 2022 All rights reserved.
				    </div>
				  </div>
				</footer>


        )
}


export default withNamespaces()(Footer);