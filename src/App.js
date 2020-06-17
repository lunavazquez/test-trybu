import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';

// query
const EXCHANGE_POKEMONS = gql`
  {
    pokemons(first: 151) {
      id
      number
      name
      image
      types
    }
  }
`;

export default function App() {
  const [search, setSearch] = useState('');
  const { loading, error, data } = useQuery(EXCHANGE_POKEMONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // console.log(data.pokemons);
  // destructuring
  const { pokemons } = data;

  function handelNameSearch(e) {
    setSearch(e.target.value);
  }
  // console.log(search);
  return (
    <section className="container">
      <Header value={search} onChange={handelNameSearch} />
      <article className="pokemon_container">
        {pokemons
          .filter((pokemon) => {
            // console.log(search.length);
            // se ejecuta cuando search tiene un valor
            if (search) {
              return pokemon.name
                .toLowerCase()
                .includes(search.toLocaleLowerCase());
            }
            // regresa arreglo completo
            return true;
          })
          .map((pokemon) => {
            // console.log(pokemon);
            // destructuring
            const { id, image, types, name, number } = pokemon;
            return (
              <Card
                id={number}
                key={id}
                img={image}
                name={name}
                type={types[0].toLowerCase()}
              />
            );
          })}
      </article>
    </section>
  );
}
