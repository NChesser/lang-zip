/*
    About: Main Home Page
*/

import * as React from 'react';

// Components
import Category from './Category';
import Card from '../../components/layout/Card';

// Helper Modules
import { sample } from 'lodash';

// Example Data
import YouTube from '../../data/categories/YouTube.json';


// Constants
const cardNames = ['Dreaming Spanish', 'Nick\'s Amazing Adventure', 'Monkey\'s in Space', 'Harry Potter', 'Some Really Long Title With An Interesting Plot']


// Functions


// Components
const Home = () => {
    // State Variables
    const [cards, setCards] = React.useState<Array<CardObj>>([]);

    // Functions
    const handleClick = () => {
        const title = sample(cardNames) || '';
        const newCards = [...cards, { title, tags: ['• tag1', '• tag2', '• tag3'] }];
        setCards(newCards);
    };


    return (
        <div className='container'>
            <Category category="Random" items={cards} />
            <Category category="Podcasts" items={cards} />
            <Category category="YouTube" items={YouTube} />

            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
};


export default Home;