import React from "react";
import Travel from "./Travel"

const voyage = [
  {
    
      image:"https://media.cntraveler.com/photos/5b8576320c5e123ef6ed3d55/master/pass/Budapest_GettyImages-512278610.jpg",
      destination:"Hungary",
      country:"Budapest",
      distance:"1200 km"

  },
  {

      image:"https://photo-thalasso-to.advences.com/Mexique-Autotour-7n-1.jpg",
      destination:"Mexique",
      country:"Mexico",
      distance:"7000 km"
  },
  {

      image:"https://img.ev.mu/images/attractions/7690/600x400/435359.jpg",    
      destination:"Thailande",
      country:"Phuket",
      distance:"10000 km"
  },
  {

      image:"https://photos.lci.fr/images/613/344/prague-republique-tcheque-446caf-0@1x.jpeg",    
      destination:"Tchequie",
      country:"Prague",
      distance:"800 km"
  },
{
  image:"https://media.routard.com/image/03/3/portoferraio-ile-elbe-italie.1531033.w740.jpeg",
  destination:"Italie",
  country:"Ile d'Elbe",
  distance:"1500 km"
  }
];

const Travels = voyage.map((elem)=>(
  <Travel img={elem.image} dest={elem.destination} count={elem.country} dist={elem.distance} />
))


export default Travels;