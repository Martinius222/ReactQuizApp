import React from 'react';

const QuestionCount = (props) => (
  <h1 className="bold">Question number {props.number} out of {props.total}</h1>
)

export default QuestionCount