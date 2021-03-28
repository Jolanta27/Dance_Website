import React from 'react';
import '../../App.css';
import { SignUpForm } from '../SignUpForm';

function SignUp() {
  return (
    <>
    <SignUpForm />
    <div className="copy-rights">
        <p>DanseSkole<i className="far fa-copyright"></i>2021</p>
    </div>
  </>
  );
}

export default SignUp;
