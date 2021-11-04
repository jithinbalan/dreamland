import '../App.css';
import { useState,useEffect } from 'react';
import Card from './Card';
import Typography from '@mui/material/Typography';

import axios from 'axios'
function App() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>
    axios.get('https://api.eventyay.com/v1/event-types?sort=name')
      .then(response => {
        setEvents(response.data.data)
        setIsLoading(false)
        console.log("events",events);
      })
  , []);
  return (
    <div className="App">
      <Typography   align='center' sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>Events</Typography>
      <div className="media-card">
        {events && <Card Events={events} />}
      </div>
    </div>
  );
}

export default App;
