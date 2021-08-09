import React from 'react';
import Grid from '../Components/Grid';
import Button from '../Components/Button';
import OnOffButton from '../Components/OnOffButton';

const MainView = () => {
  return (
    <>
      <Grid />
      <Button
        label="Hi there!"
        color="secondary"
        handleClick={() => console.log('Hi')}
      />
      <OnOffButton />
    </>
  );
};

export default MainView;
