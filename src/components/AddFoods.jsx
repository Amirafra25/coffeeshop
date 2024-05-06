import React, { useState } from "react";
import { categories } from "../services/fakeCategories";
import { getFoods } from "../services/fakeFoods";
import "./style/style.css";

export default function AddFoods() {
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddFood = () => {
    const newFood = {
      name: foodName,
      price: price,
      category: selectedCategory,
    };

    getFoods.push(newFood);
  };

  return (
    <div className="containerr">
      <h1 className="h1-addfood">Add Foods</h1>

      <form className="form-container">
        <div className="container-input">
          <span>Add Food</span>
          <input
            className="input"
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
          />
        </div>

        <div className="container-input">
          <span>Price</span>
          <input
            className="input"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="container-input">
          <span>Category</span>
          <select
            className="input"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
      <button className="btnn" onClick={handleAddFood}>
        Add Food
      </button>
    </div>
  );
}
