import React from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'
import './LoginReg.css';

const LoginReg = (props) => {
        
    return (
        <div>
            <div className="login-reg-container">
                <div className="background"></div>
                <div className="content"></div>
            <div className="header">
                <h1 className='col-3 bg-light rounded p-3 mx-auto border border-muted '><span className="fair">FAIR</span><span className="play">PLAY</span></h1>
            </div>
            <div className='d-flex mt-5'>
            </div>
            <div className='d-flex justify-content-around p-5'>
                <div className='col ms-5 me-5'>
                    {/* <h2 className="mx-auto">Login:</h2> */}
                    <LoginForm loginEmail="" loginPassword=""/>
                </div>
                {/* <div className='col'>
                    <h2 className="text-warning mx-auto align-self-center">OR</h2>
                </div> */}
                <div className='col me-5'>
                    {/* <h2 className="offset-md mx-auto">Register:</h2> */}
                    <RegisterForm initialFirstName="" initialLastName="" initialEmail="" initialInstrument="" initialPassword="" initialConfirmPassword="" initialMinutes={0} initialGoals={0} initialAssists={0} initialYellowCards={0} initialRedCard={0}/>
                </div>
            </div>
            <div className="footer">
                <p>Fair Play All Rights Reserved. &copy; 2023</p>
            </div>
        </div>
        </div>
        )
    }   
    
    export default LoginReg
