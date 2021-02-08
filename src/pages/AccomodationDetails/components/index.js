import React, {useEffect, useState} from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import roomData from "../roomData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSwimmer,
    faPaw,
    faUmbrellaBeach,
    faParking,
    faWind,
    faCoffee,
    faBath,
    faFire,
    faDrumstickBite,
    faCheck
} from '@fortawesome/free-solid-svg-icons'

const TourDetails = () => {

    const [url, setUrl] = useState(0);
    useEffect(() => {
        setUrl(parseInt(window.location.href.split("/").pop()))
    }, [window.location.href])

    let publicUrl = process.env.PUBLIC_URL + '/'

    const images = [
        {
            original: `${publicUrl}${roomData[url].photos[0]}`,
            thumbnail: `${publicUrl}${roomData[url].photos[0]}`,
        },
        {
            original: `${publicUrl}${roomData[url].photos[1]}`,
            thumbnail: `${publicUrl}${roomData[url].photos[1]}`,
        },
        {
            original: `${publicUrl}${roomData[url].photos[1]}`,
            thumbnail: `${publicUrl}${roomData[url].photos[1]}`,
        },
        {
            original: `${publicUrl}${roomData[url].photos[1]}`,
            thumbnail: `${publicUrl}${roomData[url].photos[1]}`,
        },
        {
            original: `${publicUrl}${roomData[url].photos[1]}`,
            thumbnail: `${publicUrl}${roomData[url].photos[1]}`,
        },
        {
            original: `${publicUrl}${roomData[url].photos[1]}`,
            thumbnail: `${publicUrl}${roomData[url].photos[1]}`,
        },
    ];

    return <div>
        <div className="breadcrumb-area jarallax" style={{backgroundImage: `url(${publicUrl}assets/img/room-banner/banner-${url}.jpg)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner">
                            <h1 className="page-title">{ roomData[url].title}</h1>
                            {/*<ul className="page-list">*/}
                            {/*    <li><Link to="/">Home</Link></li>*/}
                            {/*    <li></li>*/}
                            {/*</ul>*/}
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
                            {/*<div className="col-xl-3 col-lg-4">*/}
                                {/*<div className="details">*/}
                                {/*    <p className="location mb-0"><i className="fa fa-map-marker"/>Canada</p>*/}
                                {/*    <h4 className="title">Bali Province</h4>*/}
                                {/*    <p className="content">3 days 2 person</p>*/}
                                {/*    <div className="tp-review-meta">*/}
                                {/*        <i className="ic-yellow fa fa-star"/>*/}
                                {/*        <i className="ic-yellow fa fa-star"/>*/}
                                {/*        <i className="ic-yellow fa fa-star"/>*/}
                                {/*        <i className="ic-yellow fa fa-star"/>*/}
                                {/*        <i className="fa fa-star"/>*/}
                                {/*        <span>4.0</span>*/}
                                {/*    </div>*/}
                                {/*    <div className="all-tags">*/}
                                {/*        <a href="#">Adventures</a>*/}
                                {/*        <a href="#">Local special ties</a>*/}
                                {/*        <a href="#">Natural</a>*/}
                                {/*        <a href="#">Travel</a>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            <div className="col-xl-12 col-lg-12">
                                <div className="book-list-warp">
                                    <p className="book-list-content">Book your stay at Villa Meridiana before is too late!</p>
                                    <div className="tp-price-meta">
                                        <p>Price<small> / night</small></p>
                                        <h2>{roomData[url].price}<small>$</small></h2>
                                    </div>
                                </div>
                                <ul className="tp-list-meta border-tp-solid">
                                    <li className="ml-0"><i className="fa fa-users"/>{roomData[url].persons} Person</li>

                                    <li><i className="fa fa-home"/>{roomData[url].space} m&sup2;</li>
                                    <li><FontAwesomeIcon icon={faUmbrellaBeach} /> 750m</li>
                                    <li><FontAwesomeIcon icon={faPaw} /> Pet Friendly</li>
                                    <li><FontAwesomeIcon icon={faSwimmer} /> Swimming Pool</li>
                                </ul>
                                <p className="book-list-content border-tp-solid pt-3 mt-4 text-light">Sleeping arrangements</p>
                                <div className="text-white px-3 py-3 d-flex ">
                                    <div className="sleeping-arrangement-box mx-2" >
                                        <p className="text-orange">Bedroom 1</p>
                                        <img className="invert" src={publicUrl + "assets/icon/bed.png"} alt="icons"/>
                                        <p className="text-white">Double bed</p>
                                    </div>
                                    <div  className="sleeping-arrangement-box mx-2">
                                        <p className="text-orange">Living room </p>
                                        <img className="invert" src={publicUrl + "assets/icon/sofa.png"} alt="icons"/>
                                        <p className="text-white">Sofa bed</p>
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
                            <h4 className="single-page-small-title">Desrciption</h4>
                            <p>{roomData[url].desc}</p>

                            <div className="gallery-area mt-5">
                                <h4 className="single-page-small-title">Photos</h4>
                                <ImageGallery showPlayButton={false} items={images}/>
                            </div>
                            {/* Gallery area end */}
                            <div className="package-included-area">
                                <h4 className="single-page-small-title">Best Features</h4>
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="single-package-included">
                                            <img src={publicUrl + "assets/img/icons/15.png"} alt="icons"/>
                                            <h6>Food</h6>
                                            <p>3 breakfasts, 3 dinners</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="single-package-included">
                                            <img src={publicUrl + "assets/img/icons/16.png"} alt="icons"/>
                                            <h6>Accommodations</h6>
                                            <p>3 nights in a hotel</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="single-package-included">
                                            <img src={publicUrl + "assets/img/icons/17.png"} alt="icons"/>
                                            <h6>Transportation</h6>
                                            <p>2 boat rides, 1 car ride</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="single-package-included">
                                            <img src={publicUrl + "assets/img/icons/18.png"} alt="icons"/>
                                            <h6>Drinks</h6>
                                            <p>Water, tea, coffee, beer</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="single-package-included">
                                            <img src={publicUrl + "assets/img/icons/19.png"} alt="icons"/>
                                            <h6>Tickets</h6>
                                            <p>Entrance fee</p>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-sm-6">
                                        <div className="single-package-included">
                                            <img src={publicUrl + "assets/img/icons/20.png"} alt="icons"/>
                                            <h6>Equipment</h6>
                                            <p>Outdoor gear, safety</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*<div className="package-included-location">*/}
                            {/*    <h4 className="single-page-small-title">Your Itinerary</h4>*/}
                            {/*    <div className="row">*/}
                            {/*        <div className="col-lg-4 col-md-4">*/}
                            {/*            <div className="single-blog">*/}
                            {/*                <div className="p-list">*/}
                            {/*                    <div className="list">1</div>*/}
                            {/*                    <p>Day 1</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="thumb">*/}
                            {/*                    <img src={publicUrl + "assets/img/blog/8.png"} alt="blog"/>*/}
                            {/*                </div>*/}
                            {/*                <div className="single-blog-details">*/}
                            {/*                    <h4 className="title">Welcome to St. John's</h4>*/}
                            {/*                    <p className="content">After a welcome drink, we'll stroll into town and*/}
                            {/*                        get*/}
                            {/*                        to know each other over a hyper-local “nose-to-tail” dinner. Show*/}
                            {/*                        more</p>*/}
                            {/*                    <a className="btn-read-more" href="#"><span>Show More<i*/}
                            {/*                        className="la la-arrow-right"/></span></a>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-lg-4 col-md-4">*/}
                            {/*            <div className="single-blog">*/}
                            {/*                <div className="p-list">*/}
                            {/*                    <div className="list">2</div>*/}
                            {/*                    <p>Day 2</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="thumb">*/}
                            {/*                    <img src={publicUrl + "assets/img/blog/1.png"} alt="blog"/>*/}
                            {/*                </div>*/}
                            {/*                <div className="single-blog-details">*/}
                            {/*                    <h4 className="title">Relaxation &amp; Exploration</h4>*/}
                            {/*                    <p className="content">After a welcome drink, we'll stroll into town and*/}
                            {/*                        get*/}
                            {/*                        to know each other over a hyper-local “nose-to-tail” dinner. Show*/}
                            {/*                        more</p>*/}
                            {/*                    <a className="btn-read-more" href="#"><span>Show More<i*/}
                            {/*                        className="la la-arrow-right"/></span></a>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*        <div className="col-lg-4 col-md-4">*/}
                            {/*            <div className="single-blog single-blog-after-none">*/}
                            {/*                <div className="p-list">*/}
                            {/*                    <div className="list">3</div>*/}
                            {/*                    <p>Day 3</p>*/}
                            {/*                </div>*/}
                            {/*                <div className="thumb">*/}
                            {/*                    <img src={publicUrl + "assets/img/blog/9.png"} alt="blog"/>*/}
                            {/*                </div>*/}
                            {/*                <div className="single-blog-details">*/}
                            {/*                    <h4 className="title">Farewell &amp; Departure</h4>*/}
                            {/*                    <p className="content">After a welcome drink, we'll stroll into town and*/}
                            {/*                        get*/}
                            {/*                        to know each other over a hyper-local “nose-to-tail” dinner. Show*/}
                            {/*                        more</p>*/}
                            {/*                    <a className="btn-read-more" href="#"><span>Show More<i*/}
                            {/*                        className="la la-arrow-right"/></span></a>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="host-area mt-5">
                                <div className="single-host-wrap  pt-3" >
                                    <h4 className="text-center">Amenities</h4>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <FontAwesomeIcon icon={faSwimmer} /> Swimming Pool
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <FontAwesomeIcon icon={faParking} /> Free Parking
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <FontAwesomeIcon icon={faPaw} /> Pet Friendly
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <FontAwesomeIcon icon={faWind} /> Air Conditioning
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <FontAwesomeIcon icon={faCoffee} /> Tea/Coffee Maker
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <FontAwesomeIcon icon={faBath} /> Bathroom
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <FontAwesomeIcon icon={faCheck} /> Kitchen
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <FontAwesomeIcon icon={faFire} /> Heating
                                            </div>
                                            <div className="col-sm-12 col-md-6 col-lg-4">
                                                <FontAwesomeIcon icon={faDrumstickBite} /> BBQ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="service-location-map">
                                <h4 className="single-page-small-title">Service Location</h4>
                                <div className="service-location-map">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d649788.5753409272!2d-0.5724199684037448!3d52.92186340524542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d94c3b82ab%3A0x62077a554c8e9a8e!2sPetty%20France%2C%20Westminster%2C%20London%2C%20UK!5e0!3m2!1sen!2sbd!4v1572346566908!5m2!1sen!2sbd"/>
                                </div>
                            </div>
                            <div className="comments-area tour-details-review-area">
                                <h4 className="comments-title">Reviews</h4>
                                <ul className="comment-list mb-0">
                                    <li>
                                        <div className="single-comment-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/client/2.png" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Tyler Bailey</h4>
                                                <span className="date">13 August 2019</span>
                                                <div className="tp-review-meta">
                                                    <i className="ic-yellow fa fa-star"/>
                                                    <i className="ic-yellow fa fa-star"/>
                                                    <i className="ic-yellow fa fa-star"/>
                                                    <i className="ic-yellow fa fa-star"/>
                                                    <i className="ic-yellow fa fa-star"/>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                    nonumy
                                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                                    diam
                                                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                                    Stet
                                                    clita kasd gubergren, no sea takimata</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-comment-wrap">
                                            <div className="thumb">
                                                <img src="assets/img/client/3.png" alt="img"/>
                                            </div>
                                            <div className="content">
                                                <h4 className="title">Eliza Jordan</h4>
                                                <span className="date">17 SEP 2019</span>
                                                <div className="tp-review-meta">
                                                    <i className="ic-yellow fa fa-star"/>
                                                    <i className="ic-yellow fa fa-star"/>
                                                    <i className="ic-yellow fa fa-star"/>
                                                    <i className="ic-yellow fa fa-star"/>
                                                    <i className="ic-yellow fa fa-star"/>
                                                </div>
                                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                                    nonumy
                                                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                                                    diam
                                                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                                    Stet
                                                    clita kasd gubergren, no sea takimata</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="btn-wrapper text-right mt-3">
                                    <a className="btn-read-more" href="#"><span>More Review<i
                                        className="la la-arrow-right"/></span></a>
                                </div>
                            </div>
                            {/*<div className="location-review-area">*/}
                            {/*    <form className="tp-form-wrap bg-gray tp-form-wrap-one">*/}
                            {/*        <div className="row">*/}
                            {/*            <div className="col-lg-6"><h4 className="single-page-small-title">Write A*/}
                            {/*                Review</h4></div>*/}
                            {/*            <div className="col-lg-6">*/}
                            {/*                <div className="tp-review-meta text-lg-right">*/}
                            {/*                    <span className="mr-3 ml-0">Assigned Rating</span>*/}
                            {/*                    <i className="fa fa-star"/>*/}
                            {/*                    <i className="fa fa-star"/>*/}
                            {/*                    <i className="fa fa-star"/>*/}
                            {/*                    <i className="fa fa-star"/>*/}
                            {/*                    <i className="fa fa-star"/>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-lg-6">*/}
                            {/*                <label className="single-input-wrap">*/}
                            {/*                    <span className="single-input-title">Name</span>*/}
                            {/*                    <input type="text"/>*/}
                            {/*                </label>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-lg-6">*/}
                            {/*                <label className="single-input-wrap">*/}
                            {/*                    <span className="single-input-title">Email</span>*/}
                            {/*                    <input type="text"/>*/}
                            {/*                </label>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-lg-12">*/}
                            {/*                <label className="single-input-wrap">*/}
                            {/*                    <span className="single-input-title">Comments</span>*/}
                            {/*                    <textarea defaultValue={""}/>*/}
                            {/*                </label>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-12">*/}
                            {/*                <a className="btn btn-yellow" href="#">Send</a>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="sidebar-area sidebar-area-4">
                            <div className="widget tour-list-widget">
                                <div className="widget-tour-list-meta">
                                    <div className="single-widget-search-input-title font-weight-bold text-center"> {roomData[url].title}
                                    </div>
                                    <div className="single-widget-search-input-title mt-3"><i className="fa fa-user"/> Name
                                    </div>
                                    <div className="single-widget-search-input">
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div className="single-widget-search-input-title"><i
                                        className="fa fa-envelope"/> Email
                                    </div>
                                    <div className="single-widget-search-input">
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                    <div className="single-widget-search-input-title"><i className="fa fa-phone"/> Phone
                                    </div>
                                    <div className="single-widget-search-input">
                                        <input type="text" placeholder="Phone"/>
                                    </div>
                                    <div className="single-widget-search-input-title"><i
                                        className="fa fa-calendar-minus-o"/> Date
                                    </div>
                                    <div className="single-widget-search-input">
                                        <input type="text" className="departing-date custom-select"
                                               placeholder="Departing"/>
                                    </div>
                                    <div className="single-widget-search-input-title"><i
                                        className="fa fa-calendar-minus-o"/> Date
                                    </div>
                                    <div className="single-widget-search-input">
                                        <input type="text" className="returning-date custom-select"
                                               placeholder="Returning"/>
                                    </div>
                                    <div className="single-widget-search-input-title"><i
                                        className="fa fa-keyboard-o"/> Message
                                    </div>
                                    <div className="single-widget-search-input">
                                        <textarea placeholder="Type" defaultValue={""}/>
                                    </div>
                                    <div className="text-lg-center text-left">
                                        <a className="btn btn-yellow" href="#">Book Now <i
                                            className="fa fa-paper-plane"/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="widget_ads">
                                <a href="#"><img className="w-100" src={publicUrl + "assets/img/others/01.png"}
                                                 alt="img"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default TourDetails