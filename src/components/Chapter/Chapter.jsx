import React from 'react';
import { useSelector } from 'react-redux';

import Tip from '../Tip/Tip';

const Chapter = ({ theme, clickHandle }) => {
    const { activeTheme, tips } = useSelector(state => state);

    return (
        <div>
            <p className='pressable' onClick={() => clickHandle(theme.id, 'theme')}>{theme.title}</p>
            {
                activeTheme === theme.id
                    ?
                    tips[theme.id] ? tips[theme.id].map(tip => <Tip key={tip.id} tip={tip} clickHandle={clickHandle} />) : ''
                    :
                    ''
            }
        </div>
    )
}

export default Chapter;