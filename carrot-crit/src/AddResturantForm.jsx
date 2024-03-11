import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { orange } from "@mui/material/colors";

const AddRestaurantForm = ({ onSubmit }) => {
  const [restaurantName, setRestaurantName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!restaurantName.trim()) return;
    onSubmit(restaurantName);
    setRestaurantName("");
  };

  return (
    <div className="new-resturant-form-container">
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center" }}
      >
        <TextField
          type="text"
          value={restaurantName}
          onChange={(e) => setRestaurantName(e.target.value)}
          label="Eklenecek restoran adı girin."
          variant="filled"
          color="success"
          fullWidth
          style={{ marginRight: "10px" }}
        />
        <Button type="submit" variant="contained" color="primary">
          Yeni Restoran Ekle
        </Button>
      </form>
    </div>
  );
};

export default AddRestaurantForm;
