import React from 'react'

const AnswerButton = (props) => (
  <div>
    <button onClick={props.clickAnswer} className="btns" disabled={props.hasAnswered} >{props.answerText} </button>
  </div>
)

export default AnswerButton;

