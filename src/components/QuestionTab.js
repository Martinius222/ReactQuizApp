import React from 'react'
import { getQuestions } from "../resources/questions"
import AnswerButton from './AnswerButton'
import NextButton from './NextButton'
import Explanation from './Explanation';
import QuestionCount from './QuestionCount';
import ResultsButton from './ResultsButton';


class QuestionTab extends React.Component {

  state = {
    questions: getQuestions(),
    questionNumber: 0,
    hasAnswered: false,
    quizIsFinished: false,
    correctness: undefined,
    score: 0

  };

  clickAnswer = (index) => {
    
    if(index === this.state.questions[this.state.questionNumber].correctInt) {
      this.setState((prevState) => ({score: prevState.score+ 1, correctness: "correct"}))
      console.log(this.state.correctness)
    } else {
      this.setState(() => ({correctness: "incorrect"}))
      console.log(this.state.correctness)
    }
    
    this.state.questions.length - 1 === this.state.questionNumber ? this.setState({quizIsFinished: true}) : undefined
    this.setState({hasAnswered: true})
    
  };

  clickNext = () => {
    this.setState((prevState) => ({
      questionNumber: prevState.questionNumber + 1 
    }))
    this.setState({hasAnswered: false})
    
  };

  render() {
    return(
      
      <div className="flex-col">
      <QuestionCount number={this.state.questionNumber + 1} total={this.state.questions.length}/>
          <h1 className="regular">{this.state.questions[this.state.questionNumber].question}</h1>
          <div className="flex-col explanation">
            {this.state.hasAnswered && <Explanation explanationText={this.state.questions[this.state.questionNumber].explanation}/>}
          </div>
          <div className="flex-row wrap">
      
          {this.state.questions[this.state.questionNumber].answers.map((alternative, index) => (
            <AnswerButton
              clickAnswer={this.clickAnswer.bind(this, index)}  
              key={index}
              answerText={alternative}
              hasAnswered={this.state.hasAnswered}
            />
          ))}
        </div>
        {!this.state.quizIsFinished && <NextButton clickNext={this.clickNext} hasAnswered={this.state.hasAnswered} isFinished={this.state.quizIsFinished}/>}
        {this.state.quizIsFinished && <ResultsButton/>}
      </div>

    )
  }
}


export default QuestionTab