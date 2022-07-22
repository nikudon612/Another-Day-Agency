import React from 'react'
import '../Styles/Contact.scss'

const CONTACT_BLOCK = 'contact';


const Contact = () => {
  return (
    <div className={`${CONTACT_BLOCK}`}>
        <div className={`${CONTACT_BLOCK}__container`}>
            <div className={`${CONTACT_BLOCK}__title`}>Let's Get In Touch</div>
            <div>contact info</div>
        </div>
    </div>
  )
}

export default Contact;