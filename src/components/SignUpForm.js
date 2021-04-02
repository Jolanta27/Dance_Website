import React, {useState }from 'react';
import {axios, db } from '../.firebase/firebaseConfig';
import './SignUpForm.css';


const SignUpForm =  () => {
const [formData, setFormData ] = useState({})

const updateInput = e => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
}
const handleSubmit = event => {
    event.preventDefault()
    sendEmail()
    setFormData({
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        message: ''
    })
}
const sendEmail = () => {
    
    axios.post(
        process.env.REACT_APP_FIREBASE_DATABASE_URL,
        formData
    )
    .then(res => {
        db.collection('emails').add({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            gender: formData.gender,
            message: formData.message,
            time: new Date(),
        })   
    })
    .catch(error => {
        console.log(error)
    })
}
    return (
        <div className="wrapper">
            <div className="form-wrapper">
                <h2>Dance Registration Form</h2>
                <p>Fill the registration form below keenly to enter the dancing competition.</p>
                <form onSubmit={handleSubmit}>
                    <div className="fullName">
                        <label htmlFor="fullName">Full Name</label>
                        <input type="text" name="fullName" onChange={updateInput} value={formData.fullName || ''} />
                    </div>
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={updateInput} value={formData.email || ''}/>
                    </div>
                    <div className="phoneNumber">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}" onChange={updateInput} value={formData.phone || ''}required/>
                        <small>Format: 123-456-78</small>
                    </div>
                    <div className="gender">
                        <label htmlFor="female">Female</label>
                        <input type="radio" id="female" name="gender" onChange={updateInput} value={formData.gender || ''} />
                        <label htmlFor="male">Male</label>
                        <input type="radio" id="male" name="gender" onChange={updateInput} value={formData.gender || ''}/>
                    </div>
                    <div className="typeOfDance">
                        <p>Type Of Dance:</p>
                        <div className="dance_type">
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
                        </div>
                        <div className="dance_type">
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
                    </div>
                    <div className="comments">
                        <label htmlFor="story">Comments:</label>
                        <textarea id="story" name="message" rows="5" cols="33"  onChange={updateInput} defaultValue={formData.message || ''}></textarea>
                    </div>
                    <div className="submit">
                        <button>Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default SignUpForm;