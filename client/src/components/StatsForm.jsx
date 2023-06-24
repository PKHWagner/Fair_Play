import React, { useState, useEffect } from 'react'

const StatsForm = (props) => {
    const {initialMinutes, initialGoals, initialAssists, initialYellowCard, initialRedCard, onSubmitProp} = props;
    const [stats, setStats] = useState({
        minutes: initialMinutes,
        goals: initialGoals,
        assists: initialAssists,
        yellowCard: initialYellowCard,
        redCard: initialRedCard,
    })
    const [errors, setErrors] = useState({})

    const changeHandler = (e) => {
        setGameData((prevStats) => ({
            ...prevStats,
            [e.target.name]: e.target.value
        }))
        console.log(setGameData);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(stats)
    }
    

    return (
        <div className="col-4 bg-secondary mx-auto p-3 border border-3 border-dark rounded m-5">
            <form className='mx-auto' onSubmit={onSubmitHandler}>
                <div className='form-group m-3'>
                    <label htmlFor='minutes'>Minutes</label>
                    <input type="minutes" name="minutes" id="minutes" className="form-control" value={stats.minutes} onChange = {changeHandler}/>
                    {
                        errors.minutes?
                        <p>{errors.minutes.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='address'>Goals</label>
                    <input type="goals" name="goals" id="goals" className="form-control" value={stats.goals} onChange = {changeHandler}/>
                    {
                        errors.goals?
                        <p>{errors.goals.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='assists'>Assists</label>
                    <input type="text" name="assists" id="assists" className="form-control" value={stats.assists} onChange = {changeHandler}/>
                    {
                        errors.assists?
                        <p>{errors.assists.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='yellowCard'>Yellow Card</label>
                    <input type="radio" className="form-radio-input" name="yellowCard" id="yes" onChange = {changeHandler}/>
                    <input type="radio" className="form-radio-input" name="yellowCard" id="no" onChange = {changeHandler}/>
                    {
                        errors.yellowCard?
                        <p>{errors.yellowCard.message}</p>:
                        null
                    }
                </div>
                <div className='form-group m-3'>
                    <label htmlFor='redCard'>Red Card</label>
                    <input type="radio" className="form-radio-input" name="RedCard" id="yes" onChange = {changeHandler}/>
                    <input type="radio" className="form-radio-input" name="RedCard" id="no" onChange = {changeHandler}/>                    {
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
export default GameForm