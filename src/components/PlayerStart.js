import React from 'react';
import { Link } from 'react-router-dom';

const PlayerStart = (props) => (
  <div>
    <div className="flex-col input-area">
      <h2>Hey there {props.playerName}! Ready?</h2>
        <Link to="/quiz"><button className="startBtn">Oh yeah!</button></Link>
    </div>
  </div>
)

export default PlayerStart