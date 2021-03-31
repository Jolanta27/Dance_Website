import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';
import MailchimpSubscribe from "react-mailchimp-subscribe";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                We pride ourselves in having the most highly trained and professional set of instructors always ready.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email Address" className="footer-input"/>
                        <Button buttonStyle="btn-outline">Subscribe
                        <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL} />
                        </Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to="/">+4740101346</Link>
                        <Link to="/">info@danseeskole.no</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Locations</h2>
                        <Link to="/">Møllergata 6, 0179 Oslo</Link>
                        <Link to="/">Tollbugata 13, 0152 Oslo
                        </Link>
                    </div>
                </div>
            </div>
            <div className="copy-rights">
                    <p>DanseSkole<i className="far fa-copyright"></i>2021</p>
            </div>
       </div>
    );
}

export default Footer;
