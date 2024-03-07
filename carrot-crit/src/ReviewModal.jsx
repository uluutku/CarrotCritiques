import React, { useState } from 'react';
import { Typography, Rating, Card, CardContent, Button } from '@mui/material';

const ReviewModal = ({ restaurant, onClose, onSubmitReview }) => {
  const [rating, setRating] = useState(5); // Default rating

  const handleSubmit = () => {
    onSubmitReview(restaurant.id, rating);
    onClose();
  };

  return (
    <Card sx={{ backgroundColor: "#f27900e0" , textAlign:"center"}}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Gurme Davşanın Kurbanı: {restaurant.name} Restoranı
        </Typography>
        <br></br>
        <Typography component="legend">Davşan bu restorana kaş puan veriyor?</Typography>
        <Rating 
          sx={{ marginTop: '20px' }}
          name="simple-controlled"
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <br>
        </br>
        <Button sx={{ marginLeft: '10px' , marginTop: '20px'}} variant="contained" onClick={handleSubmit}>Puanla</Button>
      </CardContent>
    </Card>
  );
};

export default ReviewModal;
