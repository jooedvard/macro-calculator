import React, { Component } from "react";
import FoodApi from "./FoodApi";
import IngredientsList from "./IngredientsList";
import KaloriaToEverything from "./KaloriaToEverything";
import EverytoKaloria from "./EverythingToKaloria";
import axios from "axios";
class Recipies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipies: [],
      recipesFromProps:false
    };
  }

  IngredientsClick = (ingredient) => {
    axios({
        method: "get",
        url: "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredient,
      }).then((response)=> {
        this.setState({ recipies: response.data.meals,   recipesFromProps:true });
    
      });
  };

  setRecipesFromProps = ( value )=>{
        this.setState({  recipesFromProps:value })
  }

  render() {
    return (
      <div>
        <FoodApi recipies={this.state.recipies}   recipesFromProps={this.state.recipesFromProps} change={()=>{
            this.setRecipesFromProps(false)
        }}></FoodApi>
        <IngredientsList
          choose={(ingredient) => {
            this.IngredientsClick(ingredient);
          }}
        ></IngredientsList>
        <KaloriaToEverything title={"Nutritions"} />
        <EverytoKaloria title={"How many calories?"} />
      </div>
    );
  }
}

export default Recipies;
