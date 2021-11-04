import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(Events) {
  return (
    
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
                Page Not Found
                </Typography>
            </CardContent>
        </Card>
  );
}
