import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../slices/authSlice';
import { reset } from '../slices/authSlice';

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
        <div className="bg-secondary mx-auto p-3 border border-3 border-dark rounded m-5">
            <form className='mx-auto' onSubmit={onSubmitHandler}>
                <div className='form-group m-3'>
                    <label htmlFor='email'>Email:</label>
                    <input type="text" name="email" id="email" className="form-control" onChange = {logChangeHandler}/>
                    {
                        errors.email?
                        <p>{errors.email.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" name="password" id="password" className="form-control" onChange = {logChangeHandler} autoComplete='current-password'/>
                    {
                        errors.password?
                        <p>{errors.password.message}</p>:
                        null
                    }
                </div>
                
                <button input type="submit" className='btn btn-warning'>Submit</button>
            </form>
        </div>
    )
}
export default LoginForm