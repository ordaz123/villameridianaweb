import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import roomData from "../../AccomodationDetails/roomData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUmbrellaBeach} from "@fortawesome/free-solid-svg-icons";


class Offer extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="offer-area pd-top-70">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-8">
			        <div className="section-title text-center">
			          <h2 className="title">Our Apartments</h2>
			          <p>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
			        </div>
			      </div>
			    </div>
			  </div>
			  <div className="destinations-list-slider-bg">
			    <div className="container">
			      <div className="row">
			        <div className="col-xl-9 col-lg-10 offset-xl-1 order-lg-12">
			          <div className="destinations-list-slider">


						  {roomData.map(item => {
						  	return(
								<div className="d-list-slider-item">
									<div className="single-destinations-list text-center">
										<div className="thumb">
											{/*<span className="d-list-tag">Special Offer</span>*/}
											<img src={publicUrl+"assets/img/destination-list/1.png"} alt="list" />
											<div className="d-list-btn-wrap">
												<div className="d-list-btn viaje-go-top">
													<Link className="btn btn-yellow" to="/contact">Book Now <i className="fa fa-paper-plane" /></Link>
												</div>
											</div>
										</div>
										<div className="details">
											<h4 className="title">{item.title}</h4>
											<p className="content">Atmosphere of the sunny country</p>
											<ul className="tp-list-meta border-bt-dot text-center">
												<li><i className="fa fa-users" /> {item.persons} persons</li>
												<li><i className="fa fa-home" />{item.space} m&sup2;</li>
											</ul>
											<div className="tp-price-meta tp-price-meta-cl">
												<p>Price</p>
												<h2>{item.price} <small>$</small></h2>
											</div>
										</div>
									</div>
								</div>
							)
						  })}


			          </div>
			        </div>
			        <div className="col-lg-2 align-self-center order-lg-11">
			          <div className="container">
			            <div className="destinations-slider-controls">
			              <div className="slider-nav tp-control-nav" />
			              {/*slider-nav*/}
			              <div className="tp-slider-extra slider-extra">
			                <div className="text">
			                  <span className="first">01 </span>
			                  <span className="last" />
			                </div>
			                {/*text*/}
			                <div className="d-list-progress" role="progressbar" aria-valuemin={0} aria-valuemax={100}>
			                  <span className="slider__label sr-only" />
			                </div>
			              </div>
			              {/*slider-extra*/}
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default Offer