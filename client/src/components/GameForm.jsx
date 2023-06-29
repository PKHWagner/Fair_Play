import React, { useState, useEffect } from 'react'
import '../styles/GameForm.css';

const GameForm = (props) => {
    const {initialGameDate, initialAddress, initialCity, initialState , initialZipCode, initialSetupTime, initialKickOffTime, onSubmitProp} = props;
    const [gameData, setGameData] = useState({
        gameDate: initialGameDate,
        address: initialAddress,
        city: initialCity,
        state: initialState,
        zipCode: initialZipCode,
        setupTime: initialSetupTime,
        kickOffTime: initialKickOffTime

    })

    const changeHandler = (e) => {
        setGameData((prevGame) => ({
            ...prevGame,
            [e.target.name]: e.target.value
        }))
        console.log(gameData);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(gameData)
    }


    return (
        <div className="col-4 mx-auto m-5">
          <form className='mx-auto form' onSubmit={onSubmitHandler}>
            <div className='form-group'>
              <label htmlFor='gameDate'>Date:</label>
              <input type="date" name="gameDate" id="gameDate" className="form-control input" value={gameData.gameDate} onChange={changeHandler} />
            </div>
            <div className='form-group'>
              <label htmlFor='address'>Address:</label>
              <input type="text" name="address" id="address" className="form-control input" value={gameData.address} onChange={changeHandler} />
            </div>
            <div className='form-group'>
              <label htmlFor='city'>City:</label>
              <input type="text" name="city" id="city" className="form-control input" value={gameData.city} onChange={changeHandler} />
            </div>
            <div className='form-group'>
              <label htmlFor='state'>State:</label>
              <select name="state" id="state" className="form-control select" value={gameData.state} onChange={changeHandler}>
                        <option value=""  >Select State...</option>
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
            </div>
            <div className='form-group'>
              <label htmlFor='zipCode'>Zip Code:</label>
              <input type="text" name="zipCode" id="zipCode" className="form-control input" value={gameData.zipCode} onChange={changeHandler} />
            </div>
            <div className='form-group'>
              <label htmlFor='setupTime'>Set Up Time:</label>
              <input type="time" name="setupTime" id="setupTime" className="form-control input" value={gameData.setupTime} onChange={changeHandler} />
            </div>
            <div className='form-group'>
              <label htmlFor='kickOffTime'>Kickoff Time:</label>
              <input type="time" name="kickOffTime" id="kickOffTime" className="form-control input" value={gameData.kickOffTime} onChange={changeHandler} />
            </div>
            <button input type="submit" className='btn btn-warning btn-submit mt-4'>Submit</button>
          </form>
        </div>
      )
      
}
export default GameForm