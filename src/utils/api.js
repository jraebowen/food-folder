const baseUrl = "http://localhost:3005";

export const checkResponse = async (res) => {
  if (res.ok) {
    return res.json();
  }
  let errorMessage = `Something went wrong: ${res.status}`;
  try {
    const data = await res.json();
    if (data?.message) errorMessage = data.message;
  } catch (err) {}
  throw new Error(errorMessage);
};

export const getAllRecipes = async () => {
  try {
    const res = await fetch(`${baseUrl}/recipes`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await checkResponse(res);
  } catch (err) {
    console.error("Error fetching recipes:", err);
    throw err;
  }
};

export const getSingleRecipe = async (recipeId) => {
  try {
    const res = await fetch(`${baseUrl}/recipes/${recipeId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await checkResponse(res);
  } catch (err) {
    console.error("Error fetching recipe:", err);
    throw err;
  }
};

export const deleteRecipe = async (recipeId) => {
  try {
    const res = await fetch(`${baseUrl}/recipes/${recipeId}`, {
      method: "DELETE",
    });
    return await checkResponse(res);
  } catch (err) {
    console.error("Error deleting recipe:", err);
    throw err;
  }
};

export const updateRecipe = async (recipeId, updatedData) => {
  try {
    const res = await fetch(`${baseUrl}/recipes/${recipeId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    return await checkResponse(res);
  } catch (err) {
    console.error("Error updating recipe:", err);
    throw err;
  }
};

export const createRecipe = async (recipe) => {
  try {
    const res = await fetch(`${baseUrl}/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    return await checkResponse(res);
  } catch (err) {
    console.error("Error creating recipe:", err);
    throw err;
  }
};
