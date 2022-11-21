import React from 'react';
import { useSelector } from 'react-redux';

import cl from './Content.module.css';

const Content = () => {

  const { activeTip, tips } = useSelector(state => state);

  return (
    <div className={cl.content}>
      <div>
        {
          activeTip !== 0
            ?
            tips ? tips.find(tip => tip.id === activeTip).text : ''
            :
            ''
        }
      </div>
    </div>
  )
}

export default Content
