import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const SearchContainer = (props) => {
  const APP_ID = "74d885f3";
  const APP_KEY = "fe6738c7675a694485744dd422e1bfb3";
  //normally use environment tools to protect its privacy for api request

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  //after you hit submit the chicken value (query) changes depending on input
  useEffect(() => {
    getRecipes();
  }, [query]);

  //requesting an external api, make sure to use async/await
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  //value of the input
  const updateSearch = (e) => {
    setSearch(e.target.value);
    //console.log(search);
  };

  //dont fetch until user hits submit
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    //after you submit, it returns search space value to empty string
    setSearch(" ");
  };

  // const handleFavorite = () => {
  //   console.log("click");
  // };

  return (
    <div className="SearchContainer">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="form-control"
          type="text"
          placeholder="Search foods"
          aria-label="Search"
          onChange={updateSearch}
        />
        {/* <button className="search-button" type="submit">
          Search
        </button> */}
      </form>
      <div className="recipies">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.id}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            totalNutrients={recipe.recipe.totalNutrients}
            addFave={props.addFave}
            // handleFavorite={handleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchContainer;
