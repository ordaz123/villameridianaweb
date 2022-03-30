import {Route, Switch} from "react-router-dom";
import HomeV1 from "./pages/homepage/home";
import AboutUs from "./pages/about/about";
import TourDetails from "./pages/accomodationDetails/tour-details";
import GalleryDetails from "./pages/gallery/gallery";
import Contact from "./pages/contact/contact";
import React from "react";

const App = () => {
    return(

            <div>
                <Switch>
                    <Route exact path="/" component={HomeV1} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/room" component={TourDetails} />
                    <Route path="/gallery-details" component={GalleryDetails} />
                    <Route path="/booking" component={Contact} />
                </Switch>
            </div>
    )
}

export default App;