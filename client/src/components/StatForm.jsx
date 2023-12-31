import React, { useState } from 'react'
import '../styles/StatForm.css';

const StatForm = (props) => {
    const {initialMinutes, initialGoals, initialAssists, initialYellowCards, initialRedCard, onSubmitProp} = props;
    const [gameStats, setGameStats] = useState({
        minutes: initialMinutes,
        goals: initialGoals,
        assists: initialAssists,
        yellowCards: initialYellowCards,
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

    const onSubmitHandler = e => {
      e.preventDefault();
      onSubmitProp(gameStats);
    };
          
    return (
        <div className="stat-form-container">
          <form className="stat-form" onSubmit={onSubmitHandler}>
            <div className="form-group">
              <label htmlFor="minutes">Minutes</label>
              <input type="number" min="0" max="100" name="minutes" id="minutes" className="form-control" onChange={changeHandler} />
                {
                    errors.minutes?
                    <p>{errors.minutes.message}</p>:
                    null
                }
            </div>
            <div className="form-group">
              <label htmlFor="goals">Goals</label>
              <input type="number" min="0" max="5" name="goals" id="goals" className="form-control" onChange={changeHandler} />
                {
                    errors.goals?
                    <p>{errors.goals.message}</p>:
                    null
                }
            </div>
            <div className="form-group">
              <label htmlFor="assists">Assists</label>
              <input type="number" min="0" max="5" name="assists" id="assists" className="form-control" onChange={changeHandler} />
                {
                    errors.assists?
                    <p>{errors.assists.message}</p>:
                    null
                }
            </div>
            <div className="form-group">
              <label htmlFor="yellowCard">Yellow Card</label>
              <input type="number" min="0" max="2" name="yellowCards" id="yellowCard" className="form-control" onChange={changeHandler}/>
                {
                    errors.yellowCard?
                    <p>{errors.yellowCard.message}</p>:
                    null
                }
            </div>
            <div className="form-group">
              <label htmlFor="yes">Yes</label>
              <input type="radio" className="form-radio-input" name="redCard" id="yes" onChange={changeHandler} value="1"/>
              <label htmlFor="no">No</label>
              <input type="radio" className="form-radio-input" name="redCard" id="no" onChange={changeHandler} value="0"/>
                {
                    errors.redCard?
                    <p>{errors.redCard.message}</p>:
                    null
                }
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      );
    };
export default StatForm