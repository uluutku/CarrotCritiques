// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddRestaurantForm from './AddResturantForm';
import RestaurantList from './ResturantList';
import ReviewModal from './ReviewModal';
import Header from './Header';
import Footer from './Footer';
import LoadingPage from './LoadingPage';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  useEffect(() => {
    fetchRestaurants();
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      fetchRestaurants();
    }
  }, [loading]);

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get('http://localhost:3000/restaurants');
      setRestaurants(response.data);
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }
  };

  const addRestaurant = async (name) => {
    try {
      const response = await axios.post('http://localhost:3000/restaurants', { name, ratings: [] });
      setRestaurants([...restaurants, response.data]);
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleSubmitReview = async (restaurantId, rating) => {
    try {
      await axios.put(`http://localhost:3000/restaurants/${restaurantId}`, {
        ...selectedRestaurant,
        ratings: [...selectedRestaurant.ratings, rating]
      });
      fetchRestaurants(); // Fetch updated data after submitting the review
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <>
    {loading ? <LoadingPage /> :     <div> 
    <Header/>
    <div>
      <AddRestaurantForm onSubmit={addRestaurant} />
      <RestaurantList restaurants={restaurants} onRestaurantClick={handleRestaurantClick} />
      {selectedRestaurant && (
        <ReviewModal
          restaurant={selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
          onSubmitReview={handleSubmitReview}
        />
      )}
    </div>
    <Footer></Footer>
    </div>}

    </>
  );
};

export default App;
