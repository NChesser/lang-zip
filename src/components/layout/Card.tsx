/*
    About: Basic Card for displaying Items
*/

import * as React from 'react';

// Routing
import { useNavigate } from "react-router-dom";

// Helper Modules
import { sample, random, indexOf } from 'lodash';

// Context
import { LibraryContext } from '../../context/LibraryContext';

// Constants
const colorClasses = ['youtube', 'netflix', 'spotify', 'podcast', 'book'];
const difficultyLevels = [
    'super-beginner',
    'beginner',
    'intermediate',
    'advanced',
    'native'
];


const Card = ({ ...props }: LibraryItem) => {
    // Props
    const { title, difficulty, type } = props;

    // Context
    const { libraryItems, handleSelectedItem } = React.useContext(LibraryContext);

    // Navigate
    const navigate = useNavigate();

    // Functions
    const difficultyLevel = indexOf(difficultyLevels, difficulty) + 1;

    const handleNavigate = async () => {
        let index = 0;
        libraryItems && libraryItems.forEach((item, count) => {
            if (title.match(item.title.toString())) {
                index = count;
            }
        });

        // Set Selected Item
        handleSelectedItem(libraryItems[index]);

        // Navigate to page
        navigate(`/${type}/${title}`)
    };


    return (
        <div className='card' onClick={handleNavigate}>
            <div className='card-image grid'>
                <div className={"card-icon circle " + type} />
            </div>
            <div className='card-description'>
                <p className="card-title-text text hide-text-overflow">
                    {title}
                </p>
                <meter min="0" max="5" optimum={5} value={difficultyLevel} />
                {/* {tags && tags.map(tag =>
                        <p className='subtitle text hide-text-overflow'>
                            {tag}
                        </p>
                    )} */}
            </div>
        </div>
    )
};

export default Card;