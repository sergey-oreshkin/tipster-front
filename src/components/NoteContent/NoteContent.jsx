import React from 'react';

import { useSelector } from 'react-redux';
import ContentHeader from '../ContentHeader/ContentHeader';
import cl from './NoteContent.module.css';

const NoteContent = () => {
  const { activeTip, tips } = useSelector(state => state.note);

  const currentTip = tips.find(tip => tip.id === activeTip);
  return (
    <div className={cl.content}>
      <ContentHeader />
      <div>
        <h3>
          {
            activeTip !== 0
              ?
              currentTip ? currentTip.title : ''
              :
              ''
          }
        </h3>
        <br />
        {
          activeTip !== 0
            ?
            currentTip ? currentTip.text : ''
            :
            ''
        }
      </div>
    </div>
  )
}

export default NoteContent;