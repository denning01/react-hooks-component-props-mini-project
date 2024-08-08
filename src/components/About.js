import React from 'react'

function About({image, about}) {
  return (
    <div>
        <aside>
            <img src={image} alt={about} />
             <p>{about} </p>
        </aside>
    </div>
  );
}

export default About;