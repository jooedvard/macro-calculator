import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";

class EverytoKaloria extends Component {
  constructor() {
    super();
    this.calories = React.createRef();
    this.protein = React.createRef();
    this.carbs = React.createRef();
    this.fat = React.createRef();
    this.sugar = React.createRef();

    this.state = {
      adatok: [],
      ertek: 0
    };

  }

  FoodToCalorie = (e) => {
   

    let adatok = [
      
      this.protein.current.value * 4,
      this.carbs.current.value *4,
      this.fat.current.value*9,
      this.sugar.current.value*4,
    ];


    let value = 0;
    adatok.forEach(adat=> value += adat);
    this.calories.current.value = value +" calories"
  };

  

  render() {
    return (
      <Container className="mt-3">
    

        <Container>
          <Row>
            <Col className="d-flex">
              <Image
              className="p-2"
                thumbnail
                fluid
                width={"50px"}
                height={"50px"}
                src={"kepek/strong.png"}
              ></Image>
              <FormControl
                type="number"
                onChange={(e)=>{this.FoodToCalorie(e)}}
                id="protein"
                ref={this.protein}
                placeholder="Protein"
              ></FormControl>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className="d-flex">
              <Image
              className="p-2"
                thumbnail
                fluid
                width={"50px"}
                height={"50px"}
                src={"kepek/carb.png"}
              ></Image>
              <FormControl
                onChange={(e)=>{this.FoodToCalorie(e)}}
                ref={this.carbs}
                type="number"
                id="carbs"
                placeholder="Carbs"
              ></FormControl>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className="d-flex">
              <Image
              className="p-2"
                thumbnail
                fluid
                width={"50px"}
                height={"50px"}
                src={"kepek/trans-fats-free.png"}
              ></Image>
              <FormControl
                 onChange={(e)=>{this.FoodToCalorie(e)}}
                ref={this.fat}
                type="number"
                id="fat"
                placeholder="Fat"
              ></FormControl>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col className="d-flex">
              <Image
              className="p-2"
                thumbnail
                fluid
                width={"50px"}
                height={"50px"}
                src={"kepek/sugar-cube.png"}
              ></Image>
              <FormControl
                 onChange={(e)=>{this.FoodToCalorie(e)}}
                ref={this.sugar}
                type="number"
                id="sugar"
                placeholder="Sugar"
              ></FormControl>
            </Col>
          </Row>
        </Container>

        <Container  className="mb-3">
          <Row>
            <Col className="d-flex">
            <Image
            className="p-2"
                thumbnail
                fluid
                width={"50px"}
                height={"50px"}
                src={"kepek/calories.png"}
              ></Image>
              <FormControl
                ref={this.calories}
                type="text"
                id="calories"
                disabled
                
              ></FormControl>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default EverytoKaloria;
