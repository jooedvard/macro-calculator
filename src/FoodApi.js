import React, { Component } from "react";
import { FormControl, Container, Col, Row, FormSelect } from "react-bootstrap";
import "../src/style.css";
import axios from "axios";

class FoodApi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionResults: [],
      recipes: this.props.recipies,
      categories: [],
    
    };
    this.recipesList = React.createRef();
  }

  componentDidMount() {
    this.foodCategories();
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

  searchFood = (keyword) => {
    if (keyword === "") {
      this.setState({ recipes: [] });
    }else{
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
      <Container className="p-4">
        <Row>
          <Row>
            <Col>
              <FormControl
                type="search"
                placeholder="Search any food..."
                onChange={(e) => {
                  this.onChange(e);
                }}
              ></FormControl>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="mt-3">Categories</h3>
              <div className="categories">
                {this.state.categories.map((category, index) => {
                  return (
                    <div key={category.strCategory}>
                      <img
                        src={category.strCategoryThumb}
                        className="category"
                      ></img>
                      <p className="text">{category.strCategory}</p>
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
          <Row className="mt-3 carousel">
            <Col>
              <div className="recipies-grid">
                {!this.props.recipesFromProps
                  ? this.state.recipes.map((recipe, index) => {
                      return (
                        <div key={index} className="recipe">
                          <img
                            className="card-img"
                            src={recipe.strMealThumb}
                          ></img>
                          <div className="caption">
                            <h4 className="text">{recipe.strMeal}</h4>
                            <a className="link" href={recipe.strSource}>
                              {"link"}
                            </a>
                            <p className="area">{recipe.strArea}</p>
                          </div>
                        </div>
                      );
                    })
                  : this.props.recipies.map((recipe, index) => {
                      return (
                        <div key={index} className="recipe">
                          <img
                            className="card-img"
                            src={recipe.strMealThumb}
                          ></img>
                          <div className="caption">
                            <h4 className="text">{recipe.strMeal}</h4>
                            <a className="link" href={recipe.strSource}>
                              {"link"}
                            </a>
                          </div>
                        </div>
                      );
                    })}
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default FoodApi;
