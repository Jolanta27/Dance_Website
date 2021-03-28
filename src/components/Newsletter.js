import React from 'react';
import './Newsletter.css';
class Newsletter extends React.Component {
    constructor(props) {
    super(props);
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitted");
    }
    render() {
        return (
            <form className="newsletter_form" onSubmit={this.mySubmitHandler}>
                <h1 style={{fontSize: 40}}>Newsletter</h1>
                <p className="newsletter_info">Stay up to date with dance news in Oslo with us</p>
                <div className="newsletter_subscribe">
                <input 
                type="email" placeholder="Your email address"/>
                <input type="submit" value="subscribe"/>
                </div>
                <p className="newsletter_info">Your email is safe with us.</p> 
                <p className="newsletter_info"> We don't spam.</p>
            </form>
        )
    }
};
export default Newsletter;