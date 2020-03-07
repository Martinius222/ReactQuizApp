import React from 'react'


const NextButton = (props) => (
  
    <button onClick={props.clickNext} 
    className={!props.hasAnswered && !props.isFinished ? "next-btn hidden" : "next-btn" } 
    disabled={!props.hasAnswered}>NEXT QUESTION</button>
  
)

export default NextButton