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
      randomfood:[],
      categories: [],
      rndFoodCategory:""
    };
  }

  componentDidMount(){
  
    this.foodCategories();
    this.getRandomFood();
  }

  foodCategories = () => {
    axios({
      method: "get",
      url: "https://www.themealdb.com/api/json/v1/1/categories.php",
    }).then((response) => {
      if (response.data.meals === null) {
        this.setState({ categories: [] });
      } else {
        this.setState({ categories: response.data.categories });
      }
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
     
      
      this.setState({randomfood: response.data.meals[0],rndFoodCategory:response.data.meals[0].strCategory})
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
        <RandomRecipe meal={this.state.randomfood} category={this.state.rndFoodCategory}></RandomRecipe>
      </div>
    );
  }
}

export default Recipies;
