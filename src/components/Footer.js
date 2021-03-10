import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

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
                        <Button buttonStyle="btn-outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to="/signup">How it works</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Terms of Services</Link>
                        <Link to="/">FAQ</Link>
                    </div>
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
                    <div className="footer-link-items">
                        <h2>Price</h2>
                        <Link to="/">Individuals</Link>
                        <Link to="/">Companies</Link>
                     </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            DanceSkole<i class="fas fa-venus-mars" />
                        </Link>
                    </div>
                    <small className="website-rights">DanseSkole<i class="far fa-copyright"></i> 2020 </small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/" target="_blank" arial-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/" target="_blank" arial-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link youtube" to="/" target="_blank" arial-label="Youtube"
                        >
                            <i className="fab fa-youtube"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;
