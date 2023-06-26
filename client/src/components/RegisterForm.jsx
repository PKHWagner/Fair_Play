import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../slices/authSlice';
import { reset } from '../slices/authSlice';


const RegisterForm = (props) => {
    const {
        initialFirstName,
        initialLastName, 
        initialAddress, 
        initialCity, 
        initialState, 
        initialZipCode, 
        initialSport, 
        intialPosition, 
        initialSkillLevel, 
        initialEmail, 
        initialPassword , 
        initialConfirmPassword,
        initialMinutes,
        initialGoals,
        initialAssists,
        initialYellowCards,
        initialRedCard
    } = props;

    const [playerData, setPlayerData] = useState({
        firstName: initialFirstName,
        lastName: initialLastName,
        address: initialAddress,
        city: initialCity,
        state: initialState,
        zipCode: initialZipCode,
        sport: initialSport,
        position: intialPosition,
        skillLevel: initialSkillLevel,
        email: initialEmail,
        password: initialPassword,
        confirmPassword: initialConfirmPassword,
        minutes: initialMinutes,
        goals: initialGoals,
        assists: initialAssists,
        yellowCards: initialYellowCards,
        redCard: initialRedCard,
    })

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [errors, setErrors] = useState({})

    const {firstName, lastName, address, city, state, zipCode, sport, position, skillLevel, email, password, confirmPassword} = playerData;

    const {player, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }
        if (isSuccess || player) {
            navigate('/')
        }

        dispatch (reset())
    }, [player, isError, isSuccess, message, navigate, dispatch])

    const changeHandler = (e) => {
        setPlayerData((prevState) => ({
            ...prevState, 
            [e.target.name]:e.target.value
        }))
        console.log(playerData)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords don't match")
        } else {
            const playerData = { firstName, lastName, address, city, state, zipCode, sport, position, skillLevel, email, password, confirmPassword }
            dispatch(register(playerData))
            navigate('/PlayerDashboard')  
        // onSubmitProp(playerData)
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
}


    return (
        <div className="bg-secondary mx-auto p-3 border border-3 border-dark rounded m-5">
            <form className='mx-auto' onSubmit={onSubmitHandler}>
                <div className='form-group m-3'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type="text" name="firstName" id="firstName" className="form-control" onChange = {changeHandler}/>
                    {
                        errors.firstName?
                        <p>{errors.firstName.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type="text" name="lastName" id="lastName" className="form-control" onChange = {changeHandler}/>
                    {
                        errors.lastName?
                        <p>{errors.lastName.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='address'>Address:</label>
                    <input type="text" name="address" id="address" className="form-control" onChange = {changeHandler}/>
                    {
                        errors.streetAddress?
                        <p>{errors.streetAddress.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='city'>City:</label>
                    <input type="text" name="city" id="city" className="form-control" onChange = {changeHandler}/>
                    {
                        errors.city?
                        <p>{errors.city.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='state'>State:</label>
                    <select name="state" id="state" className="form-control" onChange = {changeHandler}>
                        <option value="null" selected disabled>Select State...</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    {
                        errors.state?
                        <p>{errors.state.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='zipCode'>Zip Code:</label>
                    <input type="text" name="zipCode" id="zipCode" className="form-control" onChange = {changeHandler}/>
                    {
                        errors.zipCode?
                        <p>{errors.zipCode.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='sport'>Sport:</label>
                    <select name="sport" id="sport" className="form-control" onChange = {changeHandler}>
                        <option value="null" selected disabled>Select your sport...</option>
                        <option value="Soccer">Soccer</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Baseball">Baseball</option>
                        <option value="Hockey">Hockey</option>
                    </select>
                    {
                        errors.sport?
                        <p>{errors.sport.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='position'>Postion:</label>
                    <select name="position" id="position" className="form-control" onChange = {changeHandler}>
                        <option value="null" selected disabled>Select your position...</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                        <option value="Full-back">Full-back</option>
                        <option value="Center-back">Center-back</option>
                        <option value="Defensive Midfielder">Defensive Midfielder</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Attacking Midfielder">Attacking Midfielder</option>
                        <option value="Winger">Winger</option>
                        <option value="Striker">Striker</option>

                    </select>
                    {
                        errors.position?
                        <p>{errors.position.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='skillLevel'>Skill Level:</label>
                    <select name="skillLevel" id="skillLevel" className="form-control" onChange = {changeHandler}>
                        <option value="null" selected disabled>Select your skill level...</option>
                        <option value="1">Beginner</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Advanced</option>
                        <option value="4">Pro</option>
                    </select>
                    {
                        errors.skillLevel?
                        <p>{errors.skillLevel.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='email'>Email:</label>
                    <input type="text" name="email" id="regEmail" className="form-control" onChange = {changeHandler}/>
                    {
                        errors.email?
                        <p>{errors.email.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='regPassword'>Password:</label>
                    <input type="password" name="password" id="regPassword" className="form-control" onChange = {changeHandler} autoComplete='new-password'/>
                    {
                        errors.password?
                        <p>{errors.password.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='regConfirmPassword'>Confirm Password:</label>
                    <input type="password" name="confirmPassword" id="regConfirmPassword" className="form-control" onChange = {changeHandler} autoComplete='new-password'/>
                    {
                        errors.confirmPassword?
                        <p>{errors.confirmPassword.message}</p>:
                        null
                    }
                </div>
                <button input type="submit" className='btn btn-warning'>Submit</button>
            </form>
        </div>
    )
}
export default RegisterForm