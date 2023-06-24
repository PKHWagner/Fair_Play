import React, { useState } from 'react'
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm'
// import NavBar from '../components/NavBar'

const LoginReg = (props) => {
    const [allPlayers, setAllPlayers] = useState([]);
    const [player, setPlayer] = useState(props);
    const [errors, setErrors] = useState([]);

    return (
        <div>
            {/* <NavBar/> */}
            <div className='d-flex mt-5'>
            </div>
            <div className='d-flex justify-content-around p-5'>
                {errors.map((err, index) => <p className='text-danger' key={index}>{err}</p>)}
                <div className='col ms-5 me-5'>
                    <h2 className="mx-auto">Login:</h2>
                    <LoginForm loginEmail="" loginPassword=""/>
                </div>
                {/* <div className='col'>
                    <h2 className="text-warning mx-auto align-self-center">OR</h2>
                </div> */}
                <div className='col me-5'>
                    <h2 className="offset-md mx-auto">Register:</h2>
                    <RegisterForm initialFirstName="" initialLastName="" initialEmail="" initialInstrument="" initialPassword="" initialConfirmPassword=""/>
                </div>
            </div>
        </div>
        )
    }   
    
    export default LoginReg