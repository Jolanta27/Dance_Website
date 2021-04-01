import React from 'react';
import './Newsletter.css';
import MailchimpSubscribe from "react-mailchimp-subscribe";
class Newsletter extends React.Component {
    
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("Thank you for subscribing!");
    }
    render() {
        return (
            <form className="newsletter_form" onSubmit={this.mySubmitHandler}>
                <h1 style={{fontSize: 40}}>Newsletter</h1>
                <p className="newsletter_info">Stay up to date with dance news in Oslo with us</p>
                <div className="newsletter_subscribe">
                <MailchimpSubscribe value="subscribe" url={process.env.REACT_APP_MAILCHIMP_URL} />
                </div>
                <p className="newsletter_info">Your email is safe with us.</p> 
                <p className="newsletter_info"> We don't spam.</p>
            </form>
        )
    }
};
export default Newsletter;