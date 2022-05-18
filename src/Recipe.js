import React, { Component } from "react";

class Recipe extends Component {
  constructor(props) {
    super(props);
    console.log(this)
  }
  state = {};
  render() {
    return (
      <div key={this.props.index} className="recipe" onClick={()=>{
        if(this.props.recipe.strSource != '')window.open(this.props.recipe.strSource, '_blank');
        let error = document.querySelector(".error");
        error.style.visibility = "visible";
        setTimeout(()=>{error.style.visibility = "hidden"},1000);

      }}>
        <img className="card-img" src={this.props.recipe.strMealThumb}></img>
        <div className="caption">
          <h4 className="text">{this.props.recipe.strMeal}</h4>
          <div className="link-area">
            <a className="link" href={this.props.recipe.strSource}>
              {"Cook"}
            </a>
            <p className="area">{this.props.recipe.strArea}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
