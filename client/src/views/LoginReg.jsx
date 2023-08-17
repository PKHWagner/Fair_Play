import React from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'
import '../styles/LoginReg.css';

const LoginReg = (props) => {

    return (
        <div className='body'>
            <div className='header mx-auto'>
                <h1><span className="fair">FAIR</span><span className="play">PLAY</span></h1>
            </div>
            <div className='d-flex justify-content-around p-5'>
                <div className='col ms-5 me-5'>
                    {/* <h2 className="mx-auto">Login:</h2> */}
                    <LoginForm loginEmail="" loginPassword="" />
                </div>

                <div className='col ms-5 me-5'>

                    <RegisterForm initialFirstName="" initialLastName="" initialEmail="" initialInstrument="" initialPassword="" initialConfirmPassword="" initialMinutes={0} initialGoals={0} initialAssists={0} initialYellowCards={0} initialRedCard={0} />
                </div>
            </div>
            <footer>
                <p>Fair Play All Rights Reserved. &copy; 2023</p>
            </footer>
        </div>
    )
}

export default LoginReg
