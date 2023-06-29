import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../slices/authSlice';
import '../styles/LoginForm.css';

const LoginForm = (props) => {
    const {loginEmail, loginPassword} = props;
    const [loginInfo, setLoginInfo] = useState({
        email: loginEmail,
        password: loginPassword,
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {player, isLoading, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isSuccess || player) {
            navigate('/PlayerDashboard')
        }
        if (message) {
            toast.error(message)
        }
    }, [player, isSuccess, message, navigate, dispatch])


    const logChangeHandler = (e) => {
        setLoginInfo((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value
        }))
        console.log(loginInfo)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo
        const loginData = { email, password }
        dispatch(login(loginData))
        
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="login-section-bg login-section mx-auto p-3 login-section-border login-section-border-dark login-section-rounded login-section-margin">
            <form className="login-section mx-auto p-4" onSubmit={onSubmitHandler}>
            <h1 className='login-space'> Login:</h1>
            <div className="login-form-group m-3">
                <label htmlFor="email" className="login-label mt-5"> Email:</label>
                <input type="text" name="email" id="email" className="login-form-control" onChange={logChangeHandler}/>
                {/* {
                    errors.email ? (
                    <p className="login-error-message">{errors.email.message}</p>) : 
                    null
                } */}
            </div>
            <div className="login-form-group m-3">
                <label htmlFor="password" className="login-label">Password:</label>
                <input type="password" name="password" id="password" className="login-form-control" onChange={logChangeHandler}/>
                {/* {
                    errors.password ? (
                    <p className="login-error-message">{errors.password.message}</p>) : 
                    null
                } */}
            </div>
    
            <button type="submit" className="btn btn-warning login-submit-button login-submit-button-animation mt-5">Login</button>
            </form>
        </div>
    )
}
export default LoginForm