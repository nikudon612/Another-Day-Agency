import React from 'react'
import '../Styles/Contact.scss'

const CONTACT_BLOCK = 'contact';


const Contact = () => {
  return (
    <div className={`${CONTACT_BLOCK}`}>
        <div className={`${CONTACT_BLOCK}__container`}>
            <div className={`${CONTACT_BLOCK}__left`}>
                <div className={`${CONTACT_BLOCK}__title`}>Get In Touch</div>
                <div className={`${CONTACT_BLOCK}__text`}>
                <span>Feel free to reach out for rates. We would love to be included on your projects.</span>{""}
                <span className='text-highlight'>We require a deposit of 50% down on confirmed bookings of our services.</span>
                </div>
        </div>
        <div className='email'>
        <div>info@anotherday.com</div>

        </div>
        </div>
    </div>
  )
}

export default Contact;