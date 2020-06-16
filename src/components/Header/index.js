import React from 'react';
import { ReactComponent as Search } from '../icons/search.svg';
import { ReactComponent as Pokemon } from '../icons/pokemon.svg';
import './header.css';

export default function Header(props) {
  const { value, onChange } = props;
  return (
    <header className="header">
      <Pokemon className="title" />
      <div className="search-container">
        <input
          className="input"
          type="text"
          value={value}
          onChange={onChange}
        />
        <Search className="icon-search" />
      </div>
    </header>
  );
}
