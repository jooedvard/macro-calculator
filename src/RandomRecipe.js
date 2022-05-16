import React, { Component } from "react";
import {Badge} from 'react-bootstrap';
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
        <ul className="mt-5 randomfood-ingredients">
    
            {this.props.ingredients.map((ingredient,index)=>{
                return <li key={ingredient+index} className="ingredients-measures"><span>{ingredient}</span><span className="measures"> {this.props.measures[index]}</span></li>
            })}
        </ul>
        <div>
            <a href={this.props.meal.strSource} className="btn btn-warning btn-sm randomfood-button">Cook It!</a>
        </div>
      </div>
    );
  }
}

export default RandomRecipe;
