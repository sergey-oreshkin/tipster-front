import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setShowModal } from '../../../store/AppSlice';

import cl from './Modal.module.css';

const Modal = ({ children, name }) => {
    const dispatcher = useDispatch();
    const { showModal } = useSelector(state => state);

    const classes = [cl.modal];

    if (showModal === name) {
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