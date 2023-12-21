import React from "react";
import HeroCard from "./components/HeroCards";
import heroesData from "./hero.json";
import "./App.css";

const App = () => {
  return (
    <section>
      <h1>СУПЕРГЕРОИ</h1>
      <div className="container">
        {heroesData.map((hero) => (
          <HeroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </section>
  );
};

export default App;
