import React, { Component } from "react";

class RandomRecipe extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    return (
      <div className="randomfood">
        <h4>What should I eat today?</h4>
        <img src={this.props.meal.strMealThumb} />
        <p className="randomfood-name">{this.props.meal.strMeal}</p>
        <div><span>Category: </span><span className="category"> {this.props.category} </span></div>
      </div>
    );
  }
}

export default RandomRecipe;
