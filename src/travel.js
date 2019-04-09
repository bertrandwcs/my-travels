import React from "react";

const travel = ({ destination, country, photo, distance }) => (
    <figure>
      <img src={photo} alt={character} />
      <figcaption>
        <blockquote>{destination}</blockquote>
        <cite>{country}</cite>
        <distance>{distance}</distance>
      </figcaption>
    </figure>
  );
  


export default travel;