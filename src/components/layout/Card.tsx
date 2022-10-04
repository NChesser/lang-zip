/*
    About: Basic Card for displaying Items
*/

import * as React from 'react';

const Card = ({ ...props }) => {

    const { title } = props;

    return (
        <div className='card'>
            <h2>
                {title}
            </h2>
        </div>
    )
};

export default Card;