/*
    About: Main Home Page
*/

import * as React from 'react';

// Components
import Card from '../components/layout/Card';
import CategoryTitle from '../components/general/CategoryTitle';
import Grid from '../components/layout/Grid';

// Helper Modules
import { sample } from 'lodash';

// Constants
const cardNames = ['Dreaming Spanish', 'Nick\'s Amazing Adventure', 'Monkey\'s in Space', 'Harry Potter', 'Some Really Long Title With An Interesting Plot']

// Typing
type CardObj = {
    title: String | any
};

type CategoryProps = {
    category: String,
    items: Array<CardObj>
};


const Category = ({ category, items }: CategoryProps) => {
    return (
        <div className='category'>
            <CategoryTitle title={category} />
            <Grid>
            </Grid>
            <div className='flex'>
                {items.map(item => <Card {...item} />)}
            </div>
        </div>
    )
};


const Home = () => {
    // State Variables
    const [cards, setCards] = React.useState<Array<CardObj>>([]);

    // Functions
    const handleClick = () => {
        const title = sample(cardNames);
        const newCards = [...cards, { title, tags: ['• tag1', '• tag2', '• tag3'] }];
        setCards(newCards);
    };



    return (
        <div className='container'>
            <Category category="Random" items={cards} />
            <Category category="Podcasts" items={cards} />
            <Category category="YouTube" items={cards} />

            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    )
};


export default Home;