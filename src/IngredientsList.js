import React, { Component } from "react";
import Ingredient from "./Ingredient";
import axios from "axios";
class IngredientsList extends Component {
  state = {
    ingredients: [],
  };

  componentDidMount() {
    axios({
      method: "get",
      url: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    }).then((response) => {
      let allIngredients = response.data.meals;
      this.setState({ ingredients: allIngredients });
    });
  }



  render() {
    return (
      <div className="ingredients">
        <h4>Ingredients</h4>

        <ul>
          {this.state.ingredients.map((ingredient) => {
            return (
              <Ingredient
                key={ingredient.strIngredient}
                name={ingredient.strIngredient}
                id={ingredient.idIngredient}
                choose={this.props.choose}
              ></Ingredient>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default IngredientsList;
