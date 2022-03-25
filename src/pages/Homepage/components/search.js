import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import roomData from "../../AccomodationDetails/roomData";


function Search(){

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="search-area tp-main-search-area viaje-go-top">
		  <div className="container">
		    <div className="tp-main-search">
		      <div className="row">
		        <div className="col-lg-2 col-md-4">
		          <div className="tp-search-single-wrap">
		            <input className="w-100" type="text" placeholder="First Name" />
		            <i className="fa fa-dot-circle-o" />
		          </div>
		        </div>
		        <div className="col-lg-2 col-md-4">
		          <div className="tp-search-single-wrap">
		            <input className="w-100" type="text" placeholder="Last Name" />
		            <i className="fa fa-dot-circle-o" />
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-4 order-lg-9">
		          <div className="tp-search-single-wrap float-left w-100">
		            <select className="select w-100" placeholder='Select Apartment'>
{/* 		              <option value={1}>Apartment 1</option>
		              <option value={2}>Apartment 2</option>
		              <option value={3}>Apartment 3</option>
		              <option value={4}>Apartment 4</option>
		              <option value={5}>Apartment 5</option> */}
					  {roomData.map((room,key)=>{
						  return(
						  <option value={key}>{room.title}</option>
						  )
					  })}
		            </select>
		            <i className="fa fa-plus-circle" />
		          </div>
		        </div>
		        <div className="col-lg-3 col-md-8 order-lg-6">
		          <div className="tp-search-single-wrap float-left">
		            <div className="tp-search-date tp-departing-date-wrap w-50 float-left">
		              <input type="text" className="departing-date" placeholder="Departing" />
		              <i className="fa fa-calendar-minus-o" />
		            </div>
		            <div className="tp-search-date tp-returning-date-wrap w-50 float-left">
		              <input type="text" className="returning-date" placeholder="Returning" />
		              <img src={publicUrl+"assets/img/icons/2.png"} alt="icons" />
		            </div>
		          </div>
		        </div>
		        <div className="col-lg-2 col-md-4 order-12">
		          <Link className="btn btn-yellow" to="/booking"><i className="ti-location-pin" /> Search</Link>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

}

export default Search