import React from 'react';
import styles from '../styles/Elements.module.scss';
import Daisy from '../assets/images/elements/daisy.png';
import Sparckles from '../assets/images/elements/sparckles.png';
import SparcklesLeft from '../assets/images/elements/sparckles-left.png';
import SparcklesRight from '../assets/images/elements/sparckles-right.png';

const Elements = () => {
  const elements = [
                    { name: "Daisy", image: Daisy },
                    { name: "Sparckles", image: Sparckles },
                    { name: "SmallDaisy", image: Daisy },
                    { name: "SparcklesLeft", image: SparcklesLeft },
                    { name: "SparcklesRight", image: SparcklesRight },
                  ]

  return (
    elements.map(element => (
      <div className={styles[element.name]} >
        <img src={element.image} alt={`A watercolor drawing`} />
      </div>
    ))
  )
}

export default Elements;