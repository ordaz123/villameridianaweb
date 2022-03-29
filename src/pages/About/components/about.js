import React, { Component } from 'react';
import galleryData from '../../Gallery/components/galleryData';
import img1 from "../../../assets/img/grounds/Meridiana-objekt_20.jpg"
import img2 from "../../../assets/img/grounds/Meridiana-objekt_25.jpg"
import { withNamespaces } from 'react-i18next';


function About({t}){


        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div className="about-section pd-top-80">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 align-self-center">
                    <div className="section-title mb-lg-0">
                      <h2 className="title">{t('aboutDiscoverPart1')} <br />{t('aboutDiscoverPart2')}</h2>
                      <p>{t('homeOfferParagraph')}</p>
                    </div>
                  </div>
                  <div className="col-lg-5 offset-lg-2">
                    <div className="thumb about-section-right-thumb">
                      <img src={img1} alt="img" />
                      <img className="about-absolute-thumb" src={img2} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

}

export default withNamespaces()(About)