import React, { useState, useEffect } from 'react'

const StatForm = (props) => {
    const {initialMinutes, initialGoals, initialAssists, initialYellowCard, initialRedCard, onSubmitProp} = props;
    const [gameStats, setGameStats] = useState({
        minutes: initialMinutes,
        goals: initialGoals,
        assists: initialAssists,
        yellowCard: initialYellowCard,
        redCard: initialRedCard,
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setGameStats((prevStats) => ({
            ...prevStats,
            [e.target.name]: e.target.value
        }))
        console.log(gameStats);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(gameStats)
    }
    

    return (
        <div className="col-4 bg-secondary mx-auto p-3 border border-3 border-dark rounded m-5">
            <form className='mx-auto' onSubmit={onSubmitHandler}>
                <div className='form-group m-3'>
                    <label htmlFor='minutes'>Minutes</label>
                    <input type="minutes" name="minutes" id="minutes" className="form-control" onChange = {changeHandler}/>
                    {
                        errors.minutes?
                        <p>{errors.minutes.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='address'>Goals</label>
                    <input type="goals" name="goals" id="goals" className="form-control" onChange = {changeHandler}/>
                    {
                        errors.goals?
                        <p>{errors.goals.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='assists'>Assists</label>
                    <input type="text" name="assists" id="assists" className="form-control" onChange = {changeHandler}/>
                    {
                        errors.assists?
                        <p>{errors.assists.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='yellowCard'>Yellow Card</label>
                    <input type="number" min="1" max="2" name="yellowCard" id="yellowCard" className="form-radio-input"  onChange = {changeHandler}/>
                    {
                        errors.yellowCard?
                        <p>{errors.yellowCard.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='yes'>Yes</label>
                    <input type="radio" className="form-radio-input" name="RedCard" id="yes" onChange = {changeHandler}/>
                    <label htmlFor='no'>No</label>
                    <input type="radio" className="form-radio-input" name="RedCard" id="no" onChange = {changeHandler}/>
                    {
                        errors.redCard?
                        <p>{errors.redCard.message}</p>:
                        null
                    }
                </div>
                <button input type="submit" className='btn btn-warning'>Submit</button>
            </form>
        </div>
    )
}
export default StatForm