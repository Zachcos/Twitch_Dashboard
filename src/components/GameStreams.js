import React from 'react';

function GameStreams({ match, location }) {
  return (
    <div>
      <h3>This is the GameStreams component</h3>
      <li>{match.params.id}</li>
      <li>{location.state.gameID}</li>
    </div>
  )
};

export default GameStreams;