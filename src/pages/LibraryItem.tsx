
/*
    About: Library Item Display Component
*/

import * as React from 'react';

// Context
import { LibraryContext } from '../context/LibraryContext';

// Components
const LibraryItem = () => {
    // Context
    const { selectedItem } = React.useContext(LibraryContext);


    return (
        <div className="container flex">
            <div style={{ width: '30%', height: '400px', border: '2px solid grey' }}>

            </div>
            <div>
                <h2 className='disable-gutters'>{selectedItem?.title}</h2>
                <p className='subtitle'>{selectedItem?.description}</p>
                <p>Generes: {(selectedItem.genres || []).map(genre => <span>{genre}, </span>)}</p>
                <a href={selectedItem.url}>URL</a>
            </div>
        </div>
    )
};

export default LibraryItem;