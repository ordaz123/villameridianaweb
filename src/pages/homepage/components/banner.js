import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

function Banner(){


        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="banner-area viaje-go-top">
			  <div className="banner-slider">
			    <div className="banner-slider-item banner-bg-1">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
{/* 			                  <p className="banner-cat s-animate-1">Hot Places</p>
 */}			                  <h2 className="banner-title s-animate-2">Villa <br /> Meridiana</h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=078atBcdjE4" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			              <div className="col-lg-12 banner-tour-package">
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-2">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
			                  {/* <p className="banner-cat s-animate-1">Hot Places</p> */}
							<h2 className="banner-title s-animate-2">Villa <br /> Meridiana</h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=078atBcdjE4" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			    <div className="banner-slider-item banner-bg-3">
			      <div className="container">
			        <div className="row">
			          <div className="col-xl-8 col-lg-9 offset-xl-2 offset-lg-1">
			            <div className="row">
			              <div className="col-lg-9 col-sm-8">
			                <div className="banner-inner">
{/* 			                  <p className="banner-cat s-animate-1">Hot Places</p>
 */}			                  <h2 className="banner-title s-animate-2">Villa <br /> Meridiana</h2>
			                </div>
			              </div>
			              <div className="col-lg-3 col-sm-4">
			                <div className="video-popup-btn s-animate-video">
			                  <a href="https://www.youtube.com/watch?v=078atBcdjE4" className="video-play-btn mfp-iframe"><i className="fa fa-play" /></a>
			                </div>
			              </div>

			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="container">
			    <div className="banner-slider-controls">
			      <div className="slider-nav tp-control-nav" />
			      {/*slider-nav*/}
			      <div className="tp-slider-extra slider-extra">
			        <div className="text">
			          <span className="first">01</span>
			          <span className="devider">/</span>
			          <span className="last" />
			        </div>
			      </div>
			      {/*slider-extra*/}
			    </div>
			  </div>
			</div>
}

export default Banner