import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from "react-i18next";
import bannerimg from "../../assets/img/all/banner.jpg"


function PageHeader(props) {

	console.log(props.headertitle)
	let HeaderTitle = props.headertitle;
	let publicUrl = process.env.PUBLIC_URL + '/'
	let Subheader = props.subheader ? props.subheader : HeaderTitle

	return (
		/*              <div className="breadcrumb-area jarallax" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/1.png)'}}>
		 */
		<div className="breadcrumb-area jarallax" style={{ backgroundImage: bannerimg }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="breadcrumb-inner">
							<h1 className="page-title">{HeaderTitle}</h1>
							<ul className="page-list">
								{/* <li><Link to="/">Home</Link></li> */}
								{/* <li>{Subheader}</li> */}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>


	)
}


export default withNamespaces()(PageHeader)