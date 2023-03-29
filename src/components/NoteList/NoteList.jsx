import React, { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux';

import { getThemes, getTip } from '../../store/API/NoteApi';
import {setActiveTheme, setActiveTip} from '../../store/NoteSlice';
import Theme from '../Theme/Theme';


import cl from './NoteList.module.css';



const NoteList = () => {
    const { themes } = useSelector(state => state.note);
    const dispatch = useDispatch();
    const items = [...themes];

    // eslint-disable-next-line 
    useEffect(() => { dispatch(getThemes()) }, []);

    const clickHandle = (id, type) => {
        if (type === 'tip') {
          dispatch(setActiveTip(id));
        }
        if (type === 'theme') {
          dispatch(setActiveTip(0));
          dispatch(setActiveTheme(id));
          dispatch(getTip(id));
        }
      }

    return (
        <div className={cl.noteList}>
            {items.sort().map(theme => <Theme key={theme.id} theme={theme} clickHandle={clickHandle} />)}
        </div>
    )
}

export default NoteList;