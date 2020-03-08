import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StartPage from '../components/StartPage';
import JavaQuiz from '../components/JavaQuiz';
import ResultsPage from '../components/ResultsPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={StartPage} exact={true} />
        <Route path="/quiz" component={JavaQuiz} />
        <Route path="/results" component={ResultsPage} />
  
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;