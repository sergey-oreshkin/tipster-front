import React from 'react';
import { useSelector } from 'react-redux';

import Tip from '../Tip/Tip';

const Theme = ({ theme, clickHandle }) => {
    const { activeTheme, tips } = useSelector(state => state.note);

    const classes = ['pressable']
    if (theme.id === activeTheme) classes.push('active');

    return (
        <div>
            <p className={classes.join(' ')} style={{ fontWeight: 'bold' }} onClick={() => clickHandle(theme.id, 'theme')}>{theme.title}</p>
            {
                activeTheme === theme.id
                    ?
                    tips && tips.filter(tip => tip.theme === activeTheme).map(tip => <Tip key={tip.id} tip={tip} clickHandle={clickHandle} />)
                    :
                    ''
            }
        </div>
    )
}

export default Theme;