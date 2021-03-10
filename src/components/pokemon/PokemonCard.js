import React, { Component } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import spinner from "../pokemon/Rainbow.gif";
import { Card } from "react-bootstrap";

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;
const Cards = styled.div`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.24), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
class PokemonCard extends Component {
  state = {
    name: "",
    imageURL: "",
    pokemonIndex: "",
    imageLoading: true,
    toManyRequest: false,
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageURL = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    this.setState({
      name,
      imageURL,
      pokemonIndex,
    });
  }

  render() {
    // const name = this.props.name;
    // const url = this.props.url;

    return (
      <div className="col-md-3 col-sm-6 mb-5">
        <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
          <Cards className="card">
            <h5 className={"card-header"}>{this.state.pokemonIndex}</h5>
            {this.state.imageLoading ? (
              <img
                src={spinner}
                style={{ width: "2em", height: "2em" }}
                className={"card-img-top rounded mx-auto d-block mt-2"}
              />
            ) : null}
            <Sprite
              className="card-img-top rounded mx-auto mt-2"
              onLoad={() => this.setState({ imageLoading: false })}
              onError={() => this.setState({ toManyRequest: true })}
              src={this.state.imageURL}
              style={
                this.state.toManyRequest
                  ? { display: "none" }
                  : this.state.imageLoading
                  ? null
                  : { display: "block" }
              }
            />
            {this.state.toManyRequest ? (
              <h6 className={"mx-auto"}>
                <span className={"badge badge-danger mt-2 "}>
                  To Many Request
                </span>
              </h6>
            ) : null}
            <div className="card-body mx-auto">
              <h6 className="card-title">
                {this.state.name
                  .toLowerCase()
                  .split(" ")
                  .map(
                    (letter) =>
                      letter.charAt(0).toUpperCase() + letter.substring(1)
                  )
                  .join(" ")}
              </h6>
            </div>
          </Cards>
        </StyledLink>
      </div>
    );
  }
}

export default PokemonCard;
