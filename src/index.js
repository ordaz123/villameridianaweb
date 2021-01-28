import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './pages/Homepage';
import AboutUs from './pages/About/about';
import TourDetails from './pages/AccomodationDetails/tour-details';
import GalleryDetails from './pages/Gallery';
import Contact from './pages/Contact';




class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
	                    <Route exact path="/" component={HomeV1} />
	                    <Route path="/about" component={AboutUs} />
	                    <Route path="/tour-details" component={TourDetails} />
	                    <Route path="/gallery-details" component={GalleryDetails} />
	                    <Route path="/contact" component={Contact} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('viaje'));
