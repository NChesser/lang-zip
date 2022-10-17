/*
    About: Library Context 
*/

import * as React from 'react';

// Example Data
import YouTube from '../data/categories/YouTube.json';


// Context
export const LibraryContext = React.createContext<LibraryContextType>({
    libraryItems: YouTube,
    selectedItem: YouTube[0],
    handleSelectedItem: () => { }
});


const LibraryProvider = ({ children }: GridProps) => {
    const libraryItems = YouTube

    const [selectedItem, setSelectedItem] = React.useState<LibraryItem>(YouTube[0]);

    const handleSelectedItem = (item: LibraryItem) => {
        setSelectedItem(item);
    };

    return (
        <LibraryContext.Provider value={{ libraryItems, selectedItem, handleSelectedItem }}>
            {children}
        </LibraryContext.Provider>
    )

};


export default LibraryProvider;