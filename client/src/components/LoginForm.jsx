import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../slices/authSlice';
import { reset } from '../slices/authSlice';
import './LoginForm.css';

const LoginForm = (props) => {
    const {loginEmail, loginPassword} = props;
    const [loginInfo, setLoginInfo] = useState({
        email: loginEmail,
        password: loginPassword,
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [errors, setErrors] = useState({})

    const {email, password} = loginInfo;

    const {player, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || player) {
            navigate('/PlayerDashboard')
        }

        dispatch (reset())
    }, [player, isError, isSuccess, message, navigate, dispatch])


    const logChangeHandler = (e) => {
        setLoginInfo((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value}))
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();        
        const loginInfo = { email, password }
        dispatch(login(loginInfo))
        console.log(loginInfo)
        navigate('/PlayerDashboard')
        // onSubmitProp(loginInfo)
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="login-section-bg login-section mx-auto p-3 login-section-border login-section-border-dark login-section-rounded login-section-margin">
          <form className="login-section mx-auto" onSubmit={onSubmitHandler}>
            <h1 className='login-space'> Login:</h1>
            <div className="login-form-group m-3">
              <label htmlFor="email" className="login-label"> Email:</label>
              <input type="text" name="email" id="email" className="login-form-control" onChange={logChangeHandler}/>
                {
                    errors.email ? (
                    <p className="login-error-message">{errors.email.message}</p>) : 
                    null
                }
            </div>
            <div className="login-form-group m-3">
              <label htmlFor="password" className="login-label">Password:</label>
              <input type="password" name="password" id="password" className="login-form-control" onChange={logChangeHandler}/>
                {
                    errors.password ? (
                    <p className="login-error-message">{errors.password.message}</p>) : 
                    null
                }
            </div>
    
            <button type="submit" className="btn btn-warning login-submit-button login-submit-button-animation">Login</button>
          </form>
        </div>
    )
}
export default LoginForm