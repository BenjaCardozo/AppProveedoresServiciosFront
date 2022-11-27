import React from "react";
import Card from "./Card";

export const Cards = ({ results }) => {
  return (
    <div className="container">
      <ul className="cards">
        {results.map((p) => (
          <li className="card-item" key={p.name}>
            <Card url={p.url} />
          </li>
        ))}
      </ul>
    </div>
  );
};
