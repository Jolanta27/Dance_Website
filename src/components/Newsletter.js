import React from 'react';
import './Newsletter.css';
class Newsletter extends React.Component {
    constructor(props) {
    super(props);
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting");
    }
    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <h1 style={{fontSize: 40}}>Newsletter</h1>
                <p>Stay up to date with dance news in Oslo with us</p>
                <div class="newsletter_subscribe">
                <input 
                type="email" placeholder="Your email address"/>
                <input type="submit" value="subscribe"/>
                </div>
                <p>Your email is safe with us. We don't spam.</p>
            </form>
        )
    }
};
export default Newsletter;