import React from "react";

const AboutProjectCard = ({title, about, picture}) => {

    return (
    <article className='about-project__card'>
      <div className={`about-project__picture ${picture}`} />
      <h3 className='about-project__headline'>{title}</h3>
      <p className='about-project__subtitle'>{about}</p>
    </article>
    )
}

export default AboutProjectCard;
