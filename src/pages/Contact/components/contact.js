import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import bookingImg from "../../../assets/img/all/booking.jpg"
import roomData from '../../AccomodationDetails/roomData';
import { withNamespaces } from 'react-i18next';
import { Modal, Button } from 'react-bootstrap';



const Contact = ({ t }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectValue, setSelectValue] = useState("")
    let apartment = selectValue;

    function handleClose() {
        setShowModal(false);
    }
    const publicUrl = process.env.PUBLIC_URL + '/'

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pyjuib9', 'template_a0egkbh', form.current, 'YELkzqpcNY6CnoyV_')
            .then((result) => {

            }, (error) => {
                alert("Something went wrong send us an email directly!");
            });

        e.target.reset();
        setShowModal(true);
    }

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

        <div className="contact-area pd-top-108">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-lg-center text-left">
                            <h2 className="title">{t('bookYourStay')}</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 offset-xl-1 col-lg-6">
                        <div className="thumb">
                            <img src={bookingImg} alt="img" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <form ref={form} className="tp-form-wrap" onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">{t('formName')}</span>
                                        <input type="text" name="name" required />
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">{t('formPhone')}</span>
                                        <input type="text" name="phone" required />
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">{t('formStart')}</span>
                                        <input type="date" name="arrivalDate" required />
                                    </label>
                                </div>
                                <div className="col-md-6">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">{t('formEnd')}</span>
                                        <input type="date" name="departureDate" required />
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">{t('formApartment')}</span>
                                        <select required name="apartment" className="custom-select-meridiana" defaultValue="" onChange={(e) => {
                                            setSelectValue(e.target.value)
                                           console.log(apartment) 
                                        }}>
                                            <option selected>Select An Apartment</option>
                                            {roomData.map((room, key) => {
                                                console.log(selectValue)
                                                return (
                                                    
                                                    <option value={room.title}>{room.title}</option>
                                                )
                                            })}
                                        </select>
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">Email</span>
                                        <input required type="text" name="email" />
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label className="single-input-wrap style-two">
                                        <span className="single-input-title">{t('formMsg')}</span>
                                        <textarea defaultValue={""} name="message" />
                                    </label>
                                </div>
                                <div className="col-12">
                                    <input type="submit" className="btn btn-yellow" value={t('formBtn')} />
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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11674.335960197828!2d17.1962633!3d42.9870362!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8091790a9eede7fc!2sVilla%20Meridiana!5e0!3m2!1sen!2shr!4v1647943881258!5m2!1sen!2shr" />
                    </div>
                    <div className="col-xl-3 col-lg-4 order-lg-1">
                        <div className="contact-info bg-gray">
                            <p>
                                <i className="fa fa-map-marker" />
                                <span>Put Podvlaštice 43, 20250, Orebić</span>
                            </p>
                            {/*                             <p>
                                <i className="fa fa-clock-o"/>
                                <span>Office Hour 9:00 to 7:00 Sunday 10:00 to 5:00</span>
                            </p> */}
                            {/* <p>
                                <i className="fa fa-envelope" />
                                travelpoint@gmail.com
                            </p> */}
                            {/* <p>
                                <i className="fa fa-phone" />
                                <span>
                                    <span>+385 21 542 233</span>
                                </span>
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}

export default withNamespaces()(Contact)