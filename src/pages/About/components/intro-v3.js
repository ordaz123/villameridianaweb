import React, { Component } from 'react';
import parse from 'html-react-parser';
import { withNamespaces } from 'react-i18next';

function Intro({t}){


        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area pd-top-108">
			  <div className="container">
			    <div className="section-title text-lg-center text-left">
			      <h2 className="title"><span>{t('aboutTitlePart1')}</span>{t('aboutTitlePart2')}</h2>
			    </div>
			    <div className="row">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-intro style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icons/9.png"} alt="img" />
			          </div>
			          <h4 className="intro-title">{t('freeWifiAndParking')}</h4>
			          <p>{t('freeWifiParagraph')}</p>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-intro style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icons/10.png"} alt="img" />
			          </div>
			          <h4 className="intro-title">{t('understand')}</h4>
			          <p>
					  {t('understandParagraph')}
					  </p>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-intro style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icons/11.png"} alt="img" />
			          </div>
			          <h4 className="intro-title">{t('petsWelcome')}</h4>
			          <p>{t('petsWelcomeParagraph')}</p>
			        </div>
			      </div>
{/* 			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro style-two">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icons/12.png"} alt="img" />
			          </div>
			          <h4 className="intro-title">Fast Booking</h4>
			          <p>Aenean sed nibh a magna posuere tempor. Nunc faucibus nunc aliquet. Donec congue, nunc vel tempor</p>
			        </div>
			      </div> */}
			    </div>
			  </div>
			</div>
}

export default withNamespaces()(Intro)