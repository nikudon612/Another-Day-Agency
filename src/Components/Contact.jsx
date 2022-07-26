import React from 'react'
import '../Styles/Contact.scss'

const CONTACT_BLOCK = 'contact';


const Contact = () => {
  return (
    <div className={`${CONTACT_BLOCK}`}>
        <div className={`${CONTACT_BLOCK}__container`}>
            <div className={`${CONTACT_BLOCK}__left`}>
                <div className={`${CONTACT_BLOCK}__title`}>Let's Get In Touch</div>
                <div className={`${CONTACT_BLOCK}__text`}>
                <span>Feel free to reach out for rates to include us on your projects.</span>
                <span>We require a deposit of 50% down on confirmed bookings of our services.</span>
                </div>
            </div>
            <div>contact info</div>
        </div>
    </div>
  )
}

export default Contact;