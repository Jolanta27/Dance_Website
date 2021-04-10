
import React from 'react';
import './SignUpForm.css';

const SignUpForm =  () => {
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h2>Dance Registration Form</h2>
                <p>Fill the registration form below keenly to enter the dancing competition.</p>
                <form>
                        <label>Full Name</label>
                        <input type="text" name="name" />
                        <label>Email</label>
                        <input type="email" name="email"/>
                        <label>Phone Number</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}" required/>
                        <small>Format: 123-456-78</small>
                        <div className="gender">
                        <label >Female</label>
                        <input type="radio" name="gender" />
                        <label>Male</label>
                        <input type="radio" name="gender"/>
                        </div>
                        <label>Comments:</label>
                        <textarea id="story" name="message" rows="5" cols="33"></textarea>
                        <input type="submit"  value="Sign Up" className="submit" />
                </form>
            </div>
        </div>
    );
}
export default SignUpForm;