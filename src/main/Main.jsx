import React, { useState } from 'react';

const Main = () => {
  const [selectName, setName] = useState('Hello someone');

  const names = [
    'Alice',
    'Bob',
    'Charlie',
    'Diana',
    'Evan',
    'Fiona',
    'George',
    'Hannah',
    'Ian',
    'Julia',
  ];

  const randomName = () => {
    let randomNum = Math.floor(Math.random() * 10);

    names[randomNum];
    let name = names[randomNum];

    name = names[randomNum];

    setName(`Oh... Hello ${name}`);

    console.log(name);
  };

  return (
    <div>
      <button onClick={randomName}>Select random name</button>
      <h1>{selectName}</h1>
    </div>
  );
};

export default Main;
