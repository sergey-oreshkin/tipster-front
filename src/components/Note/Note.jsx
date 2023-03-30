import React from 'react';
import CreateThemeForm from '../Forms/CreateThemeForm';
import DeleteTipForm from '../Forms/DeleteTipForm';
import TipForm from '../Forms/TipForm.jsx';
import NoteContent from '../NoteContent/NoteContent';
import NoteList from '../NoteList/NoteList';
import Modal from '../UI/Modal/Modal';
import cl from './Note.module.css';

const Note = () => {
    return (
        <div className={cl.notes}>
            <NoteList />
            <NoteContent />
            <Modal name='newTheme'>
                <CreateThemeForm />
            </Modal>
            <Modal name='newTip'>
                <TipForm type='new' />
            </Modal>
            <Modal name='editTip'>
                <TipForm type='edit' />
            </Modal>
            <Modal name='deleteTip'>
                <DeleteTipForm type = 'tip'/>
            </Modal>
            <Modal name='deleteTheme'>
                <DeleteTipForm type = 'theme'/>
            </Modal>
        </div>
    )
}

export default Note;