/*
    About: Basic Card for displaying Items
*/

import * as React from 'react';

const Card = ({ ...props }) => {

    const { title, description } = props;

    return (
        <div className='card'>
            <div className='card-description'>
                {description}
            </div>
            <div className='card-title'>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    )
};

export default Card;