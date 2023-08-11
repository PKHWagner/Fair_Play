import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../slices/authSlice';
import '../styles/LoginRegisterForm.css';


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
    initialPassword,
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
  const { errors } = useSelector((state) => state.auth)
  const { firstName,
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

  const { player, isLoading, isSuccess, message } = useSelector((state) => state.auth)

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
      [e.target.name]: e.target.value
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
    if (response.payload) {
    } else if (response.payload) {
      const { errors } = response.payload;
      Object.keys(errors).forEach((key) => {
        toast.error(errors[key])
      })
    }
  }
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="form_area">
      <div>
        <h1 className='mb-4'> Register: </h1>

        <form onSubmit={onSubmitHandler}>

          {/* <label htmlFor="firstName">First Name:</label> */}
          <input type="text" name="firstName" id="firstName" className="form-control input-field" placeholder='First Name' value={playerData.firstName} onChange={changeHandler} />
          {/* {
              errors.firstName ? 
              toast.error(errors && errors.firstName.message) :
              null
          } */}

          {/* <label htmlFor="lastName">Last Name:</label> */}
          <input type="text" name="lastName" id="lastName" className="form-control mt-3" placeholder='Last Name' value={playerData.lastName} onChange={changeHandler} />
          {/* {
              errors.lastName ? 
              toast.error(errors && errors.lastName.message) :
              null
          } */}

          {/* <label htmlFor="address">Address:</label> */}
          <input type="text" name="address" id="address" className="form-control mt-3" placeholder='Address' value={playerData.address} onChange={changeHandler} />
          {/* {
              errors.address ?
              toast.error(errors && errors.address.message) :
              null
          } */}

          {/* <label htmlFor='city'>City:</label> */}
          <input type="text" name="city" id="city" className="form-control mt-3" placeholder='City' value={playerData.city} onChange={changeHandler} />

          {/* <label htmlFor="state">State:</label> */}
          <select name="state" id="state" className="form-control mt-3" placeholder='State' value={playerData.state} onChange={changeHandler}>
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

          {/* <label htmlFor="zipCode">Zip Code:</label> */}
          <input type="text" name="zipCode" id="zipCode" className="form-control mt-3" placeholder='Zip Code' value={playerData.zipCode} onChange={changeHandler} />
          {/* {
              errors.zipCode ? 
              toast.error(errors && errors.zipCode.message) :
              null
          } */}

          {/* <label htmlFor="sport">Sport:</label> */}
          <select name="sport" id="sport" className="form-control mt-3" placeholder='Sport' value={playerData.sport} onChange={changeHandler}>
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

          {/* <label htmlFor="position">Position:</label> */}
          <select name="position" id="position" className="form-control mt-3" placeholder='Position' value={playerData.position} onChange={changeHandler} >
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

          {/* <label htmlFor="skillLevel">Skill Level:</label> */}
          <div className="tooltip-container">
            <select name="skillLevel" id="skillLevel" className="form-control mt-3" placeholder='Skill Level' value={playerData.skillLevel} onChange={changeHandler}>
              <option value="1">Beginner</option>
              <option value="2">Intermediate</option>
              <option value="3">Advanced</option>
              <option value="4">Pro</option>
            </select>
            <div className="tooltip">
              <p className="tooltip-text mb-1"><strong>BEGINNER</strong> - Never played in a match and has little to no knowledge of the rules of the game.</p>
              <p className="tooltip-text mb-1"><strong>INTERMEDIATE</strong> - Has played occasionally in matches and knows most rules of the game.</p>
              <p className="tooltip-text mb-1"><strong>ADVANCED</strong> - Plays in matches regularly and has in-depth knowledge of all the rules.</p>
              <p className="tooltip-text"><strong>PRO</strong> - Plays regularly and has a history of playing professionally or played in high school and college. Has an in-depth knowledge of all the rules.</p>
            </div>
          </div>


          {/* {
              errors.skillLevel ? 
              toast.error(errors && errors.skillLevel.message) :
              null
          } */}

          {/* <label htmlFor='email'>Email:</label> */}
          <input type="text" name="email" id="email" className="form-control mt-3" placeholder='Email' value={playerData.email} onChange={changeHandler} />
          {/* {
              errors.email?
              toast.error(errors && errors.email.message) :
              null
          } */}

          {/* <label htmlFor='password'>Password:</label> */}
          <input type="password" name="password" id="password" className="form-control mt-3" placeholder='Password' value={playerData.password} onChange={changeHandler} />
          {/* {
          //     errors.password?
          //     toast.error(errors && errors.password.message) :
          //     null
          // } */}

          {/* <label htmlFor='confirmPassword'>Confirm Password:</label> */}
          <input type="password" name="confirmPassword" id="confirmPassword" className="form-control mt-3" placeholder='Confirm Password' value={playerData.confirmPassword} onChange={changeHandler} />
          {/* {
              errors.confirmPassword?
              toast.error(errors && errors.confirmPassword.message) :
              null
          } */}

          <button className="buttonPink mt-4">Register
          </button>
        </form>
      </div>
    </div>
  );


}
export default RegisterForm
