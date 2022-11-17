import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import updateThemes from '../../store/API/ThemesApi';
import getTips from '../../store/API/TipApi';
import { setActiveTheme, setActiveTip } from '../../store/AppSlice';

import Chapter from '../Chapter/Chapter';

import cl from './Sidebar.module.css';

const Sidebar = () => {
  const { themes } = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(updateThemes()) }, []);

  const clickHandle = (id, type) => {
    if (type === 'tip') {
      dispatch(setActiveTip(id));
    }
    if (type === 'theme') {
      dispatch(setActiveTip(0));
      dispatch(setActiveTheme(id));
      dispatch(getTips(id));
    }
  }
  
  return (
    <div className={cl.sidebar}>
      {themes.map(theme => <Chapter key={theme.id} theme={theme} clickHandle={clickHandle} />)}
    </div>
  )
}

export default Sidebar;