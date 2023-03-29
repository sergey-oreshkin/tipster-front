import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setShowModal } from '../../../store/NoteSlice';

import cl from './Modal.module.css';

const Modal = ({ children, name }) => {
    const dispatcher = useDispatch();
    const note = useSelector(state => state.note);

    const classes = [cl.modal];

    if (note.showModal === name) {
        classes.push(cl.active);
    }

    return (
        <div className={classes.join(' ')} onClick={() => dispatcher(setShowModal(''))}>
            <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

export default Modal;