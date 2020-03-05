import React from 'react'
import { getQuestions } from "../resources/questions"
import AnswerButton from './AnswerButton'
import NextButton from './NextButton'


class QuestionTab extends React.Component {

  state = {
    questions: getQuestions(),
    questionNumber: 0,
    hasAnswered: false,
    quizIsFinished: false

  };

  clickAnswer = (index) => {
    
    index === this.state.questions[this.state.questionNumber].correctInt ? console.log("CORRECT ANSWER") : console.log('WRONG ANSWER');
    this.state.questions.length - 1 === this.state.questionNumber ? this.setState({quizIsFinished: true}) : undefined
    this.setState({hasAnswered: true})
    
  };

  clickNext = () => {
    this.setState((prevState) => ({
      questionNumber: prevState.questionNumber +1
    }))
    this.setState({hasAnswered: false})
    

  };

  render() {
    return(
      <div className="flex-col">
      <h1>{this.state.questions[this.state.questionNumber].question}</h1>
      <div className="flex-row">
        {this.state.questions[this.state.questionNumber].answers.map((alternative, index) => (
          <AnswerButton
            clickAnswer={this.clickAnswer.bind(this, index)}  //The following binds the index to the clickAnswer function used for onClick in order to get index of clicked element
            key={index}
            answerText={alternative}
            hasAnswered={this.state.hasAnswered}
          />
        ))}
      </div>
      <NextButton style={{visibility: !this.state.hasAnswered && !this.state.quizIsFinished ? "hidden" : "visible"}} clickNext={this.clickNext} hasAnswered={this.state.hasAnswered}/>
      {this.state.quizIsFinished && <h1>GAME OVER</h1>}
    </div>

    )
  }
}


export default QuestionTab