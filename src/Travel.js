import React from "react";


const Travel = ({ img, count, dest, dist}) => (
  <figure>
    <img src={img} alt={""} />
    <figcaption>
      <p>{count}</p>
      <p>{dest}</p>
      <p>{dist}</p>
    </figcaption>
  </figure>
);

export default Travel;