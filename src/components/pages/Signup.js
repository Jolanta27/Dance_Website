import React from 'react';
import '../../App.css';
import  SignUpForm  from '../SignUpForm';

function SignUp() {
  return (
    <>
    <SignUpForm />
            <footer className="footer">
              <p className="copy-right__footer">DanseSkole<i className="far fa-copyright"></i>2021</p>
            </footer>
    </>
  );
}
export default SignUp;
