import React from 'react';
import { useSelector } from 'react-redux';

import Tip from '../Tip/Tip';

const Theme = ({ theme, clickHandle }) => {
    const { activeTheme, tips } = useSelector(state => state);

    return (
        <div>
            <p className='pressable' style={{ fontWeight: 'bold' }} onClick={() => clickHandle(theme.id, 'theme')}>{theme.title}</p>
            {
                activeTheme === theme.id
                    ?
                    tips && tips.filter(tip => tip.theme.id === activeTheme).map(tip => <Tip key={tip.id} tip={tip} clickHandle={clickHandle} />)
                    :
                    ''
            }
        </div>
    )
}

export default Theme;