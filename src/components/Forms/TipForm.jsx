import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTip } from '../../store/API/TipApi';
import { setShowModal } from '../../store/AppSlice';

const TipForm = () => {
    const { themes } = useSelector(state => state);
    const dispatcher = useDispatch();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [selectedTheme, setTheme] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        const theme = themes.find(t => t.title === selectedTheme);
        if (!theme) return;
        const data = {
            title: title,
            text: text,
            theme: theme
        }
        dispatcher(createTip(data));
        setText('');
        setTitle('');
        setTheme('');
        dispatcher(setShowModal(''));
    }

    const handleSelect = e => {
        setTheme(e.target.value);
    }

    return (
        <form>
            <label>
                <select name='theme' value={selectedTheme} onChange={handleSelect}>
                    <option></option>
                    {
                        themes.map(theme => <option key={theme.id}>{theme.title}</option>)
                    }
                </select>
            </label>
            <label htmlFor='title'>Заголовок</label>
            <input name='title' type="text" onChange={e => setTitle(e.target.value)} value={title} />
            <label htmlFor='text'>Текст</label>
            <textarea name='text' cols='100' rows='30' onChange={e => setText(e.target.value)} value={text}></textarea>
            <input type="submit" onClick={handleSubmit} />
        </form>
    )

}

export default TipForm;