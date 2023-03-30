import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cl from './ContentHeader.module.css';
import editPic from '../../images/edit_button.svg';
import deleteIcon from '../../images/delete-icon.svg';
import { setShowModal } from '../../store/NoteSlice';

const ContentHeader = () => {

    const { message, activeTip } = useSelector(state => state.note);

    const dispath = useDispatch();

    return (
        <div className={cl.ch}>
            <div className={cl.msg}>{message}</div>

            {Boolean(activeTip) &&
                <div className={cl.nav}>
                    <img src={editPic} className="pressable" alt="Редактировать" onClick={()=>dispath(setShowModal('editTip'))}/>
                    <img src={deleteIcon} className="pressable" alt="Удалить" onClick={()=>dispath(setShowModal('deleteTip'))}/>
                </div>}

        </div>
    )
}

export default ContentHeader;