import React from 'react'
import { useSelector } from 'react-redux'

const Content = () => {

  const { activeTip, activeTheme, tips } = useSelector(state => state);

  return (
    <div>
      {
        activeTip !== 0
          ?
          tips[activeTheme] ? tips[activeTheme].find(tip => tip.id === activeTip).text : ''
          :
          ''
      }
    </div>
  )
}

export default Content
