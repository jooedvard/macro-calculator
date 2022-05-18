import React, { Component } from "react";
import Ingredient from "./Ingredient";
import axios from "axios";
class IngredientsList extends Component {
  state = {
    ingredients: [],
    searchable:[]
  };

  componentDidMount() {
    this.getList();
  }

  getList() {
    axios({
      method: "get",
      url: "https://www.themealdb.com/api/json/v1/1/list.php?i=list",
    }).then((response) => {
      let allIngredients = response.data.meals;
      this.setState({ ingredients: allIngredients });
    });
  }

  renderList=(list)=>{
    return (
      <div className="ingredients">
        <h4>Ingredients</h4>
        <input
          type={"search"}
          className="search-i"
          placeholder="Search any ingredients"
          onChange={(e)=>{this.onSearch(e)}}
        />
        <ul className="p-0">
          {list.map((ingredient) => {
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
    )
  }

  onSearch = (e) => {
    
    let searchable = e.target.value;
    searchable =  searchable.replace(searchable.charAt(0),searchable.charAt(0).toUpperCase())
    let filtered = this.state.ingredients.filter(ingredient=>{
      return ingredient.strIngredient.includes(searchable);
    });
    if(searchable === ""){
      this.getList();
    }
    this.setState({ searchable: filtered });
  };

  render() {
    if(this.state.searchable.length>0){
      return this.renderList(this.state.searchable);
    }
    
    return this.renderList(this.state.ingredients);
  }
}

export default IngredientsList;
