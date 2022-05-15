import React, { Component } from "react";
import { FormControl } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Container, Row, Col } from "react-bootstrap";

class KaloriaToEverything extends Component {
  constructor() {
    super();
    this.calories = React.createRef();
    this.protein = React.createRef();
    this.carbs = React.createRef();
    this.fat = React.createRef();
    this.sugar = React.createRef();

    this.state = {
      adatok: [],
    };
  }

  foodEnergy = (e) => {
    let ertek = e.target.value;

    this.setValue(this.protein.current, ertek / 4 + " g");
    this.setValue(this.carbs.current, ertek / 4 + " g");
    this.setValue(this.fat.current, ertek / 9 + " g");
    this.setValue(this.sugar.current, ertek / 4 + " g");
    let adatok = [
      this.calories.current.value,
      this.protein.current.value,
      this.carbs.current.value,
      this.fat.current.value,
      this.sugar.current.value,
    ];
    this.setState({
      adatok: adatok,
    });
  };

  setValue(ref, value) {
    ref.value = value;
  }

  render() {
    return (
      <Container className="mt-1">
        <h3 className="p-3">{this.props.title}</h3>
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
                type="number"
                id="calories"
                onChange={(e) => this.foodEnergy(e)}
                placeholder="Food Energy (kalories)"
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
                src={"kepek/strong.png"}
              ></Image>
              <FormControl
                type="text"
                disabled
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
                disabled
                ref={this.carbs}
                type="text"
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
                disabled
                ref={this.fat}
                type="text"
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
                disabled
                ref={this.sugar}
                type="text"
                id="sugar"
                placeholder="Sugar"
              ></FormControl>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default KaloriaToEverything;
