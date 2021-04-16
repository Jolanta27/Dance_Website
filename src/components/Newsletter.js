import React from 'react';
import './styles/Newsletter.css';
import MailchimpSubscribe from "react-mailchimp-subscribe";
class Newsletter extends React.Component {
        constructor() {
            super();
            this.state = {
            email: ''
        };
    }

    mySubmitHandler = (event) => {
        event.preventDefault(); 
        event.target.reset();
    }
    render() {
        return (
            <form className="newsletter_form" onSubmit={this.mySubmitHandler.bind(this)}>
                <h1>Newsletter</h1>
                <p className="newsletter_info">Stay up to date with dance news in Oslo with us</p>
                <MailchimpSubscribe value="subscribe" url={process.env.REACT_APP_MAILCHIMP_URL}/>
                <p className="newsletter_info">Your email is safe with us.</p> 
                <p className="newsletter_info"> We don't spam.</p>
            </form>
        )
    }
};
export default Newsletter;