import React from 'react';
import '../../App.css';
import Footer2 from '../Footer2';
import '../Contact.css';
import Newsletter from '../Newsletter';


function Contact() {
  return (
    <>
    <div className="main_">
    <h1>Feel free to drop by any of our studios to see what we are all about</h1>
    <div className="main1">
      <div>
      <p><i class="fas fa-map-marker"></i>Møllergata 6, 0179 Oslo</p>
      <p><i class="fas fa-map-marker"></i>Tollbugata 13, 0152 Oslo</p>
      <p><i class="fas fa-phone-alt"></i>+40101346</p>
      <p><i class="fas fa-at"></i>info@danseskole.no</p>
      </div>
      <Newsletter />
      </div>
     </div>
    <Footer2 />
    </>
  );
}
export default Contact;
