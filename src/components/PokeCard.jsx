import React from "react";

export const PokeCard = ({ curPoke }) => {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={curPoke.sprites.other.dream_world.front_default}
          className="pokemon-image"
        />
      </figure>
      <h1>{curPoke.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>{curPoke.types.map((curType) => curType.type.name).join(", ")}</p>
      </div>
      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span>Height: </span> {curPoke.height}
        </p>
        <p className="pokemon-info">
          <span>Weight: </span> {curPoke.weight}
        </p>
        <p className="pokemon-info">
          <span>Speed: </span> {curPoke.stats[5].base_stat}
        </p>
      </div>
      <div className="grid-three-cols">
        <div className="pokemon-info">
          <span> Experience:</span>
          <p>{curPoke.base_experience}</p>
        </div>
        <div className="pokemon-info">
          <span>Attack:</span>
          <p>{curPoke.stats[1].base_stat}</p>
        </div>
        <div className="pokemon-info">
          <span> Abilities: </span>
          <p>
            {curPoke.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .slice(0, 1)
              .join(", ")}
          </p>
        </div>
      </div>
    </li>
  );
};
