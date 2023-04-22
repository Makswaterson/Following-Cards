import { useState } from 'react';
import { Btn } from '../MovieItem/MovieItem.styled';
import { Input } from './SearchBox.styled';

const SearchBox = ({ value, onSubmit, onChange }) => {
  const [searchInput, setSearchInput] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(searchInput);
    setSearchInput('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Input
        type="text"
        placeholder="Please enter movies name"
        value={searchInput}
        name="name"
        onChange={e => setSearchInput(e.target.value)}
      />
      <Btn type="submit">Search</Btn>
    </form>
  );
};

export default SearchBox;
