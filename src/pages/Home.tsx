/*
    About: Main Home Page
*/

import * as React from 'react';

// Components
import Card from '../components/layout/Card';
import CategoryTitle from '../components/general/CategoryTitle';

// Typing
type CardObj = {
    title: String
};


type CategoryProps = {
    category: String,
    items: Array<CardObj>
};


const Category = ({ category, items }: CategoryProps) => {
    console.log("🚀 ~ file: Home.tsx ~ line 15 ~ Category ~ items", items)

    return (
        <>
            <CategoryTitle title={category} />
            {items.length && items.map(item => <Card title={item.title} />)}
        </>
    )
};



const Home = () => {
    // State Variables
    const [cards, setCards] = React.useState<Array<CardObj>>([]);


    // Functions
    const handleClick = () => {
        const newCards = [...cards, { title: 'New Card Made ' + cards.length }];
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