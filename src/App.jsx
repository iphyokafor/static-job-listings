import React, { Component } from "react";

import Header from "./components/Header";
import Card from "./components/utils/Card";

import image1 from "./images/photosnap.svg";
import image2 from "./images/manage.svg";
import image3 from "./images/account.svg";
import image4 from "./images/myhome.svg";
import image5 from "./images/loop-studios.svg";
import image6 from "./images/faceit.svg";
import image7 from "./images/shortly.svg";
import image8 from "./images/insure.svg";
import image9 from "./images/eyecam-co.svg";
import image10 from "./images/the-air-filter-company.svg";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: "rgb(240,250,251)" }}>
        <Header />

        <Card imgSrc={image1} />
        <Card imgSrc={image2} />
        <Card imgSrc={image3} />
        <Card imgSrc={image4} />
        <Card imgSrc={image5} />
        <Card imgSrc={image6} />
        <Card imgSrc={image7} />
        <Card imgSrc={image8} />
        <Card imgSrc={image9} />
        <Card imgSrc={image10} />
      </div>
    );
  }
}

export default App;
