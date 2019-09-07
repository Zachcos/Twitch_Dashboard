import React, { useState, useEffect } from 'react';
import api from '../api';

function Streams() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await api.get('https://api.twitch.tv/helix/streams')
      let dataArray = result.data.data;
      let gameIDs = dataArray.map(stream => {
        return stream.game_id
      })
      let baseURL = 'https://api.twitch.tv/helix/games?'
      let queryParams = ''
      gameIDs.map(id => {
        return (queryParams = queryParams + `id=${id}&`)
      });

      let finalURL = baseURL + queryParams;
      let gameNames = await api.get(finalURL);
      let gameNameArr = gameNames.data.data;
      let finalArray = dataArray.map(stream => {
        stream.gameName = '';
        gameNameArr.map(name => {
          if(stream.game_id === name.id) {
            return stream.gameName = name.name
          }
        });

        let newURL = stream.thumbnail_url
          .replace("{width}", "300")
          .replace("{height}", "300")
        stream.thumbnail_url = newURL
        return stream;
      });
      setChannels(finalArray);
    }
    fetchData();
  }, [])

  return <h3>This is the Streams component</h3>
};

export default Streams;