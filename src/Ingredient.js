import axios from "axios";
import React, { Component } from "react";

class Ingredient extends Component {
  constructor(props) {
    super(props);
    this.src =
      "https://www.themealdb.com/images/ingredients/" +
      this.props.name +
      "-Small.png";
    this.state = {
      loaded: true,
    };
  }

  click = ()=>{
    //www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
    
  }

  render() {
    if (this.state.loaded) {
      return (
        <li className="ingredient" onClick={()=>{
          this.props.choose(this.props.name)
        }}>
          <img
            src={this.src}
            
            onError={() => {
              this.setState({ loaded: false });
            }}
          ></img>
          <span>{this.props.name}</span>
        </li>
      );
    }
  }
}

export default Ingredient;
