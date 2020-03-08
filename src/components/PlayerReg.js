import React from 'react';


export default class PlayerReg extends React.Component {
  state = {   
    error: undefined
    
  };

  handleRegistration = (e) => {
    e.preventDefault()
    const playerName = e.target.elements.nameInput.value.trim();

    if(playerName) {
      this.props.handleRegistration(playerName);
      e.target.reset();
    }
  }

  render() {
    return(
      <div>
        
        <div className="flex-col input-area">
          <h2>Please enter your name</h2>
          <form onSubmit={this.handleRegistration}>
              <input className="input-field" type="text" name="nameInput"/>
              <button className="inputBtn">Submit</button>
          </form>
        </div>

      </div>
    )
  }
}
