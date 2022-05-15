import React, { Component } from "react";

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.src = "https://www.themealdb.com/images/ingredients/" + this.props.name +"-Small.png";
    this.state = {
        loaded:true
    }
  }

  render() {
    if(this.state.loaded){
        return (
            <li className="ingredient">
              <img src={this.src} onError={()=>{this.setState({loaded:false})}}></img>
              <span>{this.props.name}</span>
            </li>
          );
    }
    
  }
}

export default Ingredient;
