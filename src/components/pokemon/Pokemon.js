import React, { Component } from "react";
import axios from "axios";

class Pokemon extends Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageURL: "",
    description: "",
    types: [],
    moves: [],
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: "",
    },
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    //URL for Pokemon inforation
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;
    const pokemonMovesURL = `https://pokeapi.co/api/v2/type/${pokemonIndex}/`;
    const pokemonTypesURL = `https://pokeapi.co/api/v2/move/${pokemonIndex}/`;

    //get Pokemon information
    const pokemonRes = await axios.get(pokemonURL);
    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";
    pokemonRes.data.stats.map((stat) => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
      }
    });

    const name = pokemonRes.data.name;
    this.setState({ name });
    const imageURL = pokemonRes.data.sprites.front_default;

    const moves = pokemonRes.data.moves.map((move) => move.move.name);
    const types = pokemonRes.data.types.map((type) => type.type.name);

    this.setState({
      imageURL,
      pokemonIndex,
      types,
      moves,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense,
      },
    });
  }
  render() {
    return (
      <div className="col">
        <div className="card mt-5">
          <div className="card-header">
            <div className="row">
              <div className="col-5">
                <h5>{this.state.pokemonIndex}</h5>
              </div>
              <div className="col-7">
                <div className="float-right">
                  {this.state.types.map((type) => (
                    <span
                      key={"type"}
                      className={"badge badge-primary badge-pill mr-1"}
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-md-3">
                  <img
                    src={this.state.imageURL}
                    className={"card-img-top rounded mx-auto mt-2"}
                  />
                </div>
                <div className="col-md-9">
                  <h4 className="mx-auto">
                    {this.state.name
                      .toLowerCase()
                      .split(" ")
                      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(" ")}
                  </h4>
                  {/*hp*/}
                  <div className="row align-item-center">
                    <div className="col-12 col-md-3">HP</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressBar"
                          style={{ width: `${this.state.stats.hp}%` }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>{this.state.stats.hp}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*attack*/}
                  <div className="row align-item-center">
                    <div className="col-12 col-md-3">Attack</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressBar"
                          style={{ width: `${this.state.stats.attack}%` }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>{this.state.stats.attack}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*defense*/}
                  <div className="row align-item-center">
                    <div className="col-12 col-md-3">Defense</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressBar"
                          style={{ width: `${this.state.stats.defense}%` }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>{this.state.stats.defense}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*speed*/}
                  <div className="row align-item-center">
                    <div className="col-12 col-md-3">Speed</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressBar"
                          style={{ width: `${this.state.stats.speed}%` }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>{this.state.stats.speed}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*specialAttack*/}
                  <div className="row align-item-center">
                    <div className="col-12 col-md-3">Special Attack</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressBar"
                          style={{
                            width: `${this.state.stats.specialAttack}%`,
                          }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>{this.state.stats.specialAttack}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*specialDefense*/}
                  <div className="row align-item-center">
                    <div className="col-12 col-md-3">Special Defense</div>
                    <div className="col-12 col-md-9">
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressBar"
                          style={{
                            width: `${this.state.stats.specialDefense}%`,
                          }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <small>{this.state.stats.specialDefense}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*moves*/}
                  <div className="row align-item-center">
                    <div className="col-12 col-md-3">Moves</div>
                    <div className="col-12 col-md-9"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-body">
              <h5 className="card-title text-center">Moves</h5>
            </div>
            <div className="row">
              {this.state.moves.map((move) => (
                <span className={"badge badge-primary badge-pill m-1"}>
                  {move}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
