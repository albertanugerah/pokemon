import React, { Component } from "react";
import PokemonList from "../pokemon/PokemonList";

class Dashboard extends Component {
  render() {
    return (
      <div className="row">
        <div className="col mt-5">
          <PokemonList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
