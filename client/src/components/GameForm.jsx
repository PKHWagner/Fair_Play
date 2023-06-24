import React, { useState, useEffect } from 'react'

const GameForm = (props) => {
    const {initialDate, initialAddress, initialCity, initialState , initialZipCode, initialSetUpTime, initialStartTime, onSubmitProp} = props;
    const [gameData, setGameData] = useState({
        date: initialDate,
        streetAddress: initialAddress,
        city: initialCity,
        state: initialState,
        zipCode: initialZipCode,
        setUpTime: initialSetUpTime,
        startTime: initialStartTime,

    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setGameData((prevGame) => ({
            ...prevGame,
            [e.target.name]: e.target.value
        }))
        console.log(setGameData);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(gameData)
    }
    

    return (
        <div className="col-4 bg-secondary mx-auto p-3 border border-3 border-dark rounded m-5">
            <form className='mx-auto' onSubmit={onSubmitHandler}>
                <div className='form-group m-3'>
                    <label htmlFor='date'>Date:</label>
                    <input type="date" name="date" id="date" className="form-control" value={gameData.date} onChange = {changeHandler}/>
                    {
                        errors.date?
                        <p>{errors.date.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='address'>Address:</label>
                    <input type="text" name="saddress" id="address" className="form-control" value={gameData.address} onChange = {changeHandler}/>
                    {
                        errors.address?
                        <p>{errors.address.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='city'>City:</label>
                    <input type="text" name="city" id="city" className="form-control" value={gameData.city} onChange = {changeHandler}/>
                    {
                        errors.city?
                        <p>{errors.city.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='state'>State:</label>
                    <select name="state" id="state" className="form-control" value={gameData.state} onChange = {changeHandler}>
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
                    <input type="text" name="zipCode" id="zipCode" className="form-control" value={gameData.zipCode} onChange = {changeHandler}/>
                    {
                        errors.zipCode?
                        <p>{errors.zipCode.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='setUpBy'>Set Up By:</label>
                    <input type="time" name="setUpBy" id="setUpBy" className="form-control" value={gameData.setUpBy} onChange = {changeHandler}/>
                    {
                        errors.setUpBy?
                        <p>{errors.setUpBy.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='startTime'>Start Time:</label>
                    <input type="time" name="startTime" id="startTime" className="form-control" value={gameData.startTime} onChange = {changeHandler}/>
                    {
                        errors.startTime?
                        <p>{errors.startTime.message}</p>:
                        null
                    }
                </div>
                <button input type="submit" className='btn btn-warning'>Submit</button>
            </form>
        </div>
    )
}
export default GameForm