import React from 'react';
import { useSelector } from 'react-redux';

import cl from './Content.module.css';

const Content = () => {

  const { activeTip, tips } = useSelector(state => state);

  const currentTip = tips.find(tip => tip.id === activeTip);

  return (
    <div className={cl.content}>
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

export default Content
