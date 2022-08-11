import React, { useState } from "react";

function RecipeCreate({ addRecipe }) { //component that creates recipe items
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState }); // giving State to our form's data, where the initial state is simply our initial form.

  const handleChange = ({ target }) => {
    //This tracks all changes to the form inputs and changes value of the form elements to match the inputs
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    //submit handler, this will prevent default, run addPosts with the form data as a prop and then reset our form data back to the initial defaults.
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  // When the form is submitted, a new recipe is created, and the form contents cleared.
  // Added the required input and textarea form elements.
  // Added the required submit and change handlers.

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Cuisine"
                onChange={handleChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="URL"
                onChange={handleChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                onChange={handleChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="preparation"
                onChange={handleChange}
                value={formData.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
