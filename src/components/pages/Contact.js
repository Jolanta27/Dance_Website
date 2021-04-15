import React from 'react';
import '../../App.css';
import '../styles/Contact.css';
import Newsletter from '../Newsletter';


  function Contact() {
    return (
      <>
        <div className="main">
          <h1 className="welcome">Feel free to drop by any of our studios to see what we are all about</h1>
            <div className="main1">
              <div className="contact-form">
                <p><i className="fas fa-map-marker"></i>Møllergata 6, 0179 Oslo</p>
                <p><i className="fas fa-map-marker"></i>Tollbugata 13, 0152 Oslo</p>
                <p><i className="fas fa-phone-alt"></i>+40101346</p>
                <p><i className="fas fa-at"></i>info@danseskole.no</p>
              </div>
              <Newsletter />
            </div>
            <footer className="footer">
              <p className="copy-right__footer">DanseSkole<i className="far fa-copyright"></i>2021</p>
            </footer>
        </div> 
      </>
    );
  }
  export default Contact;
