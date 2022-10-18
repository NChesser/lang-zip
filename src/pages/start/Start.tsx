/*
    About: Main Start Page
*/

import * as React from 'react';

// Context
import { LibraryContext } from '../../context/LibraryContext';

// Components
import Category from './Category';

// Helper Modules
import { sample } from 'lodash';

// Constants
const cardNames = ['Dreaming Spanish', 'Nick\'s Amazing Adventure', 'Monkey\'s in Space', 'Harry Potter', 'Some Really Long Title With An Interesting Plot']

// Functions


// Components
const Start = () => {
    // Context
    const { libraryItems } = React.useContext(LibraryContext);

    return (
        <div className='container'>
            <Category category="YouTube" items={libraryItems} />
        </div>
    )
};


export default Start;