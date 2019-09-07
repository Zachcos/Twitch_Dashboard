import React, { useState, useEffect } from 'react';
import api from '../api';

function Games() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get("https://api.twitch.tv/helix/games/top");
      let dataArray = result.data.data;
      let finalArray = dataArray.map(game => {
        let newURL = game.box_art_url
          .replace("{width}", "300")
          .replace("{height}", "300")
        game.box_art_url = newURL;
        return game
      });
      setGames(finalArray)
    };
    fetchData();
  }, []);

  return <h3>This is the Games component</h3>
};

export default Games;