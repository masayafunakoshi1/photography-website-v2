import React from 'react'
import ContactForm from './contactComponents/ContactForm'
import Socials from './contactComponents/Socials'
import './styles/Contact.css'
import '../App.css'

const Contact = () => {

    return (

        <div className="contactPage">
            <div>
                <h1 className="contact-Title">Contact Us</h1>
                <h3 className="contact-Subtext">
                    For Bookings, Inquiries, Questions or Comments, please fill out the form below. 
                    <br/>Will get back to you as soon as we can!
                </h3>
            </div>

            <ContactForm />
            <Socials />
        </div>
    )
}

export default Contact
