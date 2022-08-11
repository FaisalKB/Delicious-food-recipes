import React from "react";

function RecipeList({ recipes, deleteRecipe }) { //Component to list the recipes and allow you to delete them.

  const rows = recipes.map(({ name, cuisine, photo, ingredients, preparation }, index) => ( //Variable that houses our table body element
    <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td> <img src = {photo}/></td>
      <td className="content_td"><p>{ingredients}</p></td>
      <td className="content_td"><p>{preparation}</p></td>
      <td> <button name="delete" onClick={() => deleteRecipe(index)} >Delete</button> </td>
    </tr>
  ));
  
  //  Displays the list of recipes using the structure of table that is provided.
  //  Each recipe row has a delete button that deletes the post when clicked.

  return ( //TH's represent header items and {rows} represent the variable of our items compiled in a table.
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
