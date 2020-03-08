import React from 'react';
import PlayerReg from './PlayerReg'
import PlayerStart from './PlayerStart';

class StartPage extends React.Component {
  state = {
    playerName: undefined,
    nameEntered: false
  }

  handleRegistration = (playerName) => {
    this.setState(() => ({ playerName: playerName, nameEntered: true }))
  }

  render() {
    return(
      <div>
        <h1>Welcome to the Java Quiz</h1>
        {!this.state.playerName && <PlayerReg handleRegistration={this.handleRegistration}/>}
        {this.state.playerName && <PlayerStart playerName={this.state.playerName}/>}
      </div>
    )
  }

}

export default StartPage;