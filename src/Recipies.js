import React, { Component } from "react";
import FoodApi from "./FoodApi";
import IngredientsList from "./IngredientsList";
import KaloriaToEverything from "./KaloriaToEverything";
import EverytoKaloria from "./EverythingToKaloria";
import axios from "axios";
import RandomRecipe from "./RandomRecipe";

class Recipies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipies: [],
      recipesFromProps: false,
      randomfood: [],
      categories: [],
      rndFoodCategory: "",
      rndFoodIngredients: [],
    };
  }

  componentDidMount() {
    this.foodCategories();
  }

  foodCategories = () => {
    axios({
      method: "get",
      url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    })
      .then((response) => {
        if (response.data.meals === null) {
          this.setState({ categories: [] });
        } else {
          this.setState({ categories: response.data.categories });
        }
      })
      .then(() => {
        this.getRandomFood();
      });
  };

  IngredientsClick = (ingredient) => {
    let recipes = [];
    axios({
      method: "get",
      url: "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient,
    }).then((response) => {
      response.data.meals.forEach((data) => {
        let recipe = data.strMeal;
        axios({
          method: "get",
          url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + recipe,
        }).then((response) => {
          recipes.push(response.data.meals[0]);
          this.setState({ recipies: [...recipes], recipesFromProps: true });
        });
      });
    });
  };

  getRandomFood() {
    axios({
      url: "https://www.themealdb.com/api/json/v1/1/random.php",
      method: "get",
    }).then((response) => {
      let ingredients = [];
      let measures = [];
      for (const key in response.data.meals[0]) {
        if (Object.hasOwnProperty.call(response.data.meals[0], key)) {
          let obj = { ingredient: "", measure: "" };
          if (
            key.includes("Ingredient") &&
            response.data.meals[0][key] !== null &&
            response.data.meals[0][key] != ""
          ) {
            const element = response.data.meals[0][key];

            ingredients.push(element);
          }
          if (
            key.includes("Measure") &&
            response.data.meals[0][key] !== null &&
            response.data.meals[0][key] != "" &&
            response.data.meals[0][key] != " "
          ) {
            const element = response.data.meals[0][key];

            measures.push(element);
          }
        }
      }
      console.log(ingredients);
      this.setState({
        randomfood: response.data.meals[0],
        rndFoodCategory: response.data.meals[0].strCategory,
        rndFoodIngredients: ingredients,
        rndFoodMeasures : measures
      });
    });
  }

  setRecipesFromProps = (value) => {
    this.setState({ recipesFromProps: value });
  };

  render() {
    return (
      <div>
        <FoodApi
          recipies={this.state.recipies}
          recipesFromProps={this.state.recipesFromProps}
          categories={this.state.categories}
          change={() => {
            this.setRecipesFromProps(false);
          }}
        ></FoodApi>
        <IngredientsList
          choose={(ingredient) => {
            this.IngredientsClick(ingredient);
          }}
        ></IngredientsList>

        <EverytoKaloria title={"How many calories?"} />
        <RandomRecipe
          meal={this.state.randomfood}
          category={this.state.rndFoodCategory}
          ingredients={this.state.rndFoodIngredients}
          measures={this.state.rndFoodMeasures}
        ></RandomRecipe>
      </div>
    );
  }
}

export default Recipies;
