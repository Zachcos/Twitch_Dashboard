import React, { useState, useEffect } from 'react';
import api from '../api';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      console.log(result.data);
    }
    fetchData();
  })

  return <h3>This is the Games component</h3>
};

export default Games;