import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PokeCard } from "../PokeCard";

export const PokemonApi = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = useLoaderData();
  const fetchPokemon = async () => {
    try {
      const detailedPokemonData = loadData.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const data = await res.json();
        return data;
      });
      const allPokemon = await Promise.all(detailedPokemonData);
      setPokemon(allPokemon);
      // console.log(allPokemon);
      
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    fetchPokemon();
  }, [search]);

  const searchData = pokemon.filter((curPoke) =>
    curPoke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="cards">
          {searchData.map((curPoke) => {
            return <PokeCard key={curPoke.id} curPoke={curPoke} />;
          })}
        </div>
      </section>
    </>
  );
};
