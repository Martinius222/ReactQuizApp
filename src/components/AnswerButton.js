import React from 'react'

const AnswerButton = (props) => (
  
    <button onClick={props.clickAnswer} className="answer-btns" disabled={props.hasAnswered} >{props.answerText} </button>
  
)

export default AnswerButton;

