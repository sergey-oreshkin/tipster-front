import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setMessage } from '../../store/AppSlice';

import cl from './Notification.module.css';

const Notification = ()=>{
    const {message} = useSelector(state=> state);
    const dispacher = useDispatch();

    const classes = [cl.notification]

    if (message){
        classes.push(cl.active);
    }
    
    return(
        <div onClick={()=>dispacher(setMessage(''))} className={classes.join(' ')}>
            {message}
        </div>
    )
}

export default Notification;