//library imports
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

//css import
import "./App.css";

//component import
import Navigation from "../Navigation/Navigation";
import Main from "../Main/Main";
import Recipes from "../Recipes/Recipes";
import MealPlan from "../MealPlan/MealPlan";
import Footer from "../Footer/Footer";

//api import
import { importFromGoogle } from "../../utils/googleApi.js";
import {
  getAllRecipes,
  getSingleRecipe,
  updateRecipe,
  deleteRecipe,
  createRecipe,
} from "../../utils/api.js";

function App() {
  //states
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState();

  //Render all recipes on load
  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data);
      } catch (err) {
        console.error("Failed to load recipes", err);
      }
    };

    loadRecipes();
  }, []);

  //delete recipe
  const handleRecipeDelete = async (recipeId) => {
    try {
      await deleteRecipe(recipeId);
      setRecipes((prevItems) =>
        prevItems.filter((item) => item._id !== recipeId)
      );
    } catch (err) {
      console.error("Failed to delete recipe:", err);
    }
  };

  //update Recipe
  const handleUpdateRecipe = async (data) => {
    const updatedData = {
      title: data.title ?? recipe.title,
      servings: data.servings ?? recipe.servings,
      ingredients: data.ingredients ?? recipe.ingredients,
      directions: data.directions ?? recipe.directions,
    };
    try {
      const updatedRecipe = await updateRecipe(recipeId, updatedData);
      setRecipe(updatedRecipe);
    } catch (err) {
      console.error("Failed to update recipe:", err);
    }
  };

  const handleCreateRecipe = async (data) => {
    try {
      const newRecipe = await createRecipe(data);
      setRecipes((prevItems) => [newRecipe, ...prevItems]);
    } catch (err) {
      console.error("Failed to create recipe:", err);
    }
  };

  return (
    <div className="page">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Main></Main>} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/meal-plan" element={<MealPlan />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
