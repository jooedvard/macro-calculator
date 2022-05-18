import React, { Component } from "react";
import {
  FormControl,
  Container,
  Col,
  Row,
  Dropdown,
  DropdownButton,
  InputGroup,
} from "react-bootstrap";
import Recipe from "./Recipe";
import EverytoKaloria from "./EverythingToKaloria";
import axios from "axios";

class FoodApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionResults: [],
      recipes: [],
    };
    this.recipesList = React.createRef();
  }

  searchFood = (keyword) => {
    if (keyword === "") {
      this.setState({ recipes: [] });
    } else {
      axios({
        method: "get",
        url: "https://www.themealdb.com/api/json/v1/1/search.php?s=" + keyword,
      }).then((response) => {
        if (response.data.meals === null) {
          this.setState({ recipes: [] });
        } else {
          this.setState({ recipes: response.data.meals });
        }
      });
    }
  };

  getCategory = (category) => {
    //www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
    axios({
      method:"get",
      url:"https://www.themealdb.com/api/json/v1/1/filter.php?c="+category
    }).then((response)=>{  this.setState({ recipes: response.data.meals }) } );
  }

  onChange = (e) => {
    let keyword = e.target.value;
    this.props.change();
    if (keyword === "") {
      this.setState({ recipes: [] });
    } else {
      this.searchFood(keyword);
    }
  };

  render() {
    return (
      <div className="main">
      
        <div className="main-nav">
          <div className="search-drop">
            <FormControl
              type="search"
              className="search"
              placeholder="Search any food..."
              onChange={(e) => {
                this.onChange(e);
              }}
              onFocus={() => {
                this.props.change();
              }}
            ></FormControl>

            <DropdownButton
              className="drop"
              variant="outline-secondary"
              title="Categories"
            >
              {this.props.categories.map((category, index) => {
                return (
                  <Dropdown.Item key={category.strCategory} onClick={()=>{
                     this.getCategory(category.strCategory)
                  }}>
                    <img src={category.strCategoryThumb} className="category" />
                    <span></span>
                    {category.strCategory}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </div>

          <EverytoKaloria title={"How many calories?"} />
        </div>
        <div className="error badge badge-primary bg-danger">No recipe found!</div>
        <div className="recipies-grid">
          {!this.props.recipesFromProps
            ? this.state.recipes.map((recipe, index) => {
                return (
                  <Recipe index={index} recipe={recipe}>
                    kkkk
                  </Recipe>
                );
              })
            : this.props.recipies.map((recipe, index) => {
                return (
                  <Recipe index={index} recipe={recipe}>
                    kkkk
                  </Recipe>
                );
              })}
        </div>
      </div>
    );
  }
}

export default FoodApi;
