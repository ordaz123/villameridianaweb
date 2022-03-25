import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import videoImg from "../../../assets/img/all/video.jpg"
import { withNamespaces } from 'react-i18next';

function Video({t}){


        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="video-area tp-video-area pd-top-110 pd-bottom-100" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/7.png)'}}>
			  <div className="container viaje-go-top">
			    <div className="row">
			      <div className="col-xl-5 col-lg-6 align-self-center wow animated fadeInRight" data-wow-duration="1s" data-wow-delay="0.3s">
			        <div className="section-title mb-lg-0 mb-4 text-center text-lg-left">
			          <h2 className="title">{t('homeOfferPart1')} <br /> {t('homeOfferPart2')}</h2>
			          <p>
					  {t('homeOfferParagraph')}
					  </p>
			          <Link className="btn btn-yellow" to="/about"><span>{t('homeOfferBtn')}<i className="la la-arrow-right" /></span></Link>
			        </div>
			      </div>
			      <div className="col-xl-5 col-lg-6 offset-xl-1 wow animated fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s">
			        <div className="video-popup-wrap">
			          <div className="thumb">
			            <img src={videoImg} alt="video" />
			          </div>
			          <div className="video-popup-btn">
{/* 					  <iframe className="video-play-btn mfp-iframe" width="560" height="315" src="https://www.youtube.com/embed/078atBcdjE4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 */}
	            
 <a href="https://www.youtube.com/watch?v=078atBcdjE4" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


}

export default withNamespaces()(Video)