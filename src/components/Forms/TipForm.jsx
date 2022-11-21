import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTip, updateTip } from '../../store/API/TipsApi';
import { setShowModal } from '../../store/AppSlice';

const TipForm = ({ type }) => {
    const { themes, tips, activeTip } = useSelector(state => state);
    const dispatcher = useDispatch();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [selectedTheme, setTheme] = useState('');

    useEffect(() => {
        if (type === 'edit' && activeTip) {
            const tip = tips.find(t => t.id === activeTip);
            if (tip) {
                setTheme(tip.theme.title);
                setTitle(tip.title);
                setText(tip.text)
            }
        }
    }, [type, tips, activeTip]);

    const handleSubmit = e => {
        e.preventDefault();
        const theme = themes.find(t => t.title === selectedTheme);
        if (!theme) return;
        const data = {
            title: title,
            text: text,
            theme: theme
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
        <form>
            <label>
                <select name='theme' value={selectedTheme} onChange={e => setTheme(e.target.value)}>
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