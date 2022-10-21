import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({heroBanner}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo"> {heroBanner.smallText} </p>
        <h5>{heroBanner.midText}</h5>
        <h3>{heroBanner.largeText1}</h3>
        <img src= { urlFor(heroBanner.image)} alt="headphones" className="hero-banner-image"></img>

        <div>
          <Link href= { `/product/${heroBanner.product}`}>
            <button type="button"> {heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner