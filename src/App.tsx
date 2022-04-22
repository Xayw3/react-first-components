import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Heading from './components/heading/heading';
import Button from './components/buttons/button';
import ButtonBasic from './components/buttons/button-basic';
import Image from './components/image';
import cat1 from './images/cat-1.jpg';
import cat2 from './images/cat-2.jpg';
import cat3 from './images/cat-3.jpg';
import cat4 from './images/cat-4.jpg';
import Circle from './components/circle/circle';
import Card from './components/cards/card';
import CardItem from './components/cards/card-component';
import Buttons from './components/buttons/buttons';

const App = () => (
  <div className="App">
    <header className="header">
      <Heading />
    </header>
    <div className="buttons">
      <div className="container">
        <div className="button__wrapper">
          <ButtonBasic />
          <ButtonBasic />
          <ButtonBasic />
        </div>
        <div className="button__wrapper">
          <Button className="btn btn--pink" text="Button 1" />
          <Button className="btn btn--pink" text="Button 2" />
          <Button className="btn btn--pink" text="Button 3" />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="cats">
        <Circle img={cat1} />
        <Circle img={cat2} />
        <Circle img={cat3} />
        <Circle img={cat4} />
      </div>
    </div>
    <div className="container">
      <div className="card-wrapper">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
    <div className="container">
      <div className="card-wrapper">
        <CardItem titleName="title 1" descText="Description 1" buttonText="Action" />
        <CardItem titleName="title 2" descText="Description 2" buttonText="Action" />
        <CardItem titleName="title 3" descText="Description 3" buttonText="Action" />
        <CardItem titleName="title 4" descText="Description 4" buttonText="Action" />
      </div>
    </div>
    <div className="container">
      <Buttons />
    </div>
  </div>
);

export default App;
