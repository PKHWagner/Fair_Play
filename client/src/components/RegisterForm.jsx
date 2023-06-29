import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../slices/authSlice';
import '../styles/RegisterForm.css';


const RegisterForm = (props) => {
    const {
        initialFirstName,
        initialLastName, 
        initialAddress, 
        initialCity, 
        initialState, 
        initialZipCode, 
        initialSport, 
        initialPosition, 
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
        position: initialPosition,
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
    const {errors} = useSelector((state) => state.auth)
    const {firstName,
      lastName, 
      address, 
      city, 
      state, 
      zipCode, 
      sport, 
      position, 
      skillLevel, 
      email, 
      password, 
      confirmPassword
    } = playerData;

    const {player, isLoading, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
        if (isSuccess || player) {
          navigate('/PlayerDashboard')
        }
        if (errors) {
            Object.keys(errors).forEach((key) => {
                toast.error(errors[key])
            })
        }
    }, [errors, player, isSuccess, message, navigate, dispatch])

    const changeHandler = (e) => {
        setPlayerData((prevState) => ({
            ...prevState, 
            [e.target.name]:e.target.value
        }))
        console.log(playerData)
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const playerData = { 
          firstName, 
          lastName, 
          address, 
          city, 
          state, 
          zipCode, 
          sport, 
          position, 
          skillLevel: 
          parseInt(skillLevel), 
          email, 
          password, 
          confirmPassword
        }

        const response = await dispatch(register(playerData))
        console.log(response)
        console.log(response.payload)        
        if(response.payload) {
        } else if (response.payload) {
            const {errors} = response.payload;
            Object.keys(errors).forEach((key) => {
              toast.error(errors[key])
          })}
    }
    if (isLoading) {
        return <h1>Loading...</h1>
  }

return (
    <div className="register-section">
        <form className='mx-auto p-4' onSubmit={onSubmitHandler}>
        <h1 className='mb-5' style={{fontFamily: "impact"}}> Register: </h1>
      <div className="form-row m-3">
        <div className="form-group col">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" name="firstName" id="firstName" className="form-control input-field" value={playerData.firstName} onChange={changeHandler}/>
          {/* {
              errors.firstName ? 
              toast.error(errors && errors.firstName.message) :
              null
          } */}
        </div>
        <div className="form-group col">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" name="lastName" id="lastName" className="form-control" value={playerData.lastName} onChange={changeHandler}/>
          {/* {
              errors.lastName ? 
              toast.error(errors && errors.lastName.message) :
              null
          } */}
        </div>
      </div>
      <div className="form-row m-3">
        <div className="form-group col">
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" id="address" className="form-control" value={playerData.address} onChange={changeHandler}/>
          {/* {
              errors.address ?
              toast.error(errors && errors.address.message) :
              null
          } */}
        </div>
        <div className="form-group col">
        <label htmlFor='city'>City:</label>
        <input type="text" name="city" id="city" className="form-control" value={playerData.city} onChange = {changeHandler}/>
        </div>
      </div>
      <div className="form-row m-3">
        <div className="form-group col">
          <label htmlFor="state">State:</label>
          <select name="state" id="state" className="form-control" value={playerData.state} onChange={changeHandler}>
            <option value="">Select a State...</option>
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
          {/* {
              errors.state ? 
              toast.error(errors && errors.state.message) :
              null
          } */}
        </div>

        <div className="form-group col">
          <label htmlFor="zipCode">Zip Code:</label>
          <input type="text" name="zipCode" id="zipCode" className="form-control" value={playerData.zipCode} onChange={changeHandler}/>
          {/* {
              errors.zipCode ? 
              toast.error(errors && errors.zipCode.message) :
              null
          } */}
        </div>

      </div>
      <div className="form-row m-3">
        <div className="form-group col">
          <label htmlFor="sport">Sport:</label>
          <select name="sport" id="sport" className="form-control" value={playerData.sport} onChange={changeHandler}>
                <option value="">Select Sport...</option>
                <option value="Soccer">Soccer</option>
                <option value="Basketball">Basketball</option>
                <option value="Football">Football</option>
                <option value="Baseball">Baseball</option>
                <option value="Hockey">Hockey</option>
          </select>
          {/* {
              errors.sport ? 
              toast.error(errors && errors.sport.message) :
              null
          } */}
        </div>
        <div className="form-group col">
          <label htmlFor="position">Position:</label>
          <select name="position" id="position" className="form-control" value={playerData.position} onChange={changeHandler} >
                <option value="">Select Position...</option>
                <option value="Goalkeeper">Goalkeeper</option>
                <option value="Full-back">Full-back</option>
                <option value="Center-back">Center-back</option>
                <option value="Defensive Midfielder">Defensive Midfielder</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Attacking Midfielder">Attacking Midfielder</option>
                <option value="Winger">Winger</option>
                <option value="Striker">Striker</option>
          </select>
          {/* {
              errors.position ? 
              toast.error(errors && errors.position.message) : 
              null
          } */}
        </div>
      </div>
      <div className="form-row m-3">
          <div className="form-group col">
          <label htmlFor="skillLevel">Skill Level:</label>
              <div className="tooltip-container">
                <select name="skillLevel" id="skillLevel" className="form-control" value={playerData.skillLevel} onChange={changeHandler}>
                  <option value="1">Beginner</option>
                  <option value="2">Intermediate</option>
                  <option value="3">Advanced</option>
                  <option value="4">Pro</option>
                </select>
        <div className="tooltip">
              <p className="tooltip-text mb-1">BEGINNER - Never played in a match and has little to no knowledge of the rules of the game.</p>
              <p className="tooltip-text mb-1">INTERMEDIATE - Has played occasionally in matches and knows most rules of the game.</p>
              <p className="tooltip-text mb-1">ADVANCED - Plays in matches regularly and has in-depth knowledge of all the rules.</p>
              <p className="tooltip-text">PRO - Plays regularly and has a history of playing professionally or played in high school and college. Has an in-depth knowledge of all the rules.</p>
        </div>
      </div>
          {/* {
              errors.skillLevel ? 
              toast.error(errors && errors.skillLevel.message) :
              null
          } */}
      </div>
        <div className="form-group col">
        <label htmlFor='email'>Email:</label>
        <input type="text" name="email" id="email" className="form-control" value={playerData.email} onChange = {changeHandler}/>
          {/* {
              errors.email?
              toast.error(errors && errors.email.message) :
              null
          } */}
        </div>
      </div>
      <div className="form-row m-3">
        <div className="form-group col">
        <label htmlFor='password'>Password:</label>
        <input type="password" name="password" id="password" className="form-control" value={playerData.password} onChange = {changeHandler}/>
          {/* {
          //     errors.password?
          //     toast.error(errors && errors.password.message) :
          //     null
          // } */}
        </div>
        <div className="form-group col">
        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input type="password" name="confirmPassword" id="confirmPassword" className="form-control" value={playerData.confirmPassword} onChange = {changeHandler}/>
          {/* {
              errors.confirmPassword?
              toast.error(errors && errors.confirmPassword.message) :
              null
          } */}
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-4 submit-button">Register
</button>
</form>
    </div>
  );
  
          
}
export default RegisterForm
