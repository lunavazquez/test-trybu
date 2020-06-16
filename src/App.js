import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
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
  const { loading, error, data } = useQuery(EXCHANGE_POKEMONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // console.log(data.pokemons);
  // destructuring
  const { pokemons } = data;
  return (
    <section className="container">
      <article className="pokemon_container">
        {pokemons.map((pokemon) => {
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
