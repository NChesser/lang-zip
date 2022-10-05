/*
    About: Basic Card for displaying Items
*/

import * as React from 'react';

// Typing
type Props = {
    children?: JSX.Element | JSX.Element[]
};


const Toolbar = ({ children }: Props) => {

    return (
        <div className='toolbar'>
            {children}
        </div>
    )
};

export default Toolbar;