import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTheme } from '../../store/API/ThemesApi';
import { setShowModal } from '../../store/AppSlice';

import cl from './Form.module.css';

const ThemeForm = () => {
    const [title, setTitle] = useState('');
    const dispatcher = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatcher(createTheme(title));
        setTitle('');
        dispatcher(setShowModal(''));
    }

    return (
        <form className={cl.form}>
            <input name='title' type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder='Название раздела' />
            <input type="submit" onClick={handleSubmit} value='Создать' />
        </form>
    )

}

export default ThemeForm;