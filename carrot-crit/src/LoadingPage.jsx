// LoadingPage.jsx
import React from 'react';
import { Typography, LinearProgress, Container } from '@mui/material';
import rabbitImage from './assets/rabbit.jfif';

const useStyles = () => ({
  root: {
    backgroundColor: "#000000e2",
    minHeight: '100vh',
    minWidth: "100vw",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: "column",
    flexWrap: "wrap",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  progress: {
    width: '30%', 
    marginTop: '100px',
  },
});

const LoadingPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" style={classes.root}>
    <Typography sx={{color:"white" ,marginBottom:"50px" , fontSize:"4rem"}} variant="h3">🥕 Carrot Critiques</Typography>
    <br></br>
      <img className="rabbit-photo" src={rabbitImage} alt="Rabbit" />
      <LinearProgress style={classes.progress} />
    </Container>
    
  );
};

export default LoadingPage;
