import React from "react";
import useAxios  from "./hooks/useAxios";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import { clear } from "@testing-library/user-event/dist/clear";

/* Renders a list of playing cards.
 * Can also remove all cards,
 * and add a new card, either at random
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, addPokemon, clearPokemons] = useAxios(
    "pokemon",
    "https://pokeapi.co/api/v2/pokemon/"
  );
  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearPokemons}>Clear Pokemons</button>
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(card => (
          <PokemonCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;