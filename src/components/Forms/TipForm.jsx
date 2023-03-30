import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { createTip, updateTip } from '../../store/API/NoteApi';
import { setShowModal } from '../../store/NoteSlice';

import cl from './Form.module.css';

const TipForm = ({ type }) => {
    const { themes, tips, activeTip } = useSelector(state => state.note);
    const dispatcher = useDispatch();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [selectedTheme, setTheme] = useState('');

    useEffect(() => {
        if (type === 'edit' && activeTip) {
            const tip = tips.find(t => t.id === activeTip);
            if (tip) {
                setTheme(themes.find(theme => theme.id === tip.theme).title);
                setTitle(tip.title);
                setText(tip.text);
            }
        }
    }, [type, themes, tips, activeTip]);

    const handleSubmit = e => {
        e.preventDefault();
        const theme = themes.find(t => t.title === selectedTheme);
        if (!theme) return;
        const data = {
            title: title,
            text: text,
            theme: theme.id
        }
        if (type === 'edit' && activeTip) {
            data.id = activeTip;
            dispatcher(updateTip(data));
        } else {
            dispatcher(createTip(data));
        }
        setText('');
        setTitle('');
        setTheme('');
        dispatcher(setShowModal(''));
    }

    return (
        <form className={cl.form}>
            <p style={{ color: '#333' }}>Раздел
                <select name='theme' value={selectedTheme} onChange={e => setTheme(e.target.value)}>
                    <option></option>
                    {
                        themes.map(theme => <option key={theme.id}>{theme.title}</option>)
                    }
                </select>
            </p>
            <p style={{ color: '#333' }}>Заголовок
                <input name='title' type="text" onChange={e => setTitle(e.target.value)} value={title} placeholder='Введите название' />
            </p>
            <textarea name='text' rows='25' cols='60' onChange={e => setText(e.target.value)} value={text} placeholder='Введите текст'></textarea>
            <input type="submit" onClick={handleSubmit} value='Отправить' />
        </form>
    )

}

export default TipForm;