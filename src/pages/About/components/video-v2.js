import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import videoImg from "../../../assets/img/all/video.jpg"
import { withNamespaces } from 'react-i18next';

function Video({t}) {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="video-area tp-video-area pd-top-50 pd-bottom-100">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-10 text-center">
			        <div className="section-title text-center viaje-go-top">
			          <h2 className="title">{t('aboutDiscoverPart1')}<br />{t('aboutDiscoverPart2')}</h2>
			        </div>
			      </div>
			      <div className="col-xl-8 col-lg-9 text-center">
			        <div className="video-popup-wrap style-two">
			          <div className="thumb">
			            <img src={videoImg} alt="video" />
			          </div>
			          <div className="video-popup-btn">
			            <a href="https://www.youtube.com/watch?v=078atBcdjE4" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

}

export default withNamespaces()(Video)