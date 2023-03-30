import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setShowModal } from '../../store/NoteSlice';
import { deleteTip, deleteTheme } from '../../store/API/NoteApi';

import cl from './Form.module.css';


const DeleteTipForm = ({type}) => {
    const { activeTip, tips, themes, activeTheme, showModal } = useSelector(state => state.note);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        if (type === "tip"){
            dispatch(deleteTip(activeTip)); 
        } else if (type === "theme"){
            dispatch(deleteTheme(activeTheme));
        }
        dispatch(setShowModal(''));
    }

    return (
        <div>
            {showModal === 'deleteTip' &&
                <form className={cl.form}>
                    <p style={{ color: '#333' }}>Заметка <b> {tips.find(tip => tip.id === activeTip).title} </b> будет удалена! </p>
                    <input type="submit" style={{ backgroundColor: '#f00' }} onClick={handleSubmit} value='Удалить' />
                </form>
            }
            {showModal === 'deleteTheme' &&
                <form className={cl.form}>
                    <p style={{ color: '#333' }}>Раздел <b> {themes.find(theme => theme.id === activeTheme).title} </b> будет удален! </p>
                    <input type="submit" style={{ backgroundColor: '#f00' }} onClick={handleSubmit} value='Удалить' />
                </form>
            }
        </div>
    )
}

export default DeleteTipForm;