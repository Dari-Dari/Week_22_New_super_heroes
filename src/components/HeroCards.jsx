import React from "react";

const HeroCard = ({ hero }) => {
  return (
    <div className="card">
      <h3>{hero.name}</h3>
      <p>{hero.universe}</p>
      <p>Альтер эго: {hero.alterego}</p>
      <p>Род занятий: {hero.occupation}</p>
      <p>Друзья: {hero.friends}</p>
      <p>Суперсилы: {hero.superpowers}</p>
      <img src={hero.url} alt={hero.name} />
      <p className="info">{hero.info}</p>
    </div>
  );
};

export default HeroCard;
