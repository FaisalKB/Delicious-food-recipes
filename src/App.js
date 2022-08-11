import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  const addRecipe = (data) => {
    setRecipes([...recipes, data]); // If we need to add a recipe, this function uses setRecipes to alter the state to an array where we "spread" exisiting recipes, then add the data put into the callback function.
  };

  function deleteRecipe(targetIndex) {
    //Deletes recipe based on the index filtered, if the index is falsy then it's excluded from the array.
    setRecipes(recipes.filter((_, index) => index !== targetIndex));
  }

  // Added the ability for the <RecipeList /> component to list and delete an existing recipe.
  // Added the ability for the <RecipeCreate /> component to create new recipes.

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;
