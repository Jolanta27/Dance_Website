import React from 'react';
import './Footer2.css';
import { Link } from 'react-router-dom';

function Footer2 () {
    return (
        <div className="footer-container">
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
export default Footer2;