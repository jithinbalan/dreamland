import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";    
import PageNotFound from './PageNotFound'

export default function EventDetail() {
    const [event, setEvent] = useState(null);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();

    useEffect(() =>
        axios.get(`https://api.eventyay.com/v1/event-types/${params.id}`)
        .then(response => {
            setEvent(response.data);
            setIsLoading(false);
        }).catch(error => {
            setIsLoading(true);
            setFetchError(error.response.data)
            console.log(fetchError)
         })
    , []);
  return (
    <div className="media-card">
        {!isLoading && 
            <Grid container spacing={{ xs: 12, md: 12 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                <Card sx={{ maxWidth: 500 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {event.data.attributes.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {JSON.stringify(event)}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        }
        {fetchError && 
        <Grid container spacing={{ xs: 12, md: 12 }} columns={{ xs: 12, sm: 12, md: 12 }}>
            <Card sx={{ maxWidth: 500 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {fetchError}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {JSON.stringify(event)}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        
        }

    </div>
  );
}
