import React, { useState } from 'react'
import '../styles/LoginRegisterForm.css';
import { toast } from 'react-toastify';

const UpdatePlayerForm = (props) => {
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
        onSubmitProp
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
    })

    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setPlayerData({ ...playerData, [e.target.name]: e.target.value })
        console.log(playerData)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(playerData)
    }

    return (
        <div className="form_area">
            <form className='update-player-form' onSubmit={onSubmitHandler}>
                <div className='form-group'>
                    <label htmlFor='firstName'>First Name:</label>
                    <input type="text" name="firstName" id="firstName" className="form-control input-field" value={playerData.firstName} onChange={changeHandler} />
                    {
                        errors.firstName ?
                            toast.error(errors.firstName.message) :
                            null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='lastName'>Last Name:</label>
                    <input type="text" name="lastName" id="lastName" className="form-control" value={playerData.lastName} onChange={changeHandler} />
                    {
                        errors.lastName ?
                            toast.error(errors.lastName.message) :
                            null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Address:</label>
                    <input type="text" name="address" id="address" className="form-control" value={playerData.address} onChange={changeHandler} />
                    {
                        errors.streetAddress ?
                            toast.error(errors.streetAddress.message) :
                            null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='city'>City:</label>
                    <input type="text" name="city" id="city" className="form-control" value={playerData.city} onChange={changeHandler} />
                    {
                        errors.city ?
                            toast.error(errors.city.message) :
                            null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='state'>State:</label>
                    <select name="state" id="state" className="form-control" value={playerData.state} onChange={changeHandler}>
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
                        errors.state ?
                            toast.error(errors.state.message) :
                            null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='zipCode'>Zip Code:</label>
                    <input type="text" name="zipCode" id="zipCode" className="form-control" value={playerData.zipCode} onChange={changeHandler} />
                    {
                        errors.zipCode ?
                            toast.error(errors.zipCode.message) :
                            null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='sport'>Sport:</label>
                    <select name="sport" id="sport" className="form-control" value={playerData.sport} onChange={changeHandler}>
                        <option value="Soccer">Soccer</option>
                        <option value="Basketball">Basketball</option>
                        <option value="Football">Football</option>
                        <option value="Baseball">Baseball</option>
                        <option value="Hockey">Hockey</option>
                    </select>
                    {
                        errors.sport ?
                            toast.error(errors.sport.message) :
                            null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='position'>Postion:</label>
                    <select name="position" id="position" className="form-control" value={playerData.position} onChange={changeHandler}>
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
                        errors.position ?
                            toast.error(errors.position.message) :
                            null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='skillLevel'>Skill Level:</label>
                    <select name="skillLevel" id="skillLevel" className="form-control" value={playerData.skillLevel} onChange={changeHandler}>
                        <option value="1">Beginner</option>
                        <option value="2">Intermediate</option>
                        <option value="3">Advanced</option>
                        <option value="4">Pro</option>
                    </select>
                    {
                        errors.skillLevel ?
                            toast.error(errors.skillLevel.message) :
                            null
                    }
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input type="text" name="email" id="email" className="form-control" value={playerData.email} onChange={changeHandler} />
                    {
                        errors.email ?
                            toast.error(errors.email.message) :
                            null
                    }
                </div>
                <button input type="submit" className='buttonPink'>Update</button>
            </form>
        </div>
    )
}
export default UpdatePlayerForm