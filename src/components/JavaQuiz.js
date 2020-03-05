import React from 'react';
import QuestionTab from './QuestionTab';



class JavaQuiz extends React.Component {
  
  render() {
    const appTitle = "The Java Quiz"
    return (
      <div className="flex-col">
        <h1>{appTitle}</h1>
        <QuestionTab />
      </div>
    )
      
  }
}

export default JavaQuiz;