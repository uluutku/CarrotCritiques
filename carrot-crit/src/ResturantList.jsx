import React from "react";
import { Card, CardContent, Typography, Rating } from "@mui/material";

const RestaurantList = ({ restaurants, onRestaurantClick }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: "#fc8200c7",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography sx={{ padding: "20px", fontWeight: "bold" }} variant="h4">
        Restoran Listesi
      </Typography>
      <div className="resturant-item-renderer">
        {restaurants.map((restaurant) => (
          <div className="single-resturant-item">
            <Card
              key={restaurant.id}
              onClick={() => onRestaurantClick(restaurant)}
              sx={{
                margin: "10px",
                minHeight: "130px",
                cursor: "pointer",
                backgroundColor: "#d18a07",
                maxWidth: "500px",
                textAlign: "center",
                padding: "20px",
                boxShadow: "1px 1px 5px",
                borderRadius: "20px",
              }}
            >
              <CardContent>
                <Typography sx={{ fontWeight: "bold" }} variant="h5">
                  {restaurant.name} Restoranı
                </Typography>
                {restaurant.ratings && restaurant.ratings.length > 0 ? (
                  <div>
                    <br />
                    <Typography variant="h6">🐇Davşan Puanı:</Typography>
                    <Rating
                      name={`rating-${restaurant.id}`}
                      value={restaurant.ratings[restaurant.ratings.length - 1]}
                      sx={{ marginTop: "10px" }}
                      readOnly
                    />
                  </div>
                ) : (
                  <div>
                    <br></br>{" "}
                    <Typography variant="h6">
                      Davşan henüz burayı puanlamadı.
                    </Typography>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default RestaurantList;
