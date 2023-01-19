import React from "react";

const Note = ({title,text}) => {
  return (
    <article className='note'>
      <h3 className='note__title'>{title}</h3>
      <p className='note__text'>{text}</p>
      <div className='note__edit-icon'/>
    </article>
  )
}

export default Note;
