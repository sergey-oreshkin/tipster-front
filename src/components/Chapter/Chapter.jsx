import React, { useState } from 'react';

import Title from '../Title/Title';

const Chapter = (props) => {

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <div>
            <p onClick={toggleShow}>{props.title}</p>
            {
                show
                    ?
                    <div>
                        <Title />
                        <Title />
                    </div>
                    :
                    ''
            }
        </div>
    )
}

export default Chapter;