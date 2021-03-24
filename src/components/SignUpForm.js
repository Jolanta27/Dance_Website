import React from 'react';
import './SignUpForm.css';

export class SignUpForm extends React.Component {
render() {
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h2>Dance Registration Form</h2>
                <p>Fill the registration form below keenly to enter the dancing competition.</p>
                <form>
                    <div className="fullName">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email"/>
                    </div>
                    <div className="phoneNumber">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                        <small>Format: 123-456-7890</small>
                    </div>
                    <div className="gender">
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" name="gender" value="male"/>
                    </div>
                    <div className="typeOfDance">
                        <p>Type Of Dance:</p>
                        <div>
                        <input type="checkbox" id="salsa" name="salsa" value="salsa"/>
                        <label htmlFor="salsa">Salsa</label>
                        </div>
                        <div>
                        <input type="checkbox" id="bachata" name="bachata" value="bachata" />
                        <label htmlFor="bachata">Bachata</label>
                        </div>
                        <div>
                        <input type="checkbox" id="kizomba" name="kizomba" value="kizomba" />
                        <label htmlFor="kizomba">Kizomba</label>
                        </div>
                        <div>
                        <input type="checkbox" id="chacha" name="chacha" value="chacha" />
                        <label htmlFor="chacha">Cha-cha</label>
                        </div>
                        <div>
                        <input type="checkbox" id="mambo" name="mambo" value="mambo" />
                        <label htmlFor="mambo">Mambo</label>
                        </div>
                        <div>
                        <input type="checkbox" id="urbankiz" name="urbankiz" value="urbankiz" />
                        <label htmlFor="urbankiz">Urban Kiz</label>
                        </div>
                    </div>
                    <div className="calendar">
                        <label htmlFor="start">Start date:</label>
                        <input type="date" id="start" name="dance-start" value="2021-04-01" min="2021-01-01" max="2021-12-31" />
                    </div>
                    <div className="comments">
                        <label htmlFor="story">Comments:</label>
                        <textarea id="story" name="story" rows="5" cols="33">Add more information if you want</textarea>
                    </div>
                    <div className="submit">
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
}