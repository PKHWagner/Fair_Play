import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../slices/authSlice';
import '../styles/LoginRegisterForm.css';

const LoginForm = (props) => {
    const { loginEmail, loginPassword } = props;
    const [loginInfo, setLoginInfo] = useState({
        email: loginEmail,
        password: loginPassword,
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { player, isLoading, isSuccess, message } = useSelector((state) => state.auth)

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
            [e.target.name]: e.target.value
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
        <div className='form_area'>
            <div>
                <h1 className='mb-4'> Login:</h1>
                <form onSubmit={onSubmitHandler}>

                    <div>
                        <input type="email" name="email" id="email" className="form-control" placeholder='Email' onChange={logChangeHandler} />
                        {/* {
                    errors.email ? (
                    <p className="login-error-message">{errors.email.message}</p>) : 
                    null
                } */}
                    </div>
                    <div className='mt-3'>
                        <input type="password" name="password" id="password" className="form-control" placeholder='Password' onChange={logChangeHandler} />
                        {/* {
                    errors.password ? (
                    <p className="login-error-message">{errors.password.message}</p>) : 
                    null
                } */}
                    </div>

                    <button className='buttonPink mt-4'>Login</button>
                </form>
            </div>

        </div>
    )
}
export default LoginForm