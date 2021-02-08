import React, {Component} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {


    const publicUrl = process.env.PUBLIC_URL + '/'

    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_co1q5jm', e.target, 'user_XwyCiIftu69iQYroUUmPm')
            .then((result) => {
                alert("Your email has been sent!");
            }, (error) => {
                alert("Something went wrong send us email directly!");
            });
    }

    return <div>
        <div className="contact-area pd-top-108">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-lg-center text-left">
                            <h2 className="title">Book your stay now!</h2>
                            <p>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in,
                                tincidunt nec dui. Morbi mauris lacus, consequat eget justo in</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="thumb">
                            <img src={publicUrl + "assets/img/others/11.png"} alt="img"/>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <form className="tp-form-wrap" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Name</span>
                                        <input type="text" name="name"/>
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Phone number</span>
                                        <input type="text" name="phone"/>
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Check in</span>
                                        <input type="date" name="checkIn"/>
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Check out</span>
                                        <input type="date" name="checkOut"/>
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Select Apartment</span>
                                        <select name="apartment" className="custom-select-meridiana">
                                            <option value="op1">OP 1</option>
                                            <option value="op2">OP 2</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Email</span>
                                        <input type="text" name="email"/>
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Message</span>
                                        <textarea defaultValue={""} name="message"/>
                                    </label>
                                </div>
                                <div className="col-12">
                                    <input type="submit" className="btn btn-yellow" value="Send"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="contact-info-area pd-top-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-8 order-lg-12">
                        <iframe className="contact-map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55137.3051325513!2d-97.76825118838518!3d30.263256963734733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sbd!4v1572085289886!5m2!1sen!2sbd"/>
                    </div>
                    <div className="col-xl-3 col-lg-4 order-lg-1">
                        <div className="contact-info bg-gray">
                            <p>
                                <i className="fa fa-map-marker"/>
                                <span>Lavaca Street, Suite 2000 Austin, TX 24141</span>
                            </p>
                            <p>
                                <i className="fa fa-clock-o"/>
                                <span>Office Hour 9:00 to 7:00 Sunday 10:00 to 5:00</span>
                            </p>
                            <p>
                                <i className="fa fa-envelope"/>
                                <span>Email: <span>Travelpoint@gmail.com</span></span>
                            </p>
                            <p>
                                <i className="fa fa-phone"/>
                                <span>
                            sell phone: <span>(+88) 0172 570051</span> <br/>
                            telephone: <span>(+88) 07 528 7584</span>
                          </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default Contact