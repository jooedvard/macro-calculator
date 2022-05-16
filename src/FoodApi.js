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
      <Container className="mt-3" >
        <Row>
          <Row className="nav m-2">
            <Col >
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
            </Col>
            <Col className="w-100">
                
              
                <DropdownButton
                  variant="outline-secondary"
                  title="Categories"

                >
                  {this.props.categories.map((category, index) => {
                    return (
                      <Dropdown.Item key={category.strCategory}>
                        <img src={category.strCategoryThumb} className="category"/>
                        <span></span>
                        {category.strCategory}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
            
            </Col>
          </Row>
          
          <Row className="mt-3 ">
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
                            <div className="link-area">
                            <a className="link" href={recipe.strSource}>
                              {"Cook"}
                            </a>
                            <p className="area">{recipe.strArea}</p>
                            </div>
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
                            <div className="link-area">
                            <a className="link" href={recipe.strSource}>
                              {"Cook"}
                            </a>
                            <p className="area">{recipe.strArea}</p>
                            </div>
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
