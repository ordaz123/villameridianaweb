import React, { useEffect, useState, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import roomData from "../roomData";
import { withNamespaces } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Modal,Button} from 'react-bootstrap';

import {
    faSwimmer,
    faPaw,
    faUmbrellaBeach,
    faParking,
    faWind,
    faCoffee,
    faBath,
    faWifi,
    faDrumstickBite,
    faCheck,
    faBed,
    faCouch
} from '@fortawesome/free-solid-svg-icons'

const TourDetails = ({ t }) => {

    const [showModal,setShowModal] = useState(false);

    function handleClose() {
		setShowModal(false);
	}

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pyjuib9', 'template_yahls1p', form.current, 'YELkzqpcNY6CnoyV_')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
        setShowModal(true);
    };


    const [url, setUrl] = useState(0);
    useEffect(() => {
        setUrl(parseInt(window.location.href.split("/").pop()))
    }, [window.location.href])

    let publicUrl = process.env.PUBLIC_URL + '/'

    function displayImages() {
        const images = [];
        roomData[url].photos.forEach((item) => {
            images.push(
                {
                    original: item,
                    thumbnail: item
                }
            )
        })
        //console.log(images)
        return images;
    }

    const apartmentName = roomData[url].title;
    console.log(apartmentName)


    return <div>

        <Modal show={showModal} onHide={handleClose} >
            <Modal.Header closeButton>
                <Modal.Title>{t("modalHead")}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{t("modalBody")}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose} variant="secondary">{t("modalClose")}</Button>
            </Modal.Footer>
        </Modal>

        <div className="breadcrumb-area jarallax" style={{ backgroundImage: `url(${publicUrl}assets/img/room-banner/banner-${url}.jpg)` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner">
                            <h1 className="page-title">{roomData[url].title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="tour-details-area mg-top--70">
            <div className="tour-details-gallery">
                <div className="container-bg bg-dark-blue">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <div className="book-list-warp">
                                    <p className="book-list-content">{t('apartmentHeader')}</p>
                                    <div className="tp-price-meta">
                                        <p>{t('price')}<small> / {t('night')}</small></p>
                                        <h2>{roomData[url].price}<small>€</small></h2>
                                    </div>
                                </div>
                                <ul className="tp-list-meta border-tp-solid">
                                    <li className="ml-0"><i className="fa fa-users" />{roomData[url].persons} {t('persons')}</li>

                                    <li><i className="fa fa-home" />{roomData[url].space} m&sup2;</li>
                                    <li><FontAwesomeIcon icon={faUmbrellaBeach} /> 750m</li>
                                    <li><FontAwesomeIcon icon={faPaw} />{t('petFriendly')}</li>
                                    <li><FontAwesomeIcon icon={faSwimmer} />{t('pool')}</li>
                                </ul>
                                <p className="book-list-content border-tp-solid pt-3 mt-4 text-light">{t('sleep')}</p>
                                <div className="text-white px-3 py-3 d-flex ">
                                    <div className="sleeping-arrangement-box mx-2" >
                                        <p className="text-orange">{t('bedroom')}</p>
                                        <FontAwesomeIcon icon={faBed} />
                                        <p className="text-white">t{('doubleBed')}</p>
                                    </div>
                                    <div className="sleeping-arrangement-box mx-2">
                                        <p className="text-orange">{t('livingRoom')}</p>
                                        <FontAwesomeIcon icon={faCouch} />
                                        <p className="text-white">{t('sofaBed')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="tour-details-wrap">
                            {/* <h4 className="single-page-small-title">Desrciption</h4>
                            <p>{roomData[url].desc}</p>
 */}
                            <div className="gallery-area mt-5">
                                <h4 className="single-page-small-title">{t('photos')}</h4>
                                <ImageGallery showPlayButton={false} items={displayImages()} />
                            </div>
                            <div className="host-area mt-5">
                                <div className="single-host-wrap  pt-3" >
                                    <h4 className="text-center">{t('amenities')}</h4>
                                    <div className="container">
                                        <div className="row pt-5">
                                            <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
                                                <FontAwesomeIcon icon={faSwimmer} /> {t('pool')}
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
                                                <FontAwesomeIcon icon={faParking} /> {t('parking')}
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
                                                <FontAwesomeIcon icon={faPaw} /> {t('petFriendly')}
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
                                                <FontAwesomeIcon icon={faWind} /> {t('ac')}
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
                                                <FontAwesomeIcon icon={faCoffee} /> {t('coffeMaker')}
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
                                                <FontAwesomeIcon icon={faBath} /> {t('bathroom')}
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
                                                <FontAwesomeIcon icon={faCheck} /> {t('kitchen')}
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
                                                <FontAwesomeIcon icon={faWifi} /> Wi-Fi
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4 pb-2">
                                                <FontAwesomeIcon icon={faDrumstickBite} /> {t('bbq')}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-location-map">
                                <h4 className="single-page-small-title">{t('location')}</h4>
                                <div className="service-location-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11674.335960197828!2d17.1962633!3d42.9870362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8091790a9eede7fc!2sVilla%20Meridiana!5e0!3m2!1sen!2shr!4v1647943881258!5m2!1sen!2shr" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-area sidebar-area-4">
                            <div className="widget tour-list-widget">
                                <div className="widget-tour-list-meta">
                                    <form ref={form} onSubmit={sendEmail}>
                                        <div className="single-widget-search-input-title font-weight-bold text-center" > {roomData[url].title}
                                        </div>

                                                    
                                        <input name="test" value={apartmentName} hidden/>
                                        <div className="single-widget-search-input-title mt-3"><i className="fa fa-user" /> {t('formName')}
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input required type="text" name={"name"} placeholder={t('formName')} />
                                        </div>
                                        <div className="single-widget-search-input-title"><i
                                            className="fa fa-envelope" /> Email
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input required type="text" name="email" placeholder="Email" />
                                        </div>
                                        <div className="single-widget-search-input-title"><i className="fa fa-phone" /> {t('formPhone')}
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input required type="text" name="phone" placeholder={t('formPhone')} />
                                        </div>
                                        <div className="single-widget-search-input-title"><i
                                            className="fa fa-calendar-minus-o" /> {t('formStart')}
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input required name="arrivalDate" type="text" className="departing-date custom-select"
                                                placeholder={t('formStart')} />
                                        </div>
                                        <div className="single-widget-search-input-title"><i
                                            className="fa fa-calendar-minus-o" /> {t('formEnd')}
                                        </div>
                                        <div className="single-widget-search-input">
                                            <input required name="departureDate" type="text" className="returning-date custom-select"
                                                placeholder={t('formEnd')} />
                                        </div>
                                        <div className="single-widget-search-input-title"><i
                                            className="fa fa-keyboard-o" /> {t('formMsg')}
                                        </div>
                                        <div className="single-widget-search-input">
                                            <textarea name="message" placeholder={t('formMsg')} defaultValue={""} />
                                        </div>
                                        <div className="text-lg-center text-left">
                                            <input className="btn btn-yellow" type="submit" value={t('formBtn')} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/*                             <div className="widget_ads">
                                <a href="#"><img className="w-100" src={publicUrl + "assets/img/others/01.png"}
                                                 alt="img"/></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default withNamespaces()(TourDetails)