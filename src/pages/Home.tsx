/*
    About: Main Home Page
*/

import * as React from 'react';

// Components
import Card from '../components/layout/Card';
import CategoryTitle from '../components/general/CategoryTitle';
import Grid from '../components/layout/Grid';

// Typing
type CardObj = {
    title: String
};

type CategoryProps = {
    category: String,
    items: Array<CardObj>
};


const Category = ({ category, items }: CategoryProps) => {
    return (
        <>
            <CategoryTitle title={category} />
            <Grid>
                {items.map(item => <Card {...item} />)}
            </Grid>
        </>
    )
};


const Home = () => {
    // State Variables
    const [cards, setCards] = React.useState<Array<CardObj>>([]);

    // Functions
    const handleClick = () => {
        const newCards = [...cards, { title: 'New Card Made ' + cards.length, description: 'Dreaming Spanish' }];
        setCards(newCards);
    };



    return (
        <>
            <Category category="Random" items={cards} />

            <button onClick={handleClick}>
                Click Me
            </button>
        </>
    )
};


export default Home;