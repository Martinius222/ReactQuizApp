import React from 'react'


const NextButton = (props) => (
  <div>
    <button onClick={props.clickNext} className="btns" disabled={!props.hasAnswered}>NEXT QUESTION</button>
  </div>
)

export default NextButton