import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import baseUrl from '../../store/API/ApiSetup';
import { setThemes, setError } from '../../store/AppSlice';

import Chapter from '../Chapter/Chapter';

import cl from './Sidebar.module.css';

const Sidebar = () => {
  const themes = useSelector(state => state.themes);
  const dispatch = useDispatch();
  useEffect(() => {
    const config = { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } };
    const uri = '/themes';
    const endpoint = baseUrl + uri;
    axios.get(endpoint, config)
      .then(resp => {
        dispatch(setThemes(resp.data));
      })
      .catch(
        dispatch(setError('Данные не доступны!'))
      );
  }, []);
  return (
    <div className={cl.sidebar}>
      {themes.map(theme => <Chapter key={theme.id} title={theme.title} />)}
    </div>
  )
}

export default Sidebar;