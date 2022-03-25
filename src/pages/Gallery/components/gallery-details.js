import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import galleryData from "./galleryData"
import { withNamespaces } from 'react-i18next';

function GalleryDetails({t}){

    let publicUrl = process.env.PUBLIC_URL + '/'
    let imagealt = 'image'

    return <div className="gallery-area pd-top-108">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section-title text-center">
              <h2 className="title">{t('exploreTitle')}</h2>
              <p>{t('exploreAbout')}</p>
            </div>
          </div>
        </div>
        {/* Gallery area start */}
        <div className="gallery-area">
          <div className="container">
            <div className="gallery-filter-area row">
              <div className="gallery-sizer col-1" />
              {/* gallery-item */}
              {galleryData.map((item) => {
                return (
                  <div className="tp-gallery-item col-md-4 col-12">
                    <div className="tp-gallery-item-img">
                      <a className="popup-thumb" href={item} data-effect="mfp-zoom-in">
                        <img src={item} alt="image" />
                      </a>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
        {/* Gallery area end */}
      </div>
    </div>

}

export default withNamespaces()(GalleryDetails)