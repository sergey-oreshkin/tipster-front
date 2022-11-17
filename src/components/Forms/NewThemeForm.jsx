import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createTheme } from '../../store/API/ThemesApi';

const NewThemeForm = () => {
    const [title, setTitle] = useState('');
    const dispatcher = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatcher(createTheme(title));
    }

    return (
        <form>
            <label htmlFor='title'>Название темы</label>
            <input name='title' type="text" onChange={e => setTitle(e.target.value)} value={title} />
            <input type="submit" onClick={handleSubmit} />
        </form>
    )

}

export default NewThemeForm;