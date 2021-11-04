import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import EventDetail from './EventDetailPage';
import { Link } from "react-router-dom";

export default function BasicCard(Events) {
    // console.log(Events)
    const fetchEventDetail = (id) =>{
        console.log(id)
    }
  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Events.Events.map((event)=>(
                <Grid item xs={2} sm={4} md={4} key={event.id}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 19 }} color="text.secondary" gutterBottom>
                            {event.attributes.name}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" >
                            <Link to={`/event/${event.id}`}>
                                Learn More
                            </Link>
                            </Button>
                            
                        </CardActions>
                    </Card>
                </Grid>
            ))
        }
    </Grid>
  );
}
