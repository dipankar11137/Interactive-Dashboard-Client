import React from 'react';

const Header = () => {
  const handleClick = e => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
  };
  return (
    <div className="flex">
      <div>
        {' '}
        <h1>Hello</h1>
      </div>
      <div>
        <input
          onChange={handleClick}
          className="w-[500px] border-2 p-2 rounded-lg"
          placeholder="hello dado"
          type="search"
        />
        <input className="btn btn-primary" type="submit" value="Search" />
      </div>
    </div>
  );
};

export default Header;
